import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText, NavLink, Alert
} from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/authAction'
import { clearErrors } from '../../actions/errorAction'

class RegisterModal extends Component {

    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        // if user is authenticated close the modal
        if(this.state.modal){
            if(isAuthenticated){
                this.handleToogle()
            }
        }
    }

    handleToogle = () => {
        this.props.clearErrors()
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const { name, email, password } = this.state
        const newUser = {
            name,
            email,
            password
        }

        // Register
        this.props.register(newUser)
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.handleToogle} href="#">Register</NavLink>
                <Modal isOpen={this.state.modal} handleToogle={this.handleToogle}>
                    <ModalHeader handleToogle={this.handleToogle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color='danger'> {this.state.msg} </Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="client">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onChange}>
                                </Input>
                                <Label for="description" className="mt-4">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}>
                                </Input>
                                <Label for="description" className="mt-4">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange}>
                                </Input>
                                <Button
                                    className="mt-4"
                                    color="dark"
                                    block >
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.handleToogle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);