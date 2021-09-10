import React, { useState } from "react";
import Image from "next/image";
import WrapButton from "./WrapButton";
import Button from "./Button";
export default function SuccessPayment({success}) {

  return (
    <>
    <div className="payment">
      <div className="payment__img">
        <div className="payment__image">
          <Image src={success ? "/successimg.png" : "/unsuccessimg.png"} alt="successimage" width="160" height="160"/>
        </div>
        <div>
          {success ? (
            <>
              <h3>Thank You</h3>
              <p>Payment was successful</p>
              <p>check your e-mail for order receipts and trackorder link</p>
            </>
          ) : (
            <>
              <h3>Payment unsuccessful</h3>
              <p>Check your card details or contact your card provider</p>
            </>
          )}
        </div>
      </div>
    </div>

     {success?<Button text="Cool" /> : <WrapButton leftText="Cancel" rightText="Try Again"/>}
</>
  );
}
