import React, { Component } from 'react';

import ContactsItems from '../../parts/page/ContactsItems/ContactsItems';
import SocialNetworks from '../../parts/page/SocialNetworks/SocialNetworks';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { css } from 'aphrodite/no-important';
import fontStyles   from '../../pages/App/FontStyles';
import { contactsStyles }   from '../../pages/Contacts/ContactsStyles';
import { appStyles }   from '../../pages/App/AppStyles';

class Contacts extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(contactsStyles.title)}>Contacts</h2>
                            <p className={css(appStyles.textCenter)}>
                                You can write or call me using this contacts:
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <h3 className={css(fontStyles.fontPageTitleLevel2) + ' ' + css(contactsStyles.colTitle)}>Social :</h3>
                            <div className={css(contactsStyles.colBody)}>
                                <SocialNetworks />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className={css(contactsStyles.itemsWrapp)}>
                                <h3 className={css(fontStyles.fontPageTitleLevel2) + ' ' + css(contactsStyles.colTitle)}>Other :</h3>
                                <div className={css(contactsStyles.colBody)}>
                                    <ContactsItems />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default Contacts;