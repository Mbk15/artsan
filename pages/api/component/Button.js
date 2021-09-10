import React from "react";

export default function Button({ text, buttonAction,searchInvoice}) {
  return (
  
      
      <div className="test">
        <div>
          <button onClick={buttonAction} className=" text-white font-bold py-2 px-4 rounded-lg green__button">
            {text}
          </button>
        </div>
      </div>
  
  );
}
