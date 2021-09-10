import React,{useState} from "react";
import Button from "./Button";

export default function PaymentDetails({buttonAction}) {
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [cardFname, setCardFname] = useState("")
  const [cardLname, setCardLname] = useState("")
  const [CardNo, setCardNo] = useState("")
  const [cvv, setCvv] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  return (
    <div className="p-5"> 
      <p className="font-normal mt-3 text-left">Personal Details:</p>
      <br />
      <input
        className="fname"
        type="text"
        name="name"
        placeholder="Full name"
        onChange={e=>setFname(e.target.value)}
      />
      <input
        className="fname"
        type="text"
        name="name"
        placeholder="Email Address"
        onChange={e=>setEmail(e.target.value)}
      />
      <input
        className="fname"
        type="text"
        name="name"
        placeholder="Phone number"
        onChange={e=>setPhoneNo(e.target.value)}
      />

      <p className="font-normal mt-3 text-left">Payment Details:</p>
      <br />
      <div className="disflex">
        <input type="text" name="name" placeholder="First Name"
         onChange={e=>setCardFname(e.target.value)}/>
         <input type="text"
         name="name" placeholder="Last name"
          onChange={e=>setCardLname(e.target.value)}/>
      </div>
     
      <div className="cardinput">
        <input type="text" name="name" placeholder="Card number" 
        onChange={e=>setCardNo(e.target.value)}/>
      </div>
      <div className="disflex">
        <input type="text" name="name" placeholder="Expiration Date" 
        onChange={e=>setExpiryDate(e.target.value)}/>
         <input type="text" name="name" placeholder="CVV" 
        onChange={e=>setCvv(e.target.value)}/>
      </div>
      <Button text="Proceed" buttonAction={buttonAction}/>
    </div>
  );
}
