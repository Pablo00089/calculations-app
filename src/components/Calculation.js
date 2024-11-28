import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

function Calculation({ index, calc, onFinish }) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!submitted) {
      const correctResult =
        calc.op === "+" ? calc.n + calc.m :
        calc.op === "-" ? calc.n - calc.m :
        calc.n * calc.m;

      const isCorrect = parseInt(input, 10) === correctResult;
      setSubmitted(true);
      onFinish(index, isCorrect);
    }
  };

  return (
    <Card
      bg={submitted ? (calc.isCorrect ? "success" : "danger") : "light"}
      text={submitted ? "white" : "dark"}
      className="text-center p-2"
    >
      <Card.Body className="d-flex justify-content-center align-items-center" style={{gap: "10px",}}>
        <Card.Text className="mb-0">{`${calc.n} ${calc.op} ${calc.m} =`}</Card.Text>
        <Form.Control
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={submitted}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="w-50"
          style={{ textAlign: "center" }}
        />
      </Card.Body>
    </Card>
  );
}

export default Calculation;
