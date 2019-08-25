import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Form,
     FormGroup, Label, Input, NavItem, NavLink, Media } from "reactstrap";
     import surfLogo from '../images/surfers_log_logo.jpg'

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            userName: '',
            email: '',
            password: ''
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

    handleOnLogInSubmit(event){
        event.preventDefault();
        this.modalToggle();
        console.log('submit Log In')
        console.log(this.state)
    }

    handleOnSignUpSubmit(event){
        event.preventDefault();
        this.modalToggle();
        console.log('submit Sign Up')
        console.log(this.state)
    }

    render() {
        return (
            <NavItem>
                <NavLink href="#" onClick={this.modalToggle}>{this.props.form}</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.modalToggle}>    
                    <ModalHeader toggle={this.modalToggle}>
                        <Media src={surfLogo} height={60} width={60} alt="Surfers Log Logo" />
                        {this.props.form}
                    </ModalHeader>
                    <ModalBody>
                        <div>   
                            <Form onSubmit={
                                this.props.form === "Log In" ?
                                (event) => this.handleOnLogInSubmit(event):
                                (event) => this.handleOnSignUpSubmit(event)
                            }>
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
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" id="password" name="password" placeholder="Password"
                                        onChange={(event) => this.handleOnChange(event)} />
                                </FormGroup>
                                <Button color="link" className="coral" type="submit">{this.props.form}</Button>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        Surf. Log. Share. Surfers Log &copy;
                    </ModalFooter>
                </Modal>
            </NavItem>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// export default connect(mapStateToProps)(SignUpModal);
export default ModalForm