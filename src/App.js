import React from 'react'

import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'


function App() {
  const dataMap = data.map(item => {
    
    
    return (
      
      <Card 
  
      img={item.coverImg}
      key={item.id}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      rating={item.stats.rating}
        
      />
    )
   
  })
  
  return (
   
      
      <>

      <Navbar/>
      <Hero/>
        <div className="card-list">

          {dataMap}

        </div>
        
      </>
    
  );
}

export default App;
