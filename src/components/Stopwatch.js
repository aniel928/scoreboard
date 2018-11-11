import React from 'react';

class Stopwatch extends React.Component {
	state = {
		elapsedTime: 0,
		isRunning: false,
		prevTime: 0,
	};

	componentDidMount() {
		this.intervalID = setInterval( () => this.tick(), 100);	
	}

	componentWillUnMount() {
		clearInterval(this.intervalID);
	}

	handleStopwatch = () => {
		this.setState( prevState => {
			return {
				isRunning: !prevState.isRunning,
			}
		});

		// when stopwatch starts
		if (!this.state.isRunning) {
			this.setState({ prevTime: Date.now() })
		}
	}

	handleReset = () => {
		this.setState({ elapsedTime: 0 });
	}

	render() {
		const seconds = (Math.round( (this.state.elapsedTime / 1000) * 10 ) / 10).toFixed(1);

		return (
			<div className="stopwatch">
				<h2> Stopwatch </h2>
				<span className="stopwatch-time">
					{seconds}
				</span>
				<button onClick={this.handleStopwatch}> 
					{this.state.isRunning ? 'Stop' : 'Start'} 
				</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
	compo
	tick = () => {
		if (this.state.isRunning) {
			const now = Date.now();
			this.setState( prevState => {
				return {
					prevTime: now,
					elapsedTime: prevState.elapsedTime + (now - prevState.prevTime),
				}
			});
		}
	}
}

export default Stopwatch;