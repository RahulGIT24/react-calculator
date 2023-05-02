import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Defining date
  let date = new Date();

  // Defining states
  const [history, setHistory] = useState("");
  const [equation, setEquation] = useState("0");

  // Function to clear display
  function clear() {
    setEquation("0")
    setHistory("")
  }

  // Function to display value
  function handleClick(event) {
    let value = event.target.value;
    setEquation(prevInput => {
      if (prevInput === "0") {
        return value
      } else {
        return prevInput + value
      }
    })
  }

  // Function to evaluate square
  function square() {
    let sq = equation * equation
    if (isNaN(sq) === false) {
      setHistory(`sq(${equation})`)
      setEquation(sq)
    }
  }

  // Function to back
  function back() {
    if (equation === "0") {
      setEquation("0")
    } else {
      setEquation(equation.substring(0, equation.length - 1));
    }
  }

  // Funtion to solve
  function solve() {
    setHistory(equation)
    setEquation(eval(equation))
  }

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-black rounded-2xl shadow-xl border-4 text-white border-yellow-100">
        <div className="w-auto mx-3 my-2 h-6 flex justify-between">
          <div className="text-sm">
            {date.getHours()}:{date.getMinutes()}
          </div>
          <div className="flex items-center text-xs space-x-1">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-three-quarters text-sm"></i>
          </div>
        </div>
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className=" display text-white">{history}</div>
          <div className=" font-bold text-3xl display2 text-white">{equation}</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <button className="btn-yellow" onClick={clear}>C</button>
            <button className="btn-grey" onClick={square}>A <sup>2</sup></button>
            <button className="btn-grey" onClick={back}><FontAwesomeIcon icon={faDeleteLeft} /></button>
            <button className="btn-orange" value={"/"} onClick={handleClick}>/</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-grey" value={"7"} onClick={handleClick}>7</button>
            <button className="btn-grey" value={"8"} onClick={handleClick}>8</button>
            <button className="btn-grey" value={"9"} onClick={handleClick}>9</button>
            <button className="btn-orange" value={"*"} onClick={handleClick}>x</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-grey" value={"4"} onClick={handleClick}>4</button>
            <button className="btn-grey" value={"5"} onClick={handleClick}>5</button>
            <button className="btn-grey" value={"6"} onClick={handleClick}>6</button>
            <button className="btn-orange" value={"-"} onClick={handleClick}>-</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-grey" value={"1"} onClick={handleClick}>1</button>
            <button className="btn-grey" value={"2"} onClick={handleClick}>2</button>
            <button className="btn-grey" value={"3"} onClick={handleClick}>3</button>
            <button className="btn-orange" value={"+"} onClick={handleClick}>+</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-grey-jumbo" value={"0"} onClick={handleClick}>0</button>
            <div className="flex w-full ml-3 justify-between">
              <button className="btn-grey" value={"."} onClick={handleClick}>.</button>
              <button className="btn-green" onClick={solve}>=</button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
