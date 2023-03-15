import React from "react"
import AddNumber from "./AddNumber";

export default function AddNumberRoot({handleNumber}){

      return (
        <div>
          <h2>Add Number Root</h2>
          <AddNumber handleNumber={handleNumber}/>
        </div>
      );
}
  