import { useEffect, useState } from "react";
import logo from "./images/card-logo.svg";
import complete from "./images/icon-complete.svg";

function App() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [disableHandle, setDisableHandle] = useState(false);

  const [numCard, setNumCard] = useState("0000 0000 0000 0000");
  const [numCardFormat, setNumCardFormat] = useState(false);
  const [numCardEmpty, setNumCardEmpty] = useState(false);
  const [numColorError, setNumColorError] = useState("hsl(270, 3%, 87%)");

  const [cardName, setCardName] = useState("IHLAS SUL AKBAR");
  const [cardNameFormat, setCardNameFormat] = useState(false);
  const [cardNameEmpty, setCardNameEmpty] = useState(false);
  const [nameColorError, setNameColorError] = useState("hsl(270, 3%, 87%)");

  const [expMonth, setExpMonth] = useState("07");
  const [expMonthEmpty, setExpMonthEmpty] = useState(false);
  const [expMonthColorError, setExpMonthColorError] = useState("hsl(270, 3%, 87%)");

  const [expYear, setExpYear] = useState("24");
  const [expYearEmpty, setExpYearEmpty] = useState(false);
  const [expYearColorError, setExpYearColorError] = useState("hsl(270, 3%, 87%)");

  const [cvc, setCvc] = useState("123");
  const [cvcEmpty, setCvcEmpty] = useState(false);
  const [cvcColorError, setCvcColorError] = useState("hsl(270, 3%, 87%)");

  const nameHandleInput = (e) => {
    let val = e.target.value;
    setCardName(val);
    let findNum = val.match(/\d+/g);
    if (findNum) {
      setCardNameFormat(true);
      setDisableHandle(true);
      setNameColorError("hsl(0, 100%, 66%)");
    } else if (val == "") {
      setCardNameEmpty(true);
      setDisableHandle(true);
      setNameColorError("hsl(0, 100%, 66%)");
    } else {
      setCardNameFormat(false);
      setDisableHandle(false);
      setCardNameEmpty(false);
      setNameColorError("black");
    }
  };
  const numCardHandle = (e) => {
    let val = e.target.value;
    val = val.replace(/\s+/g, "");
    val = val.replace(/(\d{4})/g, "$1 ");
    setNumCard(val);
    let findStr = val.match(/[a-zA-Z]+/g);
    if (findStr) {
      setNumCardFormat(true);
      setDisableHandle(true);
      setNumColorError("hsl(0, 100%, 66%)");
    } else if (val == "") {
      setNumCardEmpty(true);
      setDisableHandle(true);
      setNumColorError("hsl(0, 100%, 66%)");
    } else {
      setNumCardFormat(false);
      setDisableHandle(false);
      setNumCardEmpty(false);
      setNumColorError("black");
    }
  };
  const expMonthHandle = (e) => {
    let val = e.target.value;
    setExpMonth(val);
    if (val == "") {
      setExpMonthEmpty(true);
      setExpMonthColorError("hsl(0, 100%, 66%)");
      setDisableHandle(true);
    } else {
      setExpMonthEmpty(false);
      setExpMonthColorError("black");
      setDisableHandle(false);
    }
  };
  const expYearHandle = (e) => {
    let val = e.target.value;
    setExpYear(val);
    if (val == "") {
      setExpYearEmpty(true);
      setExpYearColorError("hsl(0, 100%, 66%)");
      setDisableHandle(true);
    } else {
      setExpYearEmpty(false);
      setExpYearColorError("black");
      setDisableHandle(false);
    }
  };
  const cvcHandleInput = (e) => {
    let val = e.target.value;
    setCvc(val);
    if (val == "") {
      setCvcEmpty(true);
      setCvcColorError("hsl(0, 100%, 66%)");
      setDisableHandle(true);
    } else {
      setCvcEmpty(false);
      setCvcColorError("black");
      setDisableHandle(false);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    setIsConfirm(true);
  };

  return (
    <main>
      <div className="card">
        <div className="card-left">
          <div className="card-front-user">
            <img className="logo-card" src={logo} alt="logo"></img>
            <h2 className="numCard">{numCard}</h2>
            <div className="card-name">
              <p>{cardName}</p>
              <p>
                {expMonth}/{expYear}
              </p>
            </div>
          </div>
          <div className="card-back-user">
            <p className="cvc-text">{cvc}</p>
          </div>
        </div>
        <div className="card-right">
          {isConfirm ? (
            <div className="completed">
              <img src={complete} alt="completed"></img>
              <h1>THANK YOU !</h1>
              <p>We've added your card detail</p>
              <button onClick={() => setIsConfirm(false)} type="button">
                Continue
              </button>
            </div>
          ) : (
            <div>
              <form onSubmit={handleForm}>
                <div className="input">
                  <label>CARDHOLDER NAME</label>
                  <input className="name" style={{ borderColor: nameColorError }} value={cardName} type="text" onInput={nameHandleInput} maxLength="20" />
                  {cardNameFormat && (
                    <div className="error-format">
                      <p>Wrong format,alphabet only</p>
                    </div>
                  )}
                  {cardNameEmpty && (
                    <div className="error-empty">
                      <p>Can't be blank</p>
                    </div>
                  )}
                </div>
                <div className="input">
                  <label>CARD NUMBER</label>
                  <input className="num" type="text" style={{ borderColor: numColorError }} onChange={numCardHandle} maxLength="16" />
                  {numCardFormat && (
                    <div className="error-format">
                      <p>Wrong format,number only</p>
                    </div>
                  )}
                  {numCardEmpty && (
                    <div className="error-empty">
                      <p>Can't be blank</p>
                    </div>
                  )}
                </div>
                <div className="grup-input">
                  <div className="input">
                    <label>EXP.DATE (MM/YY)</label>
                    <div className="exp-grup">
                      <input style={{ borderColor: expMonthColorError }} type="number" onChange={expMonthHandle} />
                      <input style={{ borderColor: expYearColorError }} type="number" onChange={expYearHandle} />
                    </div>
                    {expMonthEmpty && expYearEmpty && (
                      <div className="error-empty">
                        <p>Can't be blank</p>
                      </div>
                    )}
                    {expMonthEmpty && !expYearEmpty && (
                      <div className="error-empty">
                        <p>Can't be blank</p>
                      </div>
                    )}
                    {!expMonthEmpty && expYearEmpty && (
                      <div className="error-empty">
                        <p>Can't be blank</p>
                      </div>
                    )}
                  </div>
                  <div className="input">
                    <label>CVC</label>
                    <input style={{ borderColor: cvcColorError }} className="cvc" type="number" onChange={cvcHandleInput} />
                    {cvcEmpty && (
                      <div className="error-empty">
                        <p>Can't be blank</p>
                      </div>
                    )}
                  </div>
                </div>
                <button className="btn" disabled={disableHandle} type="submit">
                  Confirm
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
