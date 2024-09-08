import React, { useState } from 'react'
import './User.css';
function Function_Component() {
    let [status, setStatus] = useState({
        name: "Tushar",
        age: 19

    });
    let [color, setColor] = useState(true);

    return (
        <div>
            <h2 >4]-: Function Component :-</h2>
            <h2>Hide, Show And Toggle</h2>
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(!status)}>Toggle</button><br />
            <button onClick={() => setColor(!color)}>Chnage Theme Color..</button>

            {status ?
                <div className='box' style={color ? { backgroundColor: "orange" } : { backgroundColor: "red" }}>
                </div> : null}
            <h2>Name:- {status.name}</h2>
            <h2> Age :- {status.age}</h2>
        </div>
    )
}

export default Function_Component
