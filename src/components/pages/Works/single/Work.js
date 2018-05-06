import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from 'aphrodite/no-important';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { appStyles, formStyles }   from '../../App/AppStyles';
import fontStyles   from '../../../pages/App/FontStyles';
import { workStyles } from './WorkStyles';

class Work extends Component {
    renderProductionLink = () =>  {
        if (this.props.work.webPath === '') {
            return '';
        }
        return <a target="_blank" href={this.props.work.webPath}>- Show it on production -</a>;
    };

    render() {
        return (
            <div className={css(fontStyles.fontBody)}>
                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={3} />
                        <Col xs={6}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(workStyles.title)}>{this.props.work.title}</h2>
                            <div className={css(appStyles.textCenter)}>
                                {this.renderProductionLink()}
                            </div>
                            <p className={css(appStyles.textCenter)}>
                                {this.props.work.text}
                            </p>

                        </Col>
                        <Col xs={3} />
                    </Row>
                    <Row>
                        {this.props.work.galleryImgSrc.map((item, index) =>
                            <Col xs={12} sm={12} md={6} lg={6} key={index} className={css(workStyles.itemWrapper)}>
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