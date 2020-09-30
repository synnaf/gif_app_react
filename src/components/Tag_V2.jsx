import React, {useState} from 'react'; 

//we import our custom gif-hook
import useGif from '../useGif'; 

const Tag = () => {
    const [tag, setTag] = useState('cats');
    //our custom hook is used and declared here, 
    //object destructuring since that is how it is exported
    //tag is passed in to our hook 
    const {gif, fetchGif} = useGif(tag); 

    return (
        <div className="container">
            <h1>Random {tag} GIF</h1>
            <div className="img-container">
                <img src={gif} alt="Random GIF"/>
            </div>
            {/*  callback-function recieve event, instant return of e.target.value */}
            <input value={tag} onChange={(e) => setTag(e.target.value)} autoFocus/>
            <button onClick={()=> fetchGif(tag)} >NEW GIF</button>
        </div>
    )
}

export default Tag; 