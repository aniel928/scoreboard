import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

// optionally destructure: get rid of "props" as parameter and pass in objects as well.
const Header = ({players, title}) => {
	// const { players, title } = props; //alternative to parameters
    return (
        <header>
        	<Stats players={players}/>
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
}

export default Header;