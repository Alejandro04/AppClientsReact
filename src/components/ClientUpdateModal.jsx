import React, { useState, Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { connect } from 'react-redux'
import { updateClient } from '../actions/clientAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class ClientUpdateModal extends Component {

    state = {
        modal: false,
        _id: '',
        name: '',
        description: ''
    }

    componentDidMount() {
        this.setState({
            _id: this.props._id,
            name: this.props.name,
            description: this.props.description
        })
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

        const updateClient = {
            _id: this.state._id,
            name: this.state.name,
            description: this.state.description
        }

        this.props.updateClient(updateClient)
        this.handleToogle()
    }

    render() {
        return (
            <div>
                <Button color="warning" onClick={this.handleToogle} className="mr-4">
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Modal isOpen={this.state.modal} handleToogle={this.handleToogle}>
                    <ModalHeader handleToogle={this.handleToogle}>Update client</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="client">
                                    Client: {this.state.name}
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="client"
                                    placeholder="Update client"
                                    onChange={this.onChange}>
                                </Input>
                                <Label for="description" className="mt-4">
                                    Description: {this.state.description}
                                </Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Update description"
                                    onChange={this.onChange}>
                                </Input>
                                <Button
                                    className="mt-4"
                                    color="dark"
                                    block >
                                    Update cliente
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


export default connect(null, { updateClient })(ClientUpdateModal);