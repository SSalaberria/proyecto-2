import React, { Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

import ReactDOM from 'react-dom'




export default class Modals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSaveModal: false,
            showDeleteModal: false,
            design_name_form_value: '',
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.loadModals()}
                <Button variant="success" onClick={this.handleShowSaveModal}>Save shirt</Button>
                <Button variant="danger" className="ml-3" onClick={this.handleShowDeleteModal}>Delete shirt</Button>
            </React.Fragment>
        );
    }

    loadModals() {
        return (
            <React.Fragment>
                <Modal show={this.state.showSaveModal} onHide={this.handleCloseSaveModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Save design</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Enter a design name</Form.Label>
                        <Form.Control type="text" value={this.state.design_name_form_value} onChange={this.handleTextInputChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseSaveModal}>
                            Close
                            </Button>
                        <Button variant="success" onClick={this.handleSelectedSave}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showDeleteModal} onHide={this.handleCloseDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure you want to delete the shirt?</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>
                        
                    </Modal.Body> */}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseDeleteModal}>
                            Close
                            </Button>
                        <Button variant="danger" onClick={this.handleSelectedDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

    handleSelectedSave = () => {
        this.handleCloseSaveModal();
        this.props.onSelectSave(this.state.design_name_form_value);
    }

    handleSelectedDelete = () => {
        this.handleCloseDeleteModal();
        this.props.onSelectDelete();
    }

    handleShowSaveModal = () => {
        this.setState({ design_name_form_value: this.props.design_name, showSaveModal: true });
    }

    handleCloseSaveModal = () => {
        this.setState({ showSaveModal: false });
    }

    handleTextInputChange = (event) => {
        this.setState({ design_name_form_value: event.target.value });
    }

    handleShowDeleteModal = () => {
        this.setState({ showDeleteModal: true });
    }

    handleCloseDeleteModal = () => {
        this.setState({ showDeleteModal: false });
    }
}
