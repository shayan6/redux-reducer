import React, { Component } from 'react';
// import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class container1 extends Component {
    render() {
        return (
            <div>
                <button onClick={ () => console.log(this.props) }> Get State </button>
                <button onClick={ () => this.props.action1() }> Dispatch Action 1 </button>
                <button onClick={ () => this.props.action2() }> Dispatch Action 2 </button>
                <button onClick={ () => this.props.action_c1() }> Dispatch Action callback 1 </button>
                <button onClick={ () => this.props.action_c2() }> Dispatch Action callback 2 </button>
                <button onClick={ () => this.props.action_c3('text') }> Dispatch User Input </button>
                { this.props.stateprop1 ? <h1> { this.props.user_text } </h1> : null }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        // the obj name is same as combine reducer's have
        ...state.reducer1,
        ...state.user_reducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_c1: () => dispatch(ACTIONS.success()),
        action_c2: () => dispatch(ACTIONS.failure()),
        action_c3: (text) => dispatch(ACTIONS.user_input(text)),
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(container1);