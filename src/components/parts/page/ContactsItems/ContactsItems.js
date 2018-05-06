import React, { Component } from 'react';

import { connect } from 'react-redux';

import { contactsItemsStyles } from './ContactsItemsStyles';

import { css } from 'aphrodite/no-important';
import fontStyles   from '../../../pages/App/FontStyles';
import { appStyles }   from '../../../pages/App/AppStyles';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

class ContactsItems extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <div className={css(contactsItemsStyles.contacts)}>
                    {/*<table>*/}
                        <ul className={css(contactsItemsStyles.contactsList)}>
                            {this.props.contactsItemsArray.map((item, index) =>
                            <li>
                                <Row>
                                    <Col xs={12} sm={12} md={3} lg={2} className={css(contactsItemsStyles.col1)}>{item.title}:</Col>
                                    <Col xs={12} sm={12} md={9} lg={10}>
                                        <span>{item.value}</span>
                                    </Col>
                                </Row>
                            </li>
                            )}
                        </ul>
                    {/*</table>*/}
                </div>
            </div>
        );
    }

}

export default connect(
    (state, ownProps) => ({
        contactsItemsArray: state.contactsitems,
        ownProps
    }),
    dispatch => ({
        onAddContactsItem: (addInputValue) => {
            dispatch({ type: 'ADD_CONTACTSITEM', payload: {} })
        },
    }),
)(ContactsItems);