import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { css } from 'aphrodite/no-important';

import fontStyles   from '../../pages/App/FontStyles';
import { homeStyles }   from './HomeStyles';
import { appStyles, textStyles }   from '../../pages/App/AppStyles';


class Home extends Component {
    render() {
        return (
            <div className={css(fontStyles.fontBody) + ' ' + css(appStyles.componentBody)}>
                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={12} className={css(appStyles.lastParagraphsClean)}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(textStyles.titleCenter)}>Hello!</h2>
                            <p className={css(textStyles.paragraphCenter)}>
                                Small summary
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className={css(appStyles.lastParagraphsClean) + ' '+ css(appStyles.contentCol)}>
                            <p className={css(textStyles.paragraphCenter)}>
                                Welcome to my web card. My name is Alexandr and i have a
                                <strong>1 year good experience</strong> for create HTML
                                templates and work with CMS systems, such as Wordpress and Magento.
                            </p>
                            <p className={css(textStyles.paragraphCenter)}>
                                My specialization in web development - work with client and server side JavaScript.
                            </p>
                            <p className={css(textStyles.paragraphCenter)}>
                                More information about my works and me you can find in this web card.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default Home;
