import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Experience = () => {
  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Honeykode Technologies Private Limited",
      duration: "3 Years",
      description:
        "Worked on automating CI/CD pipelines, deploying scalable infrastructure on AWS, implementing Infrastructure as Code (IaC), containerization using Docker & Kubernetes, and ensuring high system availability with monitoring and logging solutions.",
    },
    {
      role: "Server Administrator Trainee",
      company: "IPSR Solutions Ltd",
      duration: "7 Months",
      description:
        "Assisted in managing Linux and Windows servers, configuring network setups, handling troubleshooting tasks, and supporting server deployments and maintenance activities.",
      certificate: "../public/certification/Rahul Vadakkiniyil- Exp Letter.pdf", // Add your certificate path here
    },
  ];

  const handleDownload = (certificatePath) => {
    const link = document.createElement("a");
    link.href = certificatePath;
    link.setAttribute("download", certificatePath.split("/").pop());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", padding: "60px 0" }}>
      <Container>
        {/* Section Heading */}
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: "700",
                background: "linear-gradient(90deg, #00b4db, #0083b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience
            </h2>
            <p style={{ color: "#bbb", marginTop: "10px", fontSize: "1rem" }}>
              My professional journey and key contributions in the DevOps and System Administration domains.
            </p>
          </Col>
        </Row>

        {/* Experience Cards */}
        <Row className="mt-5">
          {experiences.map((exp, index) => (
            <Col lg={8} className="mx-auto mb-4" key={index}>
              <Card
                className="border-0 shadow-lg"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 180, 219, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
                }}
              >
                <Card.Body className="p-5" style={{ textAlign: "justify" }}>
                  <h4
                    style={{
                      color: "#00b4db",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    {exp.role}
                  </h4>
                  <p style={{ color: "#bbb", fontStyle: "italic" }}>{exp.duration}</p>
                  <p style={{ color: "#ccc", lineHeight: "1.7" }}>{exp.description}</p>

                  {/* Download Button for Server Admin Trainee */}
                  {exp.certificate && (
                    <Button
                      variant="info"
                      style={{
                        marginTop: "15px",
                        fontWeight: "600",
                        borderRadius: "8px",
                        background: "linear-gradient(90deg, #00b4db, #0083b0)",
                        border: "none",
                      }}
                      onClick={() => handleDownload(exp.certificate)}
                    >
                      Download Certificate
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
