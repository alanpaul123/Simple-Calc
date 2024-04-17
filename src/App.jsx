import { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";
import "./App.css";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [isPrincipleInValid, setIsPrincipleInvalid] = useState(false);
  const [isRateInValid, setIsRateInvalid] = useState(false);
  const [isYearInValid, setIsYearInvalid] = useState(false);

  const handleInputValidation = (tag) => {
    const { name, value } = tag;

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      if (name == "principle") {
        setPrinciple(value);
        setIsPrincipleInvalid(false);
      } else if (name == "rate") {
        setRate(value);
        setIsRateInvalid(false);
      } else {
        setYear(value);
        setIsYearInvalid(false);
      }
    } else {
      // Invalid
      if (name == "principle") {
        setPrinciple(value);
        setIsPrincipleInvalid(true);
      } else if (name == "rate") {
        setRate(value);
        setIsRateInvalid(true);
      } else {
        setYear(value);
        setIsYearInvalid(true);
      }
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("Calculate Button clicked");
    if (principle && rate && year) {
      setInterest((principle * rate * year) / 100);
    } else {
      alert("Please fill the form Completely");
    }
  };

  const handleReset = () => {
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setIsPrincipleInvalid(false);
    setIsRateInvalid(false);
    setIsYearInvalid(false);
  };

  return (
    <div
      style={{ minHeight: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center bg-dark"
    >
      <div style={{ width: "600px" }} className=" bg-light p-5 rounded">
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className="d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light">
          <h1> ₹ {interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>
        </div>
        <form action="" className="mt-5">
          <div className="mb-3">
            <TextField
              className="w-100"
              id="principle"
              label=" ₹ Principal Amount"
              variant="outlined"
              name="principle"
              onChange={(e) => handleInputValidation(e.target)}
              value={principle || ""}
            />
          </div>
          {isPrincipleInValid && (
            <div className="mb-3 text-danger fw-bolder">
              Invalid Principle Amount!!
            </div>
          )}

          <div className="mb-3">
            <TextField
              className="w-100"
              id="rate"
              label="Rate of interest (p.a) %"
              variant="outlined"
              name="rate"
              onChange={(e) => handleInputValidation(e.target)}
              value={rate || ""}
            />
          </div>

          {isRateInValid && (
            <div className="mb-3 text-danger fw-bolder">
              Invalid Rate Amount!!
            </div>
          )}

          <div className="mb-3">
            <TextField
              className="w-100"
              id="year"
              label="Time period (yr)"
              variant="outlined"
              name="year"
              onChange={(e) => handleInputValidation(e.target)}
              value={year || ""}
            />
          </div>
          {isYearInValid && (
            <div className="mb-3 text-danger fw-bolder">
              Invalid Year Amount!!
            </div>
          )}

          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: "50%", height: "70px" }}
              variant="contained"
              className="bg-dark"
              onClick={handleCalculate}
              type="submit"
              disabled={isPrincipleInValid || isRateInValid || isYearInValid}
            >
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              variant="outlined"
              style={{ width: "50%", height: "70px" }}
            >
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
