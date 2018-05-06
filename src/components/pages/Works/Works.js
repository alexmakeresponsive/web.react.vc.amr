import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';


import { css } from 'aphrodite/no-important';

import { appStyles, formStyles }   from '../App/AppStyles';
import fontStyles   from '../../pages/App/FontStyles';
import { worksStyles } from './WorksStyles';



class Works extends Component {

    // const worksThis = this;

    addWork() {
        // console.log('i add this work', this.addInput.value);

        if (this.addInput.value === '') {
            return true;
        }

        this.props.onAddWork(this.addInput.value);
        this.addInput.value = '';
    }

    findWork() {
        // console.log('i find this work', this.searchInput.value);
        this.props.onFindWork(this.searchInput.value)
    }

    render() {
        // console.log('is it test store?', this.props.worksArray);

        return (
            <div className={css(appStyles.container) + ' ' + css(fontStyles.fontBody)}>
                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(worksStyles.title)}>Works</h2>
                            <p className={css(appStyles.textCenter)}>
                                Here you see my works. Use this field for search words like "Wordpress" or "PHP" :
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className={css(worksStyles.formWrapper)}>
                                <input  className={css(formStyles.inputInline) + ' ' + css(fontStyles.fontFormInput)}
                                        type="text"
                                        ref={(input) => { this.searchInput = input }}
                                        placeholder="query..."
                                />
                                <button className={css(formStyles.button) + ' ' + css(fontStyles.fontformButton)} type="submit" onClick={this.findWork.bind(this)} >Find</button>
                            </div>
                            <Row>
                                {this.props.worksArray.map((item, index) =>
                                    <Col xs={12} sm={6} md={4} lg={4} key={index} className={css(worksStyles.itemWrapper) + ' COL'}>
                                        <div>
                                            <a className={css(appStyles.elBlock)} href={item.link}>
                                                <div className={css(worksStyles.imgWrapper)}>
                                                    <img className={css(worksStyles.img)} src={item.mainImgSrc} alt=""/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={css(fontStyles.fontTitleItem)}>
                                            <a className={css(appStyles.elBlock) + ' ' + css(appStyles.links) } href={item.link}>{item.title}</a>
                                        </div>
                                        <div>
                                            {item.description}
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}



export default connect(
    (state, ownProps) => ({
        worksArray: state.works.filter(target => target.searchWords.includes(state.worksFind)),
        ownProps
    }),
    dispatch => ({
        onFindWork: (query) => {
            dispatch({ type: 'FIND_WORK', payload: query })
        },
        onAddWork: (addInputValue) => {
            dispatch({ type: 'ADD_WORK', payload: { link: 'Link', title: addInputValue, description: '-' } })
        },
    }),
)(Works);