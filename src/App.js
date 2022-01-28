import React, { useState } from "react";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <div>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input type="text" placeholder="Add items" onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {Items.map((itemsval) => {
              return <li>{itemsval}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
