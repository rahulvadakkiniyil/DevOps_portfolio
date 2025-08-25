import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt, FaAward, FaCheck, FaRedhat } from 'react-icons/fa';
import { SiAmazonaws, SiKubernetes, SiDocker, SiJenkins, SiTerraform } from 'react-icons/si';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const CertificationCard = styled(Card)`
  border: 1px solid rgba(172, 129, 192, 0.3);
  background: ${props => props.isDark ? 
    'rgba(255, 255, 255, 0.08)' : 
    'rgba(255, 255, 255, 0.9)'
  };
  backdrop-filter: blur(10px);
  border-radius: 16px;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 420px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ac81c0, #6c5ce7);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(172, 129, 192, 0.2);
    border-color: rgba(172, 129, 192, 0.5);
  }
  
  @media (max-width: 992px) {
    min-height: 380px;
    border-radius: 20px;
  }
  
  @media (max-width: 768px) {
    min-height: 350px;
    border-radius: 18px;
  }
  
  @media (max-width: 576px) {
    min-height: 400px;
    border-radius: 16px;
  }
`;

const CertificationTitle = styled.h4`
  color: ${props => props.isDark ? '#ffffff' : '#333333'} !important;
  font-weight: 700 !important;
  margin-bottom: 1rem;
  font-size: 1.1rem !important;
  display: block !important;
  text-align: center !important;
  line-height: 1.3;
  
  @media (max-width: 992px) {
    font-size: 1.1rem !important;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem !important;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.15rem !important;
    margin-bottom: 1.2rem;
  }
`;

const CertificationDescription = styled.p`
  color: ${props => props.isDark ? '#e0e0e0' : '#666666'};
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 992px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const SkillsList = styled.ul`
  color: ${props => props.isDark ? '#b0b0b0' : '#555555'};
  font-size: 0.8rem;
  line-height: 1.4;
  text-align: left;
  list-style: none;
  padding-left: 0;
  
  li {
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 992px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const StatusBadge = styled(Badge)`
  background: ${props => props.status === 'Completed' ? 
    'linear-gradient(45deg, #27ae60, #2ecc71)' : 
    'linear-gradient(45deg, #f39c12, #e67e22)'
  } !important;
  border: none;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
  border-radius: 15px;
  
  @media (max-width: 992px) {
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    margin: 0.15rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    margin: 0.2rem;
  }
`;

const DateText = styled.p`
  color: ${props => props.isDark ? '#b0b0b0' : '#666666'};
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  
  @media (max-width: 992px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const ProviderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: linear-gradient(45deg, #ac81c0, #6c5ce7);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    width: 55px;
    height: 55px;
    font-size: 1.3rem;
  }
`;

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 576) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };
    
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const getProviderIcon = (provider) => {
    switch(provider) {
      case 'AWS':
        return <SiAmazonaws />;
      case 'Redhat':
        return <FaRedhat />;
      case 'CNCF':
        return <SiKubernetes />;
      case 'Docker':
        return <SiDocker />;
      case 'CloudBees':
        return <SiJenkins />;
      case 'HashiCorp':
        return <SiTerraform />;
      default:
        return <FaCertificate />;
    }
  };

  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      provider: "AWS",
      description: "Validates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      status: "Completed",
      date: "March, 2027",
      skills: [
        "AWS Architecture Design",
        "EC2, VPC, S3, RDS",
        "Auto Scaling & Load Balancing",
        "Security Best Practices",
        "Cost Optimization"
      ],
      credentialUrl: "https://www.credly.com/badges/26c67c1d-31ee-4970-895f-dd571d7c6b4f/linked_in_profile"
    },
    {
      title: "AWS Knowledge: Architecting",
      provider: "AWS",
      description: "Advanced certification covering continuous delivery, automation, monitoring, and security on AWS platform.",
      status: "Completed",
      date: "Never",
      skills: [
        "AWS Architecture Design",
        "EC2, VPC, S3, RDS",
        "Auto Scaling & Load Balancing",
        "Security Best Practices",
        "Cost Optimization"
      ],
      credentialUrl: "https://www.credly.com/badges/9c9c8a95-ecc3-42d3-bfca-708cce963a3a/linked_in_profile"
    },
    {
        title: "AWS Knowledge: Amazon EKS",
        provider: "AWS",
        description: "Advanced certification covering EKS on AWS platform.",
        status: "Completed",
        date: "Never",
        skills: [
          "AWS Architecture Design",
          "AWS EKS, AWS Cloud, Containerization, Kubernetes",
          "AWS Cloud"
        ],
        credentialUrl: "https://www.credly.com/badges/443488a2-fa41-418c-af52-ae4880eaf45b/public_url"
      },
    {
        title: "RHCSA",
        provider: "Redhat",
        description: "Advanced certification covering continuous delivery, automation, monitoring, and security on AWS platform.",
        status: "Completed",
        date: "September 2025",
        skills: [
          "System Administration Fundamentals",
          "Storage and File System Management",
          "Process and Service Management",
          "Security and Access Control",
          "Software and Package Management"
        ],
        credentialUrl: "https://www.linkedin.com/in/rahulvadakkiniyil/details/certifications/"
      }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Global Certifications</h2>
          <p className="lead mb-5">
            Pursuing industry-recognized certifications to validate DevOps and cloud expertise
          </p>
        </Col>
      </Row>
      
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={setActiveIndex}
        indicators={true}
        controls={true}
        interval={6000}
        className="certifications-carousel"
      >
        {(() => {
          const groupedCertifications = [];
          for (let i = 0; i < certifications.length; i += cardsPerSlide) {
            groupedCertifications.push(certifications.slice(i, i + cardsPerSlide));
          }
          
          return groupedCertifications.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <Row className="justify-content-center">
                {group.map((cert, index) => {
                  const colClass = cardsPerSlide === 1 ? 'col-12' : 
                                 cardsPerSlide === 2 ? 'col-md-6 col-12' : 
                                 'col-lg-4 col-md-6 col-12';
                  return (
                    <div key={index} className={`${colClass} mb-4`}>
                      <CertificationCard isDark={isDarkMode}>
                        <Card.Body className="p-3 p-md-4 d-flex flex-column" style={{position: 'relative', zIndex: 2}}>
                          <ProviderIcon>
                            {getProviderIcon(cert.provider)}
                          </ProviderIcon>
                          
                          <CertificationTitle isDark={isDarkMode}>
                            {cert.title}
                          </CertificationTitle>
                          
                          <div className="mb-3 text-center">
                            <StatusBadge status={cert.status}>{cert.status}</StatusBadge>
                          </div>
                          
                          <DateText isDark={isDarkMode}>
                            <FaCalendarAlt className="me-2" style={{color: '#ac81c0'}} />
                            {cert.date}
                          </DateText>
                          
                          <CertificationDescription isDark={isDarkMode}>
                            {cert.description}
                          </CertificationDescription>
                          
                          <div className="mb-3">
                            <h6 style={{color: '#ac81c0', fontWeight: '600', textAlign: 'left', marginBottom: '0.8rem', fontSize: '0.9rem'}}>
                              <FaAward className="me-2" />
                              Key Skills:
                            </h6>
                            <SkillsList isDark={isDarkMode}>
                              {cert.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                  <FaCheck className="me-2" style={{color: '#27ae60', fontSize: '0.7rem'}} />
                                  {skill}
                                </li>
                              ))}
                            </SkillsList>
                          </div>
                          
                          <div className="mt-auto text-center">
                            {cert.credentialUrl ? (
                              <Button 
                                variant="outline-primary" 
                                href={cert.credentialUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                size="sm"
                                className="cert-btn"
                                style={{
                                  borderColor: '#ac81c0',
                                  color: '#ac81c0',
                                  borderRadius: '20px',
                                  padding: '0.4rem 1.2rem',
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <FaExternalLinkAlt className="me-2" /> View Credential
                              </Button>
                            ) : (
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                disabled
                                className="cert-btn-disabled"
                                style={{
                                  borderColor: '#6c757d',
                                  color: '#6c757d',
                                  borderRadius: '20px',
                                  padding: '0.4rem 1.2rem',
                                  opacity: 0.6
                                }}
                              >
                                <FaCertificate className="me-2" /> {cert.status}
                              </Button>
                            )}
                          </div>
                        </Card.Body>
                      </CertificationCard>
                    </div>
                  );
                })}
              </Row>
            </Carousel.Item>
          ));
        })()}
      </Carousel>
      
      <style jsx>{`
        .cert-btn:hover {
          background-color: #ac81c0 !important;
          color: white !important;
          border-color: #ac81c0 !important;
        }
        
        .certifications-carousel {
          padding: 0 60px;
        }
        
        @media (max-width: 992px) {
          .certifications-carousel {
            padding: 0 40px;
          }
        }
        
        .certifications-carousel .carousel-indicators {
          bottom: -60px;
        }
        
        .certifications-carousel .carousel-indicators button {
          background-color: #ac81c0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .certifications-carousel .carousel-control-prev,
        .certifications-carousel .carousel-control-next {
          width: 50px;
          height: 50px;
          background: rgba(172, 129, 192, 0.3);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(172, 129, 192, 0.5);
        }
        
        .certifications-carousel .carousel-control-prev {
          left: -30px;
        }
        
        .certifications-carousel .carousel-control-next {
          right: -30px;
        }
        
        .certifications-carousel .carousel-control-prev:hover,
        .certifications-carousel .carousel-control-next:hover {
          background: rgba(172, 129, 192, 0.6);
        }
        
        .certifications-carousel .carousel-control-prev-icon,
        .certifications-carousel .carousel-control-next-icon {
          filter: brightness(0) saturate(100%) invert(100%);
          width: 20px;
          height: 20px;
        }
        
        [data-theme='light'] .certifications-carousel .carousel-control-prev-icon,
        [data-theme='light'] .certifications-carousel .carousel-control-next-icon {
          filter: brightness(0) saturate(100%) invert(0%);
        }
        
        @media (max-width: 768px) {
          .certifications-carousel {
            padding: 0 25px;
          }
          
          .certifications-carousel .carousel-control-prev {
            left: -12px;
            width: 40px;
            height: 40px;
          }
          
          .certifications-carousel .carousel-control-next {
            right: -12px;
            width: 40px;
            height: 40px;
          }
          
          .certifications-carousel .carousel-indicators {
            bottom: -45px;
          }
        }
        
        @media (max-width: 576px) {
          .certifications-carousel {
            padding: 0 15px;
          }
          
          .certifications-carousel .carousel-control-prev {
            left: -8px;
            width: 35px;
            height: 35px;
          }
          
          .certifications-carousel .carousel-control-next {
            right: -8px;
            width: 35px;
            height: 35px;
          }
          
          .certifications-carousel .carousel-control-prev-icon,
          .certifications-carousel .carousel-control-next-icon {
            width: 16px;
            height: 16px;
          }
          
          .certifications-carousel .carousel-indicators {
            bottom: -40px;
          }
          
          .certifications-carousel .carousel-indicators button {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </Container>
  );
};

export default Certifications;