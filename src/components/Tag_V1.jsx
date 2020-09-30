import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const API_KEY = process.env.GIPHY_API_KEY; 

//tag is equal to an arraow function
const Tag = () => {

    const [tag, setTag] = useState('cats'); 
    //a state to save our image data url from API 
    const [gif, setGif] = useState(''); //url string

      //create a async function to handle promise-response from axios
      const fetchGif = async(tag) => {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=Tzp6hlUX96HeDSHZ6HoZbFJcCOENb6K4&tag=${tag}`;
        
        //store response from axios in a variable 
        const { data } =  await axios.get(url); //returns a promise...  

        const imageSrc = data.data.images.downsized_large.url; 

        setGif(imageSrc); 
    }


    //we use useEffect hook to load data 
    //callback and dependency array
    //if dependency array is empty = act as component did mount -> first render only!
    useEffect(() => {
        //run function to fetch data asynchronously 
        fetchGif(tag); 

    }, [tag]); 

    //function called on click, fetches gif using state + funxtion
    const handleClick = () => {
        fetchGif(tag); 
    }

    return (
        <div className="container">
            <h1>Random {tag} GIF</h1>

            <div className="img-container">
                <img src={gif} alt="Random GIF"/>
            </div>
            

            {/*  callback-function recieve event, instant return of e.target.value */}
            <input value={tag} onChange={(e) => setTag(e.target.value)} autoFocus/>
            <button onClick={handleClick} >NEW GIF</button>
        </div>
    )
}

export default Tag; 