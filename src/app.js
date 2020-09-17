import React, { useState, useEffect} from 'react';
import * as Tone from "tone";

const App = () => {
    const [drum, setDrum] = useState([0, 0, 0, 0]);
    const beatLength = 16;

    return (
        <div>
            <h1>Hello, Sequencer!</h1>
            <h3>This is the a table will go for a sequencer</h3>
            <p>
                kick
            </p>
            {
                drum.map((el, idx) => {
                    return(
                        <button key={idx}>Element {idx +1}</button>
                    )
                })
            }
        </div>
    )
}

export default App;