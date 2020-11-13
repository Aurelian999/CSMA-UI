import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { faPhoneAlt, faEnvelopeOpen, faComment, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {faFacebookMessenger, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FloatingMenuItem extends Component {

    handleClick() {
        this.props.action();
    }

    render() {
        let label;

        if (this.props.label) {
            label = <label>{this.props.label}</label>;
        }

        return <div
            onClick={this.handleClick.bind(this)}
            className="floating-menu-item">
            {label}
            <div className="floating-menu-icon"><FontAwesomeIcon icon={this.props.icon} style={{width: "20px", height: "20px"}} /></div>
        </div>;
    }
}

class FloatingMenu extends Component {
    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({ toggled: !this.state.toggled });
    }

    contactViaMail() {
        window.open("mailto:contact@body-choice.ro");
    }

    contactViaWhatsApp() {
        window.open("https://wa.me/40740428881");
    }

    contactViaMessenger() {
        window.open("https://m.me/bodychoice.cluj");
    }

    contactViaPhone() {
        window.open("tel:0740428881");
    }


    render() {
        let buttons = [];
        let className = "floating-menu";
        let icon = faComment;

        if (this.state.toggled) {
            className += " open";
            icon = faTimesCircle;
            buttons.push(
                <FloatingMenuItem label="Sună acum" icon={faPhoneAlt} action={this.contactViaPhone} />);
            buttons.push(
                <FloatingMenuItem label="WhatsApp" icon={faWhatsapp} action={this.contactViaWhatsApp} />);
            buttons.push(
                <FloatingMenuItem label="Messenger" icon={faFacebookMessenger} action={this.contactViaMessenger} />);
            buttons.push(
                <FloatingMenuItem label="Mail" icon={faEnvelopeOpen} action={this.contactViaMail} />);
        }

        buttons.push(<FloatingMenuItem label="" icon={icon} action={this.toggleMenu.bind(this)} />);

        return <Container>
            <div className={className}>
                {buttons}
            </div>
        </Container>;
    }
}

export { FloatingMenu, FloatingMenuItem };