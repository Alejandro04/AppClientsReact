import React, { useState, Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { connect } from 'react-redux'
import { addClient } from '../actions/clientAction'

class ClientModal extends Component {

    state = {
        modal: false,
        name: '',
        description: ''
    }

    handleToogle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const newClient = {
            name: this.state.name,
            description: this.state.description
        }

        this.props.addClient(newClient)
        this.handleToogle()
    }

    render() {
        return (
            <div>
                <Button color="dark" onClick={this.handleToogle} className="mb-4">Add Clients</Button>
                <Modal isOpen={this.state.modal} handleToogle={this.handleToogle}>
                    <ModalHeader handleToogle={this.handleToogle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="client">
                                    Client
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="client"
                                    placeholder="Add client"
                                    onChange={this.onChange}>
                                </Input>
                                <Label for="description" className="mt-4">
                                    Description
                                </Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Add description"
                                    onChange={this.onChange}>
                                </Input>
                                <Button
                                    className="mt-4"
                                    color="dark"
                                    block >
                                    Save client
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
    clients: state.clients
})

export default connect(mapStateToProps, { addClient })(ClientModal);