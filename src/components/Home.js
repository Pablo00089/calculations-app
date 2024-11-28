import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Home({ onStart }) {
  const [numCalculations, setNumCalculations] = useState(20);

  const handleStart = () => {
    const num = Math.max(20, Math.min(60, numCalculations));
    onStart(num);
  };

  return (
    <Container className="text-center mt-5">
      <span
        className="d-flex justify-content-center align-items-center"
        style={{ gap: "30px" }}
      >
        <h1 className="mb-4">HOME</h1>
        <h1 className="mb-4 fw-normal">CALCULATIONS</h1>
      </span>
      <div style={{ border: "1px solid black", marginBottom: "20px" }}></div>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className="mb-3 w-25">
          <h3 className="fw-normal">NoC</h3>
          <Form.Control
            type="number"
            value={numCalculations}
            onChange={(e) => setNumCalculations(Number(e.target.value))}
            className="mx-auto"
            style={{ textAlign: "center" }}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleStart} className="w-25">
          START
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
