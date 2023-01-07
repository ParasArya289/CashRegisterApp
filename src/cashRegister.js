import { useState } from "react";

let CashRegister = () => {
  let [billAmount, setBillAmount] = useState(0);
  let [cash, setCash] = useState(0);

  let [err, setErr] = useState(""); //temp soluton: init state arr to resolve table rendering without td as program maps td and doesnt has html structure.
  let [numOfNotes, setNumOfNotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  let notesArray = [2000, 500, 100, 50, 20, 10, 5, 1];
  let numberOfNotes = [];

  let returnHandler = () => {
    let amountToBeReturn = cash - billAmount;
    if (cash && billAmount && cash > billAmount) {
      for (let i = 0; i < notesArray.length; i++) {
        let j = Math.trunc(amountToBeReturn / notesArray[i]);

        numberOfNotes.push(j);

        amountToBeReturn %= notesArray[i];

        setNumOfNotes(numberOfNotes);
        setErr("");
      }
    } else {
      setErr("Enter proper value");
      setNumOfNotes([0, 0, 0, 0, 0, 0, 0, 0]);
    }
  };

  return (
    <div className="container">
      <h1>Cash Register</h1>
      <p>Enter Bill amount and Cash given by User</p>
      <h3>Bill Amount</h3>
      <input
        type="number"
        onChange={(e) => {
          setBillAmount(+e.target.value);
        }}
      />
      <h3>Cash</h3>
      <input
        type="number"
        onChange={(e) => {
          setCash(+e.target.value);
        }}
      />
      <button onClick={returnHandler}>Submit</button>
      <h3>{err}</h3>
      {/* {cash > 0 && <h2>To be return: {amountToBeReturn} </h2>}
       */}
      <h2>Return</h2>
      <table>
        <tr>
          <th>Return</th>
          {numOfNotes.map((el) => {
            return <td>{el}</td>;
          })}
        </tr>
        <tr>
          <th>Notes</th>
          {notesArray.map((el) => {
            return <td>{el}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};
export default CashRegister;
