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
                <Grid>
                    <Row>
                        <Col  xs={12} sm={4} md={6} lg={4} className={css(fontStyles.font_2)}>
                            <a href="/home/" className={css(appStyles.elBlock) + ' ' + css(appStyles.links)}>
                            <div className={css(appStyles.logo)}>
                                <span className={css(logoStyles.before)}>-</span>
                                <span className={css(logoStyles.logoBody)}>Must Have<br/>Responsive</span>
                                <span className={css(logoStyles.after)}>-</span>
                            </div>
                            </a>
                        </Col>
                        <Col  xs={12} sm={8} md={6} lg={8} className={css(headerStyles.navCol)}>
                            <nav className={css(navStyles.nav)}>
                            {this.props.items.map((item, index) =>
                                <a className={css(appStyles.links) + ' ' + css(navStyles.navLinks)} href={item.link} key={index}>{item.label}</a>
                            )}
                            </nav>
                        </Col>

                    </Row>
                </Grid>
            </div>
            </div>
        );
    }
}

export default Header;