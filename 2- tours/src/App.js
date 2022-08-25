import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //fonction pour enlever une tour de la liste
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  //fetch la data depuis l'api (url)
  const fetchTours = async () => {
    setLoading(true);
    try{
      //recuperer la reponse depuis l'api
      //await permet d'attendre le resolution d'une promesse lorsque la promesse est resolue la fonction async reprend 
      const response = await fetch(url);
      //.json() parse le body de la reponse sous format json
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error){
      setLoading(false);
      console.log('error');
    }
  }

  //Permet de dire au composant qu'est ce qu'il doit faire apres render
  //dans ce cas useEffect va marcher seulement au premier render []
  useEffect(() => {
    fetchTours();
    }, []);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  } 
  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
  
}

export default App
