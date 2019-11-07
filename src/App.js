import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Footer from './components/footer';
import axios from 'axios';
import CardContainer from './components/card-container'

function App() {
 
  const [photos, setPhotos] =  useState();
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=U9ggtt1qllI4VUEb7fhWcmgfUYLmL2kAHYBWkMGN')
    .then(resolve=>{
      console.log(resolve.data)
      setPhotos(resolve.data);
     
    } )
    .catch(error=>{
      console.log(error)
    })
  }, [])
  if (!photos) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Header />
       
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
