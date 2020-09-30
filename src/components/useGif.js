import { useState, useEffect } from 'react'; 
import axios from 'axios';

const API_KEY = process.env.GIPHY_API_KEY; 
const url = `https://api.giphy.com/v1/gifs/random?api_key=Tzp6hlUX96HeDSHZ6HoZbFJcCOENb6K4&`;

//useGif is a function that recieve one parameter
const useGif = (tag) => {
    //built in hooks can be used in our custom hook 
    const [gif, setGif] = useState('');

      //create a async function to handle promise-response from axios
      const fetchGif = async(tag) => {
        
        //if there us a tag, dynamic search string, otherwise just search random 
        const { data } =  await axios.get(tag ? `${url}&tag=${tag}` : url); //returns a promise...  

        const imageSrc = data.data.images.downsized_large.url; 

        setGif(imageSrc); //set image to state
    }

    //we use useEffect hook to load data 
    //callback and dependency array
    //if dependency array is empty = act as component did mount -> first render only!
    useEffect(() => {
        //run function to fetch data asynchronously 
        fetchGif(tag); 
    }, [tag]); 

    //we want to return a gif from the state
    //we want to send back an object that contains gif-image + function!
    return {gif, fetchGif}; 

}

export default useGif; 