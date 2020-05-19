import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux'
import { getClients, deleteClient } from '../actions/itemAction'
import PropTypes from 'prop-types'

class ClientList extends Component {

    componentDidMount(){
        this.props.getClients()
    }

    handleDelete = (id) => {
        this.props.deleteClient(id)
    };

    render() {
        const { items } = this.props.item
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Client')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }))
                        }
                    }}
                >Add Client</Button>

                <ListGroup>
                    <TransitionGroup className="client-list">
                        {items.map(({id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="mr-4"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.handleDelete(id)}
                                    >
                                        &times;
                                        </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ClientList.propTypes = {
    getClients: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getClients, deleteClient})(ClientList)