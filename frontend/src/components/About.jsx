import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
              DevOps Engineer with 3 years of hands-on experience in automating, deploying, and managing cloud-based infrastructure. I specialize in CI/CD pipelines, infrastructure as code, containerization, and cloud platforms like AWS. My focus is on building reliable, scalable systems that improve development efficiency and operational stability. I enjoy solving complex problems and continuously learning new technologies to optimize software delivery and system performance.
              </p>
              <h4 className="mt-4">Interests</h4>
              <p>
                Beyond work, I enjoy exploring emerging technologies, engaging with tech communities, and staying abreast of trends in cloud-native development, system design, and infrastructure automation.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                Feel free to reach out via email at <a href="mailto:rahulvadakkiniyil@gmail.com">rahulvadakkiniyil@gmail.com</a>.
              </p>
            </Card.Body>



          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;