import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

import "react-icons/ri";

import "./styles.css";

export function Calculator({ toogleTheme }) {
  const { title } = useContext(ThemeContext);

  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [result, setResult] = useState(" ");
  const [account, setAccount] = useState("");
  const [equal_clicked, setEqualClicked] = useState(false);

  const handleClick = (e) => {
    var input = e.target.value;
    if (num === 0 || result === "") {
      setNum(input);
      setResult(result.concat(String(input)));
    } else {
      setNum(num + input);
      setResult(result.concat(String(input)));
    }
  };

  const handleClearInput = () => {
    setNum(0);
    setResult("");
    setAccount();
    setEqualClicked(false);
  };

  const handleBackspaceInput = () => {
    if (equal_clicked) return handleClearInput();
    setNum(num.slice(0, num.length - 1));
    setResult(String(result.substring(0, result.length - 1)));
  };

  const handleOperator = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
    setResult(result.concat(operatorInput));
  };

  const calculate = () => {
    if (!oldNum || !num) return;
    setAccount(result);

    if (operator === "+") {
      setResult(String(parseInt(oldNum) + parseInt(num)));
    } else if (operator === "-") {
      setResult(String(parseInt(oldNum) - parseInt(num)));
    } else if (operator === "x") {
      setResult(String(parseInt(oldNum) * parseInt(num)));
    } else if (operator === "/") {
      setResult(String(parseInt(oldNum) / parseInt(num)));
    }

    setEqualClicked(true);
  };

  return (
    <>
      <div className="container">
        <div className="icons">
          <i
            className={
              title === "light"
                ? "ri-moon-line change-theme"
                : "ri-sun-line change-theme"
            }
            id="theme-button"
            onClick={toogleTheme}
          />
          {/* <i className="ri-history-line history"></i> */}
        </div>
        <form>
          {account === "" ? (
            <span id="account">{`|`}</span>
          ) : (
            <span id="account">{account} |</span>
          )}
          <input type="text" value={result} readOnly />
        </form>

        <div className="keyPad">
          <button onClick={handleClearInput} id="clear">
            C
          </button>
          <button onClick={handleBackspaceInput} id="backspace">
            <i className="ri-delete-back-2-line"></i>
          </button>
          <button
            className="highlightButton"
            value="+"
            onClick={handleOperator}
          >
            +
          </button>
          <button value={7} onClick={handleClick}>
            7
          </button>
          <button value={8} onClick={handleClick}>
            8
          </button>
          <button value={9} onClick={handleClick}>
            9
          </button>
          <button
            className="highlightButton"
            value="-"
            onClick={handleOperator}
          >
            -
          </button>
          <button value={4} onClick={handleClick}>
            4
          </button>
          <button value={5} onClick={handleClick}>
            5
          </button>
          <button value={6} onClick={handleClick}>
            6
          </button>
          <button
            className="highlightButton"
            onClick={handleOperator}
            value="x"
          >
            x
          </button>
          <button value={1} onClick={handleClick}>
            1
          </button>
          <button value={2} onClick={handleClick}>
            2
          </button>
          <button value={3} onClick={handleClick}>
            3
          </button>
          <button
            className="highlightButton"
            value="/"
            onClick={handleOperator}
          >
            /
          </button>
          <button className="highlightButton" onClick={calculate} id="result">
            =
          </button>
          <button value={0} onClick={handleClick} id="zero">
            0
          </button>
          <button value={"."} onClick={handleClick}>
            .
          </button>
        </div>
      </div>
    </>
  );
}
