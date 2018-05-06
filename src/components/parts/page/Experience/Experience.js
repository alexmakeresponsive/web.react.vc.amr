import React, { Component } from 'react';

// import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { connect } from 'react-redux';

import { css } from 'aphrodite/no-important';
import { experienceStyles }   from './ExperienceStyles';

import fontStyles   from '../../../pages/App/FontStyles';
import { aboutStyles }   from '../../../pages/About/AboutStyles';
// import { appStyles }   from '../../../pages/App/AppStyles';

class Experience extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <ul className={css(aboutStyles.listsAbout)}>
                    {this.props.experiencenArray.map((item, index) =>
                        <li key={index} className={css(experienceStyles.elList)}>
                            <div >
                                <div>
                                    <b>{item.function}</b>
                                </div>
                                <div>
                                    <b>{item.period}</b>
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                </div>

                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

}


export default connect(
    (state, ownProps) => ({
        experiencenArray: state.experience,
        ownProps
    }),
    dispatch => ({
        onAddEducation: (addInputValue) => {
            dispatch({ type: 'ADD_EXPERIENCE', payload: {} })
        },
    }),
)(Experience);