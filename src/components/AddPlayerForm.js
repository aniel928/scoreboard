import React from 'react';

class AddPlayerForm extends React.Component {
	
	playerRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.playerRef.current.value);
		e.currentTarget.reset();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input 					
					placeholder="Enter a player's name"
					ref={this.playerRef}
					type="text" 
				/>
				<input 
					type="submit" 
					value="Add Player"
				/>
			</form>
		);
	}
}

export default AddPlayerForm;