import Gallery from "./Components/assets/Gallery";
import Biography from "./Components/Biography";
import Details from "./Components/Details";
import Header from "./Components/Header";
import Tributes from "./Components/Tributes";
import audio from "./Components/assets/audio.mp3"
import { Fragment, useEffect, useRef, useState } from "react";
function App() {
  const audioRef = useRef()
  const [play, setPlay] = useState(true)

  const playAudio = ()=>{
    if(play){
      audioRef?.current?.play()
    }
  }

  // playAudio()

  // useEffect(()=>{
  //   playAudio()
  // },[audioRef])
  
  return (

    <div onMouseOver={()=> playAudio()}>
    
      <Header />
      <Biography />
      <Details />
      {/* <Gallery /> */}
      <Tributes /><audio src={audio} ref={audioRef} autoPlay="" loop controls muted={false} onLoad={playAudio}/>
    </div>
  );
}

export default App;
