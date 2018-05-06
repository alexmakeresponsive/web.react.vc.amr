import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import Education from '../../parts/page/Education/Education';
import Experience from '../../parts/page/Experience/Experience';

import { css } from 'aphrodite/no-important';
import fontStyles   from '../../pages/App/FontStyles';
import { aboutStyles }   from '../../pages/About/AboutStyles';
import { appStyles }   from '../../pages/App/AppStyles';

class About extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(aboutStyles.title)}>About</h2>

                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={12}>
                            <p className={css(appStyles.textCenter)}>
                                This is my skills in web development
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h3 className={css(fontStyles.fontPageTitleLevel2)}>Education :</h3>
                            <div>
                                <Education />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h3 className={css(fontStyles.fontPageTitleLevel2)}>Experience :</h3>
                            <div>
                                <Experience />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default About;