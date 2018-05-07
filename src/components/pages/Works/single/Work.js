import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from 'aphrodite/no-important';

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import { appStyles, textStyles }   from '../../App/AppStyles';
import fontStyles   from '../../../pages/App/FontStyles';
import { workStyles } from './WorkStyles';

class Work extends Component {
    renderProductionLink = () =>  {
        if (this.props.work.webPath === '') {
            return '';
        }
        return (
            <p className={css(textStyles.paragraphCenter)}>
                <a target="_blank" href={this.props.work.webPath}>- Show it on production -</a>;
            </p>
        );
    };

    render() {
        return (
            <div className={css(fontStyles.fontBody) + ' ' + css(appStyles.componentBody)}>
                <Grid className={css(appStyles.container)}>
                    <Row>
                        <Col xs={3} />
                        <Col xs={6} className={css(appStyles.lastParagraphsClean)}>
                            <h2 className={css(fontStyles.fontPageMainTitle) + ' ' + css(textStyles.titleCenter)}>{this.props.work.title}</h2>
                            {this.renderProductionLink()}
                        </Col>
                        <Col xs={3} />
                    </Row>
                    <Row>
                        <Col xs={12} className={css(appStyles.contentCol) + ' ' +css(appStyles.lastParagraphsClean)}>
                            <p className={css(textStyles.paragraphCenter)}>
                                {this.props.work.text}
                            </p>
                        </Col>
                    </Row>
                    <Row className={css(workStyles.itemsWrapper)}>
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