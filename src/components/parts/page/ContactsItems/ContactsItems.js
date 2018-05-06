import React, { Component } from 'react';

import { connect } from 'react-redux';

import { contactsItemsStyles } from './ContactsItemsStyles';

import { css } from 'aphrodite/no-important';
import fontStyles   from '../../../pages/App/FontStyles';
import { appStyles }   from '../../../pages/App/AppStyles';

class ContactsItems extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <div className={css(contactsItemsStyles.contacts)}>
                    <table>
                        <tbody>
                            {this.props.contactsItemsArray.map((item, index) =>
                            <tr>
                                <td className={css(contactsItemsStyles.col1)}>{item.title}:</td>
                                <td>
                                    <span>{item.value}</span>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
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