import React from 'react'
import Calculator from './components/Calculator'
import AddNotes from './components/AddNotes'
import {Container, Row, Col} from 'react-bootstrap';

export default function Tools() {
  return (
      <>
      <Container>
        <Row>
          <Col md={12} lg={6}>
      <Calculator/>
      </Col>
      <Col md={12} lg={6}>
      <AddNotes/>
      </Col>
      </Row>
      </Container>
      </>
    )
  }


