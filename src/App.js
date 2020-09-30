import React from 'react'; 

import Random from './components/Random_V1'; 
import Tag from './components/Tag_V1'; 

import './App.scss'; 


const App = () => (
    //vi vill ha en instant return, så inga curly brackets 
    <div>
        <h1>Random GIF application</h1>
        <div className="main-container">
            <Random></Random>
            <Tag></Tag>
        </div>
    </div>
); 

export default App; 