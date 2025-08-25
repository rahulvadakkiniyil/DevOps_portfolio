import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import styled from 'styled-components';
import resumeFile from '../assets/rahulvadakkiniyil.pdf'; // Importing the PDF from assets

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Resume = () => {
  return (
    <ResumeContainer className="section">
      <Row className="w-100">
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title mb-5">Resume</h2>
          <Button
            href={resumeFile} 
            download="Rahul_Vadakkiniyil_Resume.pdf"
            variant="primary"
            size="lg"
            className="resume-download-btn"
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
        </Col>
      </Row>
    </ResumeContainer>
  );
};

export default Resume;