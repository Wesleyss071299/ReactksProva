import React from 'react';

const GameDescription: React.FC<{description: string}> = (props) => {
    return(
        <>
            <h2>Fill your bet</h2>
            <p>{props.description}</p>
        </>   
    )
}

export default GameDescription;