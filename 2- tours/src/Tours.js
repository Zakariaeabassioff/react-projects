import React from 'react';
import Tour from './Tour';


const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>Ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
            //{...tour} permet au Tour component d'acceder a toutes les proprietes de l'objet
            return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          }
        )}
      </div>
    </section>
  );
};

export default Tours;
