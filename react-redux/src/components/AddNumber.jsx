import React, {useState} from "react"

export default function AddNumber ({handleNumber}){

      const [addValue, setaddValue] = useState(0);

      return (
        <div>
          <h1>Add Number</h1>
          <input type="button" value="+" onClick={(e)=>{
            handleNumber(addValue);
          }}></input>
          <input id="numberField" type="text" value={addValue} onChange={(e)=>{
            setaddValue(e.target.value);
          }
          }></input>
        </div>
      )
}