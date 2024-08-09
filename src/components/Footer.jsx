import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear()  
    
  return (
    <footer className='mt-auto'>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>&copy;{currentYear} ForcesHorizon</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;