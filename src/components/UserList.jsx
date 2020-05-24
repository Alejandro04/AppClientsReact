import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getUsers, deleteUser } from '../actions/userAction'
import PropTypes from 'prop-types'

class UserList extends Component {

    componentDidMount(){
        this.props.getUsers()
    }

    handleDelete = (id) => {
        this.props.deleteUser(id)
    };

    render() {
        const { users } = this.props.users
        return (
            <div>
                <ListGroup>
                    <TransitionGroup className="client-list">     
                        {users.map(({_id, name, email }) => (
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
                                    {name} - {email}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </div>
        )
    }
}

UserList.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, {getUsers, deleteUser})(UserList)