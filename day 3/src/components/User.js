import React from 'react';

export const User = (props) => {
    
    return(    
        <>
            <h1>this is User components {props.name}</h1>
            <button onClick={props.fun}>click me</button>
        </>
    );
};