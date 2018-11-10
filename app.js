//Must be capitalized!
function Header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers}</span>
		</header>
	);
};

class Counter extends React.Component {
	
	state = {
		score: 0
	};

	decrementScore() {
		this.setState( function (prevState) {
			return {
				score: prevState.score - 1
			}
		});

	}

	incrementScore() {
		this.setState( function (prevState) {
			return {
				score: prevState.score + 1
			}
		});

	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
			</div>
		);
	}
}

function Player(props) {
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
				{props.name}
			</span>
			<Counter/>
		</div>
	);
}

class App extends React.Component {

	state = {
		players: [
			{
				id: 0,
				name: "Shaun",
			},
			{
				id: 1,
				name: "Anne",
			},
			{
				id: 2,
				name: "Brewski",
			},
			{
				id: 3,
				name: "Mocha",
			},
			{
				id: 4,
				name: "Chessie",
			}
		]
	}

	handleRemovePlayer = (id) => {
		this.setState( (prevState) => {
			return {
				players: prevState.players.filter( (p) => p.id !== id )
			};
		});
	}

	render() {
		return(
			<div className="scoreboard">
				<Header 
					title="scoreboard" 
					totalPlayers={this.state.players.length} 
				/>

				{/*Player List*/}
				{this.state.players.map( (player) => {
					return (
						<Player
							name={player.name}
							id={player.id}
							key={player.id.toString()}
							removePlayer={this.handleRemovePlayer}
						/>
					)
				})}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,

	document.getElementById('root')
); 


