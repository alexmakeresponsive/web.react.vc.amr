import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from 'aphrodite/no-important';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { appStyles, formStyles }   from '../../App/AppStyles';
import fontStyles   from '../../../pages/App/FontStyles';
import { workStyles } from './WorkStyles';

class Work extends Component {
    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <Grid>
                    <Row>
                        <Col xs={3} />
                        <Col xs={6}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(workStyles.title)}>{this.props.work.title}</h2>
                            <p className={css(appStyles.textCenter)}>
                                {this.props.work.text}
                            </p>
                        </Col>
                        <Col xs={3} />
                    </Row>
                    <Row>
                        {this.props.work.galleryImgSrc.map((item, index) =>
                            <Col lg={6} key={index} className={css(workStyles.itemWrapper)}>
                                <div>
                                    <div className={css(workStyles.imgWrapper)}>
                                        <img className={css(workStyles.img)} src={item} alt=""/>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps', ownProps);
    return {
        work: state.works.find( work => work.id === ownProps.match.params.id )
    };
};

export default connect(mapStateToProps)(Work);