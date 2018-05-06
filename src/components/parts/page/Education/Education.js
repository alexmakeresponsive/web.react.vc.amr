import React, { Component } from 'react';

// import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { connect } from 'react-redux';

import { css } from 'aphrodite/no-important';
import { educationStyles }   from './EducationStyles';

import fontStyles   from '../../../pages/App/FontStyles';
import { aboutStyles }   from '../../../pages/About/AboutStyles';
// import { appStyles }   from '../../../pages/App/AppStyles';

class Education extends Component {

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <ul className={css(aboutStyles.listsAbout)}>
                    {this.props.educationArray.map((item, index) =>
                        <li key={index} className={css(educationStyles.elList)}>
                            <div >
                                <div>
                                    <b>{item.degree.level}</b>
                                </div>
                                <div>
                                    <b>{item.degree.name}</b>
                                </div>
                                <div>
                                    <span>{item.school}</span>
                                </div>
                                <div>
                                    {item.faculty}
                                </div>
                                <div>
                                    {item.specialty}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

}

// export default Education;

export default connect(
    (state, ownProps) => ({
        educationArray: state.education,
        ownProps
    }),
    dispatch => ({
        onAddEducation: (addInputValue) => {
            dispatch({ type: 'ADD_EDUCATION', payload: {} })
        },
    }),
)(Education);