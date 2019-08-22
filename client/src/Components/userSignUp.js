import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Modal, ModalBody, Button, Form,
     FormGroup, Label, Input } from "reactstrap";


class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            userName: '',
            email: ''
        };
        this.modalToggle = this.modalToggle.bind(this);
        this.handleChange = this.handleOnChange.bind(this);
    }

    modalToggle() {
        this.setState({ modal: !this.state.modal });
    }

    handleOnChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.modalToggle();
        console.log('submit')
    }


    render() {
        return (
            <div>
                <Button color="secondary" size="sm" onClick={this.modalToggle} style={{ marginRight: '.5rem' }}>Sign Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.modalToggle}>
                    <ModalBody className="bg-secondary" >
                        <div>
                            <Button onClick={this.modalToggle} close/>
                            <Form onSubmit={(event) => this.handleOnSubmit(event)}>
                                <FormGroup>
                                    <Label for="userName">Surfer Name</Label>
                                    <Input type="text" id="userName" name="userName" placeholder="Surfer Name"
                                        onChange={(event) => this.handleOnChange(event)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Surfer Email</Label>
                                    <Input type="email" id="email" name="email" placeholder="Surfer Email"
                                        onChange={(event) => this.handleOnChange(event)} />
                                </FormGroup>
                                <Button type="submit">Sign Up</Button>
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// export default connect(mapStateToProps)(SignUpModal);
export default SignUpModal