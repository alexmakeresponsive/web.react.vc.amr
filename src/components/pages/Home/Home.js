import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { css } from 'aphrodite/no-important';

import fontStyles   from '../../pages/App/FontStyles';
import { homeStyles }   from './HomeStyles';
import { appStyles }   from '../../pages/App/AppStyles';


class Home extends Component {
    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(homeStyles.title)}>Hello!</h2>
                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={12}>
                            <p className={css(appStyles.textCenter)}>
                                Welcome to my web card. You can know about my works and me here.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default Home;
