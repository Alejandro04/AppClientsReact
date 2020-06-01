import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button, Input } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getClients, deleteClient } from '../actions/clientAction'
import PropTypes from 'prop-types'
import SearchInput from './SearchInputClients'

// Children components
import ClientUpdateModal from './ClientUpdateModal'

class ClientList extends Component {

    componentDidMount() {
        this.props.getClients()
    }

    handleDelete = (id) => {
        this.props.deleteClient(id)
    };

    render() {
        const { clients } = this.props.clients
        console.log(this.props)
        return (
            <div>
                <ListGroup>
                    <TransitionGroup className="client-list">
                        <SearchInput />
                        {clients.map(({ _id, name, description }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <div className="btn-action-container">
                                        <Button
                                            className="mr-1"
                                            color="danger"
                                            size="sm"
                                            onClick={() => this.handleDelete(_id)}
                                        >
                                            &times;
                                        </Button>
                                        <ClientUpdateModal _id={_id} name={name} description={description} />
                                        <div className="mt-2">
                                            {name} - {description}
                                        </div>
                                    </div>
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

export default connect(mapStateToProps, { getClients, deleteClient })(ClientList)