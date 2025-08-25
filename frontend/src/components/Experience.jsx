import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaAws, FaDocker, FaJenkins, FaServer } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";

// Styled Components
const ExperienceSection = styled(motion.div)`
  padding: 120px 0;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #fff;

  @media (max-width: 575px) {
    padding: 80px 0;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 25px;
  margin-top: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    width: 3px;
    height: 100%;
    background: #00b4db;
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 50px;
  padding-left: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background: #00b4db;
    border: 3px solid #111;
    border-radius: 50%;
    z-index: 1;
  }
`;

const TimelineCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 180, 219, 0.3);
  }
`;

const SkillIconContainer = styled(motion.div)`
  font-size: 2rem;
  color: #00b4db;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Honeykode Technologies Private Limited",
    duration: "3+ Years",
    description:
      "Automated CI/CD pipelines, deployed scalable infrastructure on AWS, implemented Infrastructure as Code (IaC) using Terraform, containerized applications using Docker & Kubernetes, and ensured high system availability with monitoring and logging solutions.",
    skills: [<FaJenkins />, <FaDocker />, <FaAws />, <SiTerraform />],
  },
  {
    role: "Server Administrator Trainee",
    company: "IPSR Solution Limited",
    duration: "7 Months",
    description:
      "Assisted in managing Linux and Windows servers, configuring network setups, troubleshooting server issues, and supporting deployments and maintenance activities.",
    skills: [<FaServer />, <FaAws />],
  },
];

const Experience = () => {
  return (
    <ExperienceSection
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
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
              My journey in DevOps and System Administration, building automation pipelines, managing cloud infrastructure, and optimizing deployments.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Timeline>
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <TimelineCard>
                    <h3 style={{ color: "#00b4db", fontWeight: "700" }}>{exp.role}</h3>
                    <p style={{ color: "#bbb", fontStyle: "italic" }}>{exp.duration}</p>
                    <p style={{ color: "#ddd", lineHeight: "1.7" }}>{exp.description}</p>
                    <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                      {exp.skills.map((icon, idx) => (
                        <SkillIconContainer key={idx}>{icon}</SkillIconContainer>
                      ))}
                    </div>
                  </TimelineCard>
                </TimelineItem>
              ))}
            </Timeline>
          </Col>
        </Row>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
