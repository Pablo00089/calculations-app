import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";


function Calculations({ numCalculations, onHome }) {
  const [calculations, setCalculations] = useState([]);
  const [finished, setFinished] = useState(0);
  const [time, setTime] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const generateCalculations = () => {
      const ops = ["+", "-", "*"];
      const calcArray = Array.from({ length: numCalculations }, () => {
        const n = Math.floor(Math.random() * 10) + 1;
        const m = Math.floor(Math.random() * 10) + 1;
        const op = ops[Math.floor(Math.random() * ops.length)];
        return { n, m, op, isCorrect: null };
      });
      setCalculations(calcArray);
    };

    generateCalculations();

    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    setTimerId(timer);

    return () => clearInterval(timer);
  }, [numCalculations]);

  useEffect(() => {
    if (finished === numCalculations) {
      setIsComplete(true);
      if (timerId) {
        clearInterval(timerId);
      }
    }
  }, [finished, numCalculations, timerId]);

  const handleFinish = (index, isCorrect) => {
    setCalculations((prev) =>
      prev.map((calc, i) =>
        i === index ? { ...calc, isCorrect } : calc
      )
    );
    setFinished((prev) => prev + 1);
  };

  return (
    <Container className="mt-5">
      <span
        className="d-flex justify-content-center align-items-center"
        style={{ gap: "30px" }}
      >
        <h1 className="mb-4">HOME</h1>
        <h1 className="mb-4 fw-normal">CALCULATIONS</h1>
      </span>
      <div style={{ border: "1px solid black", marginBottom: "20px" }}></div>
      {isComplete && (
        <Alert variant="success">
          All calculations completed! Elapsed time: <strong>{time}s</strong>
        </Alert>
      )}

      <Row className="g-3">
        {calculations.map((calc, index) => (
          <Col key={index} xs={6} md={4} lg={3}>
            <Calculation index={index} calc={calc} onFinish={handleFinish} />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <span className="fs-3">
          Finished: {finished}/{numCalculations}
        </span>
        <span className="fs-3">
          {time}s
          <i
            className="bi bi-stopwatch me-2 fs-3"
            style={{ color: "black", fontSize: "20px", paddingLeft: "10px" }}
          ></i>
        </span>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Button className="mb-2" variant="primary" onClick={onHome}>
          Home
        </Button>
      </div>
    </Container>
  );
}

export default Calculations;
