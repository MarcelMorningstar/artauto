import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll = () => this.setState({ isOpen: false });
    handleResize = () => this.setState({ isOpen: false });
    handleClick = () => this.setState({ isOpen: false });

    render() {
        return (
            <nav className={this.state.isOpen ? 'nav active' : 'nav'}>
                <Hamburger toggled={this.state.isOpen} toggle={() => this.setState({ isOpen: !this.state.isOpen })} duration={0.6} easing="linear" rounded />

                <ul className="navigation">
                    <li><Link to="home" duration={100} delay={0}>HOME</Link></li>
                    <li><Link to="services" duration={100} delay={0} offset={-80}>PAKALPOJUMI</Link></li>
                    <li><Link to="about-us" duration={100} delay={0} offset={-80}>PAR MUMS</Link></li>
                    <li><Link to="gallery" duration={100} delay={0} offset={-80}>GALERIJA</Link></li>
                    <li><Link to="contact-us" duration={100} delay={0} offset={-80}>KONTAKTI</Link></li>
                </ul>

                <ul className="mobile-navigation">
                    <li><Link to="home" duration={100} delay={0} offset={-16} onClick={this.handleClick}>HOME</Link></li>
                    <li><Link to="services" duration={100} delay={0} offset={-16} onClick={this.handleClick}>PAKALPOJUMI</Link></li>
                    <li><Link to="about-us" duration={100} delay={0} offset={-16} onClick={this.handleClick}>PAR MUMS</Link></li>
                    <li><Link to="gallery" duration={100} delay={0} offset={-16} onClick={this.handleClick}>GALERIJA</Link></li>
                    <li><Link to="contact-us" duration={100} delay={0} offset={-16} onClick={this.handleClick}>KONTAKTI</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
