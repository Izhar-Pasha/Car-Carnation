import { useEffect, useState } from 'react';
import './App.css';
import { Background } from './Components/Background/Background';
import { NavBar } from './Components/NavBar/NavBar';
import { Hero } from './Components/Hero/Hero';

function App() {
  let heroData = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"Your passion"},
    {text1:"Give in to",text2:"Your passion"}, 
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);
  
 useEffect(()=>{
  setInterval(() => {
    setHeroCount((count)=>{return count===2?0:count+1})
  }, 3000);
 },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar/>
      <Hero

      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount ]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      
      />


      
    </div>
  );
}

export default App;
