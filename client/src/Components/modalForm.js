import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter/*, Link */ } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Form,
    FormGroup, Label, Input, NavItem, NavLink, Media } from "reactstrap";
import surfLogo from '../images/surfers_log_logo.jpg';
import { createSurfer } from '../Actions/surfers'

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            modal: false,
            userName: '',
            slug: '',
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
        this.props.createSurfer(this.state);
        this.setState({redirect: true, slug: this.jsFriendlyId()});
        this.modalToggle();
        this.props.history.push({
            pathname: `/surfer/${this.jsFriendlyId()}`,
            state: {prop: this.state, type: 'surfer'}
        });
    }

    handleLink(event) {
        event.preventDefault();
        this.modalToggle();
        if (this.props.navToggle !== undefined){
            this.props.navToggle();
        };
    }

    jsFriendlyId() {
        return this.state.userName.toString().toLowerCase()
        .replace(/\s+/g, '-')         
        .replace(/^-+/g, '')          
        .replace(/-+$/g, '');          
    } 

    render() {
        // if (this.state.redirect) {
        //     return (
        //         <Redirect to={{
        //             pathname: `/surfers/${this.jsFriendlyId()}`,
        //             state: {prop: this.state, type: 'surfer'}
        //         }}/>
        //     )
        // } else {
        return (
            <NavItem>
                <NavLink href="#" onClick={(event) => this.handleLink(event)}>
                    {this.props.form}
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.modalToggle}>    
                    <ModalHeader toggle={this.modalToggle}>
                        <Media
                            src={surfLogo}
                            className="logo"
                            alt="Surfers Log Logo"
                        />
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
                                    <Input
                                        type="text"
                                        id="userName"
                                        name="userName"
                                        value={this.state.userName}
                                        placeholder="Surfer Name"
                                        onChange={(event) => this.handleOnChange(event)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Surfer Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        value={this.state.email}
                                        name="email"
                                        placeholder="Surfer Email"
                                        onChange={(event) => this.handleOnChange(event)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        value={this.state.password}
                                        name="password"
                                        placeholder="Password"
                                        onChange={(event) => this.handleOnChange(event)}
                                    />
                                </FormGroup>
                                <Button
                                    outline
                                    color="secondary"
                                    type="submit"
                                >
                                    {this.props.form}
                                </Button>
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
// }
}

const mapStateToProps = (state) => {
    return {
        logEntryData: state.logEntryData
    }
}

export default withRouter(connect(mapStateToProps, { createSurfer })(ModalForm));
