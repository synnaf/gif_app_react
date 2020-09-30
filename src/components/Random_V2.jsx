import React from 'react'; 

//we import our custom gif-hook
import useGif from '../useGif'; 

const Random = () => {

    //our custom hook is used and declared here, 
    //object destructuring since that is how it is exported
    const {gif, fetchGif} = useGif(); 

    return (
        <div className="container">
            <h1>Random  GIF</h1>
            <div className="img-container">
                <img src={gif} alt="Random GIF"/>
            </div>
            <button onClick={fetchGif} >NEW GIF</button>
        </div>
    )
}

export default Random; 