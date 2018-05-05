import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { css } from 'aphrodite/no-important';
import fontStyles   from '../../pages/App/FontStyles';
import { skillsStyles }   from '../../pages/Skills/SkillsStyles';
import { appStyles }   from '../../pages/App/AppStyles';

import { connect } from 'react-redux';

class Skills extends Component {

    createList = () => {
        const skillItemLevel0Value = this.props.skillsObject;

        //Loop Level 0
        let   resultLevel0 = [];
        let   i0      = 0;  //for attribute key

        for (let skillItemLevel1 in skillItemLevel0Value) {
            let skillItemLevel1Value = skillItemLevel0Value[skillItemLevel1];
            // console.log(skillItemLevel1Value);

            //Loop Level 1
            let resultLevel1         = [];
            let i1                   = 0;

            for (let skillItemLevel2 in skillItemLevel1Value.collection) {
                let skillItemLevel2Value = skillItemLevel1Value.collection[skillItemLevel2];
                // console.log(skillItemLevel2Value);

                if (typeof skillItemLevel2Value === 'string') {
                    resultLevel1.push(<span key={i1++} className={css(skillsStyles.skillPill)}>{skillItemLevel2Value}</span>);
                }


                if (typeof skillItemLevel2Value === 'object') {
                    // console.log(skillItemLevel2Value);

                    //Loop Level 2
                    let resultLevel2         = [];
                    let i2                   = 0;

                    for (let skillItemLevel3 in skillItemLevel2Value.collection) {
                        let skillItemLevel3Value = skillItemLevel2Value.collection[skillItemLevel3];
                        console.log(skillItemLevel3Value);

                        resultLevel2.push(<span key={i2++} className={css(skillsStyles.skillPill)}>{skillItemLevel3Value}</span>);
                    }
                    //Loop Level 2

                    resultLevel1.push(
                        <div key={i1++} className={css(skillsStyles.skillItemsLevel2)}>
                            <div>
                                <h4>{skillItemLevel2Value.title}</h4>
                            </div>
                            <div >{resultLevel2}</div>
                        </div>
                    );
                }
            }
            //Loop Level 1

            resultLevel0.push(
                <div key={i0++} className={css(skillsStyles.skillItemsLevel1)}>
                    <div>
                        <h3>{skillItemLevel1Value.title}</h3>
                    </div>
                    <div >{resultLevel1}</div>
                </div>
            );
        }
        //Loop Level 0

        return resultLevel0;
    };

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <Grid>
                    <Row>
                        <Col xs={12} sm={4} md={6} lg={12}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(skillsStyles.title)}>Skills</h2>
                            <p className={css(appStyles.textCenter)}>
                                This is my skills in web development
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={1} md={2} lg={3}>

                        </Col>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <div className={css(skillsStyles.skillItemsLevel0)}>
                                {this.createList()}
                            </div>
                        </Col>
                        <Col xs={12} sm={1} md={2} lg={3}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

// export default Skills;

export default connect(
    (state, ownProps) => ({
        skillsObject: state.skills,
        ownProps
    }),
    dispatch => ({
        onAddSkill: (addInputValue) => {
            dispatch({ type: 'ADD_SKILL', payload: {} })
        },
    }),
)(Skills);