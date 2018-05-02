import React, { Component } from 'react';

import { connect } from 'react-redux';


import { css } from 'aphrodite/no-important';

import appStyles   from '../AppStyles';
import worksStyles from './WorksStyles';


class Works extends Component {

    // const worksThis = this;

    addWork() {
        console.log('i add this work', this.addInput.value);

        if (this.addInput.value == '') {
            return true;
        }

        this.props.onAddWork(this.addInput.value);
        this.addInput.value = '';
    }

    findWork() {
        console.log('i find this work', this.searchInput.value);
        this.props.onFindWork(this.searchInput.value)
    }

    render() {
        console.log('is it test store?', this.props.testStore);

        return (
            <div className={css(appStyles.container) + '  works'}>
                <h2>Works</h2>
                <p>
                    Here you see my works
                </p>
                <div>
                    <input  className={css(appStyles.inps)} type="text"   ref={(input) => { this.addInput = input }} id="btnAddNewWork" />
                    <button className={css(appStyles.btns)} type="submit" onClick={this.addWork.bind(this)} >Add</button>
                </div>
                <div>
                    <input  className={css(appStyles.inps)} type="text"   ref={(input) => { this.searchInput = input }} />
                    <button className={css(appStyles.btns)} type="submit" onClick={this.findWork.bind(this)} >Find</button>
                </div>
                <ul id="worksList"  className={css(appStyles.lists)}>
                    {this.props.testStore.works.map((item, index) =>
                        <div key={index}>
                            <div>
                                <a className="link" href={item.link}>{item.title}</a>
                            </div>
                            <div>
                                {item.description}
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        );
    }

}



export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onFindWork: (name) => {
            dispatch({ type: 'FIND_WORK', payload: name })
        },
        onAddWork: (addInputValue) => {
            dispatch({ type: 'ADD_WORK', payload: { link: 'Link', title: addInputValue, description: '-' } })
        },
    }),
)(Works);