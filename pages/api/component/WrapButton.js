import React from 'react'

export default function WrapButton({leftText, rightText,rightButtonAction}) {
    return (
        <div className="wrapbutton">
        <button className="hover:bg-blue-900 bg-green-400 text-white font-bold py-2 px-4 rounded ungreen__button">
            {leftText}
          </button>
          <button  onClick={rightButtonAction} className="hover:bg-blue-900 bg-green-400 text-white font-bold py-2 px-4 rounded green__button">
            {rightText}
          </button>
     </div>
     
    )
}
