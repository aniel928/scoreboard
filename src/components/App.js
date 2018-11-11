import React from 'react';

import AddPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';
  
class App extends React.Component {
    state = {
        players: [],
    }

    prevPlayerId = this.state.players.length - 1;

    getHighScore = () => {
        const scores = this.state.players.map (p => p.score );
        const highScore = Math.max (...scores);
        if (highScore) {
            return highScore;
        }

        return null;
    }

    handleAddPlayer = (name) => {
        this.setState( (prevState) => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name: name,
                        score: 0,
                        id: this.prevPlayerId += 1,
                    }
                ]
            }
        })
    }

    handleRemovePlayer = (id) => {
        this.setState( (prevState) => {
            return {
                players: prevState.players.filter( (p) => p.id !== id )
            };
        });
    }

    handleScoreChange = (index, delta) => {
        this.setState( (prevState) => {
            return{
                score: prevState.players[index].score += delta    
            }
        });
    }

    render() {

        if (this.state.players.length === 0) {
            return (
                <div className="scoreboard">
                    <Header 
                        title="scoreboard" 
                        players={this.state.players} 
                    />
                    <div className='player'><span class='player-name'>No players yet, add one now!</span></div>
                    <AddPlayerForm addPlayer={this.handleAddPlayer}/>
                </div>
            )
            
        } else {
            return(
                <div className="scoreboard">
                    <Header 
                        title="scoreboard" 
                        players={this.state.players} 

                    />
                    {/*Player List*/}
                    {this.state.players.map( (player, index) => {
                        return (
                            <Player
                                changeScore = {this.handleScoreChange}
                                id = {player.id}
                                index = {index}
                                key = {player.id.toString()}
                                name = {player.name}
                                removePlayer = {this.handleRemovePlayer}
                                score = {player.score}
                                highScore = {this.getHighScore() === player.score}

                            />
                        )
                    })}
                    <AddPlayerForm addPlayer={this.handleAddPlayer}/>
                </div>
            );
        }
    }
}

export default App;
