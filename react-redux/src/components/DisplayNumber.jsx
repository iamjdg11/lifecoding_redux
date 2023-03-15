import React from "react"


export default function DisplayNumber ({number}){
      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={number} readOnly></input>
        </div>
      )
}