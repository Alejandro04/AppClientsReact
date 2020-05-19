import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
        console.log(this.props)
        const { clients } = this.props.clients
        return (
            <div>
                <ListGroup>
                    <TransitionGroup className="client-list">
                        {clients.map(({_id, name, description }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="mr-4"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.handleDelete(_id)}
                                    >
                                        &times;
                                        </Button>
                                    {name} - {description}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </div>
        )
    }
}

ClientList.propTypes = {
    getClients: PropTypes.func.isRequired,
    clients: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    clients: state.clients
})

export default connect(mapStateToProps, {getClients, deleteClient})(ClientList)