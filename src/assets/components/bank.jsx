import React, { useState } from "react";

const BankComponent = () => {
  const [kontostand, setKontostand] = useState(0);
  const [betrag, setBetrag] = useState("");
  const [alarm, setAlarm] = useState("");

  const handleEinzahlen = () => {
    if (betrag !== "" && parseFloat(betrag) > 0) {
      setKontostand((prevKontostand) => prevKontostand + parseFloat(betrag));
      setBetrag("");
      setAlarm("");
    }
  };

  const handleAuszahlen = () => {
    if (
      betrag !== "" &&
      parseFloat(betrag) > 0 &&
      parseFloat(betrag) <= kontostand
    ) {
      setKontostand((prevKontostand) => prevKontostand - parseFloat(betrag));
      setBetrag("");
      setAlarm("");
    } else {
      setAlarm("Du bist arm!");
    }
  };

  const handleAlarmClose = () => {
    setAlarm("");
  };

  return (
    <div className="bank-container">
      <h1 className="header" id="title">
        Bank of React
      </h1>
      <div className="konto">
        <div className="saldo">Kontostand: {kontostand} Euro</div>
        <div>
          <label htmlFor="betrag">Betrag:</label>
          <input
            className="geldbetrag"
            type="number"
            id="betrag"
            placeholder="Betrag in € eingeben"
            value={betrag}
            onChange={(e) => setBetrag(e.target.value)}
          />
        </div>
        <button className="einzahlen" onClick={handleEinzahlen}>
          Einzahlen
        </button>
        <button className="auszahlen" onClick={handleAuszahlen}>
          Auszahlen
        </button>
        {alarm && (
          <div className="alarm-popup">
            <div className="alarm-content">
              <span className="close" onClick={handleAlarmClose}>
                &times;
              </span>
              {alarm}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankComponent;
