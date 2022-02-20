import React, { Component } from 'react';
import Link from 'next/link';
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
                    <li><Link href='/'><a>HOME</a></Link></li>
                    <li><Link href='/#services'><a>PAKALPOJUMI</a></Link></li>
                    <li><Link href='/#about-us'><a>PAR MUMS</a></Link></li>
                    <li><Link href='/#gallery'><a>GALERIJA</a></Link></li>
                    <li><Link href='/#contact-us'><a>KONTAKTI</a></Link></li>
                </ul>

                <ul className="mobile-navigation">
                    <li><Link href='/'><a onClick={this.handleClick}>HOME</a></Link></li>
                    <li><Link href='/#services'><a onClick={this.handleClick}>PAKALPOJUMI</a></Link></li>
                    <li><Link href='/#about-us'><a onClick={this.handleClick}>PAR MUMS</a></Link></li>
                    <li><Link href='/#gallery'><a onClick={this.handleClick}>GALERIJA</a></Link></li>
                    <li><Link href='/#contact-us'><a onClick={this.handleClick}>KONTAKTI</a></Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
