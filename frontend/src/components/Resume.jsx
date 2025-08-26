import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import styled from 'styled-components';
import resumeFile from '../assets/rahulvadakkiniyil.pdf'; // Importing the PDF from assets

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 0;
`;

//const PDFFrame = styled.iframe`
 // width: 100%;
  //height: 800px;
  //border: 1px solid var(--border-color);
  //border-radius: 8px;
  
  @media (max-width: 768px) {
    height: 600px;
  }
  
  @media (max-width: 576px) {
    height: 500px;
  }
`;

const Resume = () => {
  return (
    <ResumeContainer className="section">
      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title mb-4">Resume</h2>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <Button
            href={resumeFile} 
            download="Apurva_Gargote_Resume.pdf"
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
