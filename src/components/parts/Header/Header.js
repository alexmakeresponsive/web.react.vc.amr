import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { css } from 'aphrodite/no-important';

import { headerStyles } from './HeaderStyles';
import { appStyles, logoStyles, navStyles }    from '../../pages/App/AppStyles';
import fontStyles   from '../../pages/App/FontStyles';



class Header extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };


    render() {
        return (
            <div className={css(fontStyles.font_1)}>
            <div className={css(headerStyles.header)}>
                <Grid className={css(appStyles.container)}>
                    <Row className={css(headerStyles.headerRow)}>
                        <Col  xs={12} sm={12} md={6} lg={4} >
                            <div className={css(fontStyles.fontLogo) + ' ' + css(headerStyles.col1Container)}>
                                <a href="/" className={css(appStyles.elInlineBlock) + ' ' + css(appStyles.links) + ' ' + css(headerStyles.logoWrapp)}>
                                    <div className={css(appStyles.logo)}>
                                        <span className={css(logoStyles.before)}>-</span>
                                        <span className={css(logoStyles.logoBody)}>Must Have<br/>Responsive</span>
                                        <span className={css(logoStyles.after)}>-</span>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col  xs={12} sm={12} md={6} lg={8}>
                            <div className={css(fontStyles.font_1) + ' ' + css(headerStyles.col2Container)}>
                                <nav className={css(headerStyles.nav)}>
                                {this.props.items.map((item, index) =>
                                    <a className={css(appStyles.links) + ' ' + css(headerStyles.navLinks)} href={item.link} key={index}>{item.label}</a>
                                )}
                                </nav>
                            </div>
                        </Col>

                    </Row>
                </Grid>
            </div>
            </div>
        );
    }
}

export default Header;