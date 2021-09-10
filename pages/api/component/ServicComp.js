import React,{useState} from "react";
import Image from "next/image";
import Button from "./Button";
export default function ServicComp({buttonAction}) {
  const [value, setValue] = useState("")
  
  return (
    <div>
      <p className="service text-black text-center mt-2">Service Completed!!</p>
      <div className="imageC flex justify-center">
        <Image src="/service.png" alt="service" width="241" height="158" />
      </div>
      <p className="text-center mt-2 font-normal">How satisfied are you?</p>
      {/* <div className="h-3 mt-3 relative max-w-xl rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div
          className="h-full bg-green-500 absolute"
          style={{ width: "10%" }}
        ></div>
        <br />
      </div> */}
      
        <div className="dragContainer">
       <div className="mr-3">😓</div>
      <div className="inputContainer">
      <input type="range" id="myRange" value={value} max="100" onChange={e=>setValue(e.target.value)}/>
      <div >{value}%</div>
      </div>
      <div className="ml-3">🤩</div>
      </div>
     

      
       
      <textarea
        className="w-80  mt-6 mb-3 mr-5 ml-5 px-3 py-2 text-gray-700 border border-black rounded-lg focus:outline-none"
        rows="4"
      ></textarea>
      <Button text="Thanks" buttonAction={buttonAction}/>
    </div>
  );
}
