import React from "react";
import Table from "./Table";
import Image from "next/image";
import WrapButton from "./WrapButton";
export default function OrderDetails({ orderId = "Yduh274792",startDate="15/06/2021" , endDate="15/06/2021", custName="Saheed Osupa", custPhoneNo="08134567834", leftText,rightText}) {
  return (
    <>
    <div className="order">
      <div className="order__details">
        {/* Invoice detail header */}
        <div className="order__custServ">
          <Image src="/Ellipse 3.png" alt="Ellipse" width="68" height="68" />
          <p>Customer_Services</p>
          <p>
            <a href="#"> Number search limited</a>
          </p>
        </div>

        {/* Invoice Details date */}
        <div className="order__invoice">
          <div className="order__invoiceId">
            <ul>
              <li>INVOICE</li>
              <li>Order Id : {orderId}</li>
            </ul>
          </div>
          <div className="order__invoiceDate">
            <div id="startDate">
              <p></p>start Date: <br />
              {startDate} <br />
            </div>
            <div>
              End Date: <br />
              {endDate}
            </div>
          </div>
        </div>
        <div id="horizontal"></div>
        {/* Customer name and phone */}

        <div className="order__invoice">
          <div className="order__invoiceId">
            <ul>
              <li>Customer</li>
            </ul>
          </div>
          <div className="order__invoiceDate">
            <div id="">
              <p></p>{custName}
              <br />
             {custPhoneNo}
            </div>
          </div>
        </div>

        <div className="order__invoice">
          <div className="order__invoiceId">
            <ul>
              <li>
                I will not come until you allow the president be count me yeniru
              </li>
            </ul>
          </div>
        </div>

        <div className="order__invoice">
          <div className="order__invoiceId table">
            <Table />
          </div>
        </div>

        <div className="order__invoice">
          <div className="order__invoiceId">
            <ul>
              <li>Status: Paid</li>
            </ul>
          </div>
          <div className="order__invoiceDate">
            <div id="">
              <p></p>Total Amount: 50,0000
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}
