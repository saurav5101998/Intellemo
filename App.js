// import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import './App.css';
import Konva from 'konva';
// import Video from './VideoComponents';
import { Image, Stage, Layer, Star, Text} from 'react-konva';


// const Video = ({ src }) => {
//   const imageRef = React.useRef(null);
//   const [size, setSize] = React.useState({ width: 50, height: 50 });

//   // we need to use "useMemo" here, so we don't create new video elment on any render
//   const videoElement = React.useMemo(() => {
//     const element = document.createElement("video");
//     element.src = src;
//     return element;
//   }, [src]);

//   console.log(name);
//   var name = "saurav";

//   // when video is loaded, we should read it size
//  useEffect(() => {
//     const onload = function() {
//       setSize({
//         width: videoElement.videoWidth,
//         height: videoElement.videoHeight
//       });
//     };
//     videoElement.addEventListener("loadedmetadata", onload);
//     return () => {
//       videoElement.removeEventListener("loadedmetadata", onload);
//     };
//   }, [videoElement]);

//   // use Konva.Animation to redraw a layer
//   React.useEffect(() => {
//     videoElement.play();
//     const layer = imageRef.current.getLayer();

//     const anim = new Konva.Animation(() => {}, layer);
//     anim.start();

//     return () => anim.stop();
//   }, [videoElement]);

//   return (
//     <Image
//       ref={imageRef}
//       image={videoElement}
//       x={20}
//       y={20}
//       stroke="red"
//       width={size.width}
//       height={size.height}
//       draggable
//     />
//   );
// };


function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

function App() {
  const [addButton, setAddButton] = useState(true);
  const [stars, setStars] = useState(INITIAL_STATE);
  const [play, setPlay] = useState(true)
  const [time, setTime]=useState("10");

  const HandleAdd =() =>{
    setAddButton(!addButton);
  }

  const HadleNumber = () => {
 for(let i=0;i<10;i++){
  setTimeout(() => {
    console.log(i);
  }, 1000);
 }
}
  

  return (
    <div className="App">
          <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to drag a star" />
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            // onDragStart={handleDragStart}
            // onDragEnd={handleDragEnd}
          />
        ))}
      
      {/* For Text Implementation */}
    
      {addButton ? 
      <Text
          x={32}
          y={175}
          text={"sdsdssdsd"}
          fontFamily="Sigmar One"
          fontSize={50}
          fontWeight="bold"
          draggable={true}
          fillLinearGradientEndPoint={{ x: 100, y: 100 }}
          fillLinearGradientColorStops={[
            0,
            "rgba(0,0,0,0.7)",
            1,
            "rgba(255,255,255,0.5)"
          ]}
          scaleX={1}
          scaleY={1}
          opacity={1}
          onClick={(e) => HandleAdd(e)}
        /> : null }


      {/* For Video Component */}

      {/* {play ? 

      <Video src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
    
      : "" } */}

      <Text text="TO Play/Pause the video cick on Play or Pause" />
      

      </Layer>
    </Stage>

    <button onClick={()=>HadleNumber}>Play</button>
     {/* <button onClick={()=>setPlay(false)}>Remove The Video</button>
    <button onClick={()=>setAddButton(true)}>Add</button>
    <button onClick={()=>setAddButton(false)}>Remove</button> */}

    </div>
  );
}

export default App;
