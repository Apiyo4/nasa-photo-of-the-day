import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Footer from './components/footer';
import axios from 'axios';
import CardContainer from './components/card-container'

function App(props) {
 
  const [photos, setPhotos] =  useState();
  const[pick, setPick] = useState('2019-07-28');
  
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=U9ggtt1qllI4VUEb7fhWcmgfUYLmL2kAHYBWkMGN&date=${pick}`)
    .then(resolve=>{
      console.log(resolve.data)
      setPhotos(resolve.data);
      console.log(pick);
     
    } )
    .catch(error=>{
      console.log(error)
    })
  }, [pick])
  if (!photos) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Header 
        pick={pick} 
        setPick = {setPick}
      />
       <CardContainer 
          photos = {photos}
          setPhotos = {setPhotos}
       />
      
      <Footer
          photos = {photos}
          setPhotos = {setPhotos}
      />
    </div>
  );
}

export default App;
