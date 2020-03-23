import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { css } from 'aphrodite/no-important';

import { headerStyles } from './HeaderStyles';
import { appStyles, logoStyles, navStyles }    from '../../pages/App/AppStyles';
import fontStyles   from '../../pages/App/FontStyles';


import {
    Link,
} from 'react-router-dom'


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
                        <Col  xs={12} sm={12} md={12} lg={12} >
                            <div className={css(headerStyles.col1Container)}>
                                <Link to="/" className={css(logoStyles.logoWrapp) + ' ' + css(headerStyles.logoWrapp)}>
                                    <div className={css(fontStyles.fontLogo) + ' ' + css(headerStyles.fontLogo)}>
                                        Alex Make Responsive
                                    </div>
                                </Link>

                            </div>
                        </Col>
                        <Col  xs={12} sm={12} md={12} lg={12}>
                            <div className={css(fontStyles.font_1) + ' ' + css(headerStyles.col2Container)}>
                                <nav className={css(headerStyles.nav)}>
                                {this.props.items.map((item, index) =>
                                    <Link className={css(appStyles.links) + ' ' + css(headerStyles.navLinks)} to={item.link} key={index}>{item.label}</Link>
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