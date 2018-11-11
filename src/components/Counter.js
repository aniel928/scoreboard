import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    render() {
    	let index = this.props.index;

        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(index, -1)}> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={() => this.props.changeScore(index, 1)}> + </button>
            </div>
        );
    }
}

Counter.propTypes = {
	changeScore: PropTypes.func, 
	index: PropTypes.number,
	score: PropTypes.number
}

export default Counter;