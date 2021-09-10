import React from "react";
import Button from "./Button";
export default function Prompt() {
  return (
    <div>
      <p className="text-color-blue-200 mt-2 font-normal mb-4">
        Please confirm that this order has been completed and carried out
        successfully. By clicking complete, you may no longer be able to get a
        refund for this transaction.
      </p>
      <br />
      <input type="checkbox" class="form-checkbox" />
      <span className="ml-2">I understand</span>

      <Button text="Complete" />
    </div>
  );
}
