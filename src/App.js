
import './App.css';
import data from './data'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {

  let dataMap = data.map(item=>{
    console.log(item)
    let {title,price,coverImg,stats:{rating,reviewCount},location} = item
    return (
      
      <Card 
      title = {title}
      price = {price}
      img = {coverImg}
      rating = {rating}
      reviewCount = {reviewCount}
      location = {location}
      
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
