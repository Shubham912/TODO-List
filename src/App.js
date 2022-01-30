import React, { useState } from "react";
import TODOList from "./TODOList";

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

    setInputList("");
  };

  const deleteitem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
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
            {Items.map((itemsval, index) => {
              return (
                <TODOList
                  text={itemsval}
                  key={index}
                  id={index}
                  delete={deleteitem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
