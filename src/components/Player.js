import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import CrownIcon from './CrownIcon';

class Player extends React.PureComponent {
	static propTypes = {
		changeScore: PropTypes.func,
		id: PropTypes.number,
		index: PropTypes.number,
		name: PropTypes.string,
		removePlayer: PropTypes.func,
		score: PropTypes.number,

	}

	render() {
		console.log('hi');
	    return (
	        <div className="player">
	            <span className="player-name">
	                <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
	                <CrownIcon highScore={this.props.highScore}/>
	                {this.props.name}
	            </span>
	            <Counter 
	            	changeScore = {this.props.changeScore}
	            	index={this.props.index}
	            	score={this.props.score} 
	            />
	        </div>
	    )
	};
}

export default Player;