import React, { Component } from 'react';
import Image from 'next/image';

export class Footer extends Component {
  render() {
    return (
      <footer>
        SIA ARTauto.LV
        <Image id="logo" src="/img/logo.png" alt="ARTauto Logo" width={120} height={120} />
      </footer>
    );
  }
}

export default Footer;
