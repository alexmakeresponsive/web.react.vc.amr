import React, { Component } from 'react';

import { connect } from 'react-redux';

import { socialNetworks } from './SocialNetworksStyles';

import { css } from 'aphrodite/no-important';
import fontStyles   from '../../../pages/App/FontStyles';
import { appStyles }   from '../../../pages/App/AppStyles';

class SocialNetworks extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody) + ' ' + css(socialNetworks.componentWrapper)}>
                <div className={css(socialNetworks.itemsWrapper)}>
                    {this.props.socialNetworksArray.map((item, index) =>
                    <a target="_blank" className={css(socialNetworks.item)} href={item.webPath}>
                        <i className={item.iconStyleClass + ' ' + css(socialNetworks.icon)} />
                    </a>
                    )}
                </div>
            </div>
        );
    }
}


export default connect(
    (state, ownProps) => ({
        socialNetworksArray: state.socialnetworks,
        ownProps
    }),
    dispatch => ({
        onAddSocialNetwork: (addInputValue) => {
            dispatch({ type: 'ADD_SOCIALNETWORK', payload: {} })
        },
    }),
)(SocialNetworks);