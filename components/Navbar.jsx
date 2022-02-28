import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import withTranslation from 'next-translate/withTranslation';
import { Squash as Hamburger } from 'hamburger-react';
import { IoLanguage, IoChevronDown } from 'react-icons/io5';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            langOpen: false,
        };
    }

    componentDidMount() {
        const { locale } = this.props.router; 
        const lang = document.getElementsByName("lang");

        for(let i = 0; i < lang.length; i++) {
            if(lang[i].value == locale) {
                lang[i].checked = true;
            }
        }

        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll = () => this.setState({ isOpen: false, langOpen: false });
    handleResize = () => this.setState({ isOpen: false, langOpen: false });
    handleClick = () => this.setState({ isOpen: false });

    onChangeValue = (e) => {
        const locale = e.target.value;
        const { pathname, asPath, query } = this.props.router;

        this.props.router.push({ pathname, query }, asPath, { locale });


        const lang = document.getElementsByName("lang");

        for(let i = 0; i < lang.length; i++) {
            if(lang[i].value == locale) {
                lang[i].checked = true;
            }
        }


        this.setState({ isOpen: false, langOpen: false });
    }

    render() {
        const { t } = this.props.i18n;

        return (
            <nav className={this.state.isOpen ? 'nav active' : 'nav'}>
                <Hamburger toggled={this.state.isOpen} toggle={() => this.setState({ isOpen: !this.state.isOpen })} duration={0.6} easing="linear" rounded />

                <ul className="navigation" style={{padding: t('common:padding')}}>
                    <li><Link href='/'><a>{t('common:nav1')}</a></Link></li>
                    <li><Link href='/#services'><a>{t('common:nav2')}</a></Link></li>
                    <li><Link href='/#about-us'><a>{t('common:nav3')}</a></Link></li>
                    <li><Link href='/#gallery'><a>{t('common:nav4')}</a></Link></li>
                    <li><Link href='/#contact-us'><a>{t('common:nav5')}</a></Link></li>
                    <li className='lang_switch'>
                        <IoLanguage className='lang_icon' />
                        <img className='flag' src={t('common:pic1')} width={12} height={12}/>
                        <div className='dropdown' onChange={this.onChangeValue}>
                            <div>
                                <input id='lang1' type="radio" name="lang" value='lv' />
                                <label htmlFor="lang1">Latviešu</label>
                            </div>
                            <div>
                                <input id='lang2' type="radio" name="lang" value='ru' />
                                <label htmlFor="lang2">Pусский</label>
                            </div>
                            <div>
                                <input id='lang3' type="radio" name="lang" value='en' />
                                <label htmlFor="lang3">English</label>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="mobile-navigation">
                    <li><Link href='/'><a onClick={this.handleClick}>{t('common:nav1')}</a></Link></li>
                    <li><Link href='/#services'><a onClick={this.handleClick}>{t('common:nav2')}</a></Link></li>
                    <li><Link href='/#about-us'><a onClick={this.handleClick}>{t('common:nav3')}</a></Link></li>
                    <li><Link href='/#gallery'><a onClick={this.handleClick}>{t('common:nav4')}</a></Link></li>
                    <li><Link href='/#contact-us'><a onClick={this.handleClick}>{t('common:nav5')}</a></Link></li>
                    <li>
                        <div className='lang' onClick={() => this.setState({ langOpen: !this.state.langOpen })}>
                            <IoLanguage className='lang_icon' />
                            {t('common:nav6')}
                            <IoChevronDown className='down_arrow' />
                        </div>
                        <div className={this.state.langOpen ? 'dropdown active' : 'dropdown'}>
                            {
                                this.props.router.locales.map((locale) => {
                                    if (locale != this.props.router.locale) {
                                        let temp;
                                        switch (locale) {
                                            case "lv": temp = "Latviešu"; break;
                                            case "ru": temp = "Pусский"; break;
                                            case "en": temp = "English"; break;
                                        }
                                        return <button key={locale} value={locale} onClick={this.onChangeValue}>{temp}</button>
                                    }
                                })
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(withTranslation(Navbar));
