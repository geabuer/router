import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <div>
      <h2>Cuentanos, en que te podemos ayudar?</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Escribe tu mensaje" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Contacto