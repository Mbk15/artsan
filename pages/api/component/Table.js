import React from "react";
export default function Table({
  sn = "1",
  item = "Rice",
  qty = "5",
  price = "30,000",
}) {
  return (
    <table id="customers">
      <tr>
        <th>SN</th>
        <th id="item">Item</th>
        <th>Qty</th>
        <th>Price (#)</th>
      </tr>
      <tr>
        <td>{sn}</td>
        <td id="item">{item} </td>
        <td>{qty}</td>
        <td>{price}</td>
      </tr>
      <tr>
        <td id="item">{sn}</td>
        <td>{item} </td>
        <td>{qty}</td>
        <td>{price}</td>
      </tr>
    </table>
  );
}
