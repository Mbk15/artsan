import React, { Children,useState } from "react";
import TopNav from "./TopNav";
export default function ({ orderId, children,checkout, heading, minHeight}) {
  const [active, setActive] = useState(true);
  
  return (
    <>
    <TopNav />
    <div className="flex items-center  justify-center  mt-2" >
      {/*Track Order 1 */}
      <div className="h-80 grid grid-rows-2 ">
        <div>
      <h2 className="text-center font-Ubuntu font-normal text-2xl leading-3 mb-8 ">Track Payment</h2>
          <div className="root">
            <div className="container">
              <ul className="progressbar">
                <li className="active">Step 1</li>
                <li >Step 2</li>
                <li>Step 3</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          {/*payment option */}
          <div className={`w-96 rounded  border-blue-800 bucket ${minHeight?"height__min":"height__max"}` }>
            <div className={checkout?"topNav_green":"topNav_blue"}>
              <p className="text-center font-Ubuntu font-bold text-lg text-white">
              {orderId ? `Order Id ${orderId} `: null} {heading}
              </p>
              <div>
              {children}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
