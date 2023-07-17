import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

  return (
    <div className="mt-5  canvas-container">
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre: </Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control type="password" placeholder="Ingrese Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
   </div>
  );
}
