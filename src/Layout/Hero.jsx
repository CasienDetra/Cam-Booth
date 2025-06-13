
import Lanyard from "../components/reactbit/Lanyard/Lanyard.jsx";
import Aurora from '../Aurora/Aurora.jsx';
import TextPressure from "@/components/TextPressure/TextPressure.jsx";
export default function Hero(){
 return(
       <>
       <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
  className="absolute inset-0 opacity-50 pointer-events-none "
      />
      <div  className="absolute inset-0 flex items-center justify-center  h-[300px] m-40">
  <TextPressure
    text="Welcome! To Cam-Booth"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
       <Lanyard
   position={[0, 0, 20]}
   gravity={[0, -40, 0]}
   fov={20}
   transparent={true} 
    
   /></>
 
 );
}