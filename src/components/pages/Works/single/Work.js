import React from 'react';
import { connect } from 'react-redux';

const Work            = ({ work }) => <div>{ work.title }</div>;

const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps', ownProps);
    return {
        work: state.works.find( work => work.id === ownProps.match.params.id )
    };
};

export default connect(mapStateToProps)(Work);