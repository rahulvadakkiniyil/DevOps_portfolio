import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      status: "Current",
      description: "Leading DevOps initiatives for cloud-native applications serving 2M+ users. Architecting and implementing scalable CI/CD pipelines, managing Kubernetes clusters, and driving automation across development workflows.",
      responsibilities: [
        "Designed and implemented CI/CD pipelines using Jenkins, GitLab CI, reducing deployment time by 70%",
        "Managed production Kubernetes clusters with 100+ microservices across AWS and Azure",
        "Automated infrastructure provisioning using Terraform and Ansible, managing 500+ cloud resources",
        "Led incident response team, achieving 99.9% uptime for critical applications",
        "Mentored 5 junior engineers on DevOps best practices and cloud technologies",
        "Implemented monitoring solutions using Prometheus, Grafana, and ELK stack"
      ],
      technologies: [
        "Kubernetes", "Docker", "AWS", "Azure", "Terraform", "Ansible", 
        "Jenkins", "GitLab CI", "Prometheus", "Grafana", "ELK Stack", 
        "Python", "Go", "Helm", "ArgoCD"
      ],
      achievements: [
        "Reduced deployment time from 2 hours to 15 minutes",
        "Improved system reliability from 99.5% to 99.9% uptime",
        "Cost optimization initiatives saving $50K annually",
        "Led migration of legacy applications to cloud-native architecture"
      ],
      projects: [
        {
          name: "Microservices Migration",
          description: "Led the migration of monolithic application to microservices architecture using Kubernetes and service mesh"
        },
        {
          name: "Multi-Cloud Strategy",
          description: "Implemented disaster recovery strategy across AWS and Azure with automated failover capabilities"
        }
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudTech Innovations",
      location: "Kochi, Kerala",
      duration: "Jun 2021 - Dec 2022",
      type: "Full-time",
      status: "Completed",
      description: "Responsible for implementing DevOps practices in a fast-growing startup environment. Built CI/CD pipelines from scratch, managed cloud infrastructure, and established monitoring and alerting systems for multiple client projects.",
      responsibilities: [
        "Built CI/CD pipelines for 20+ client projects using Jenkins and GitHub Actions",
        "Managed AWS infrastructure including EC2, RDS, S3, and Lambda services",
        "Implemented Infrastructure as Code using Terraform for consistent deployments",
        "Set up monitoring and logging solutions using CloudWatch and Datadog",
        "Collaborated with development teams to implement containerization strategies",
        "Automated backup and disaster recovery procedures"
      ],
      technologies: [
        "AWS", "Jenkins", "GitHub Actions", "Terraform", "Docker", 
        "CloudWatch", "Datadog", "MySQL", "Redis", "Nginx", 
        "Python", "Bash", "Git"
      ],
      achievements: [
        "Implemented automated testing reducing manual QA time by 60%",
        "Established disaster recovery protocols with 1-hour RTO",
        "Successfully managed infrastructure for 50+ applications",
        "Achieved AWS Solutions Architect Associate certification"
      ],
      projects: [
        {
          name: "E-commerce Platform DevOps",
          description: "Built complete DevOps pipeline for high-traffic e-commerce platform handling 100K+ daily users"
        },
        {
          name: "Mobile App Backend Infrastructure",
          description: "Designed scalable backend infrastructure for mobile applications with auto-scaling capabilities"
        }
      ]
    }

  ];

  const experienceStats = [
    {
      label: "Years of Experience",
      value: "3+",
      icon: "📅",
      color: "text-blue-600"
    },
    {
      label: "Projects Delivered",
      value: "5+",
      icon: "💻",
      color: "text-green-600"
    },
    {
      label: "Team Members Mentored",
      value: "8",
      icon: "👥",
      color: "text-purple-600"
    },
    {
      label: "Infrastructure Cost Saved",
      value: "$100K+",
      icon: "📈",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-4">💼</span>
            <h2 className="text-5xl font-bold text-white">
              Professional Experience
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A progressive career journey from software development to DevOps engineering, 
            with expertise in cloud infrastructure, automation, and scalable system architecture.
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experienceStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${stat.color} mb-4 flex justify-center text-2xl`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experienceData.map((job, index) => (
            <div
              key={job.id}
              className="relative bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  job.status === 'Current' 
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}>
                  {job.status}
                </span>
              </div>

              <div className="p-8 lg:p-10">
                {/* Header Section */}
                <div className="mb-8">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-xl text-blue-400 font-semibold mb-4">
                      <span className="text-lg mr-2">🏢</span>
                      {job.company}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">📍</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">📅</span>
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-500 mr-3">💼</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {job.description}
                </p>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Responsibilities */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="text-blue-500 mr-3">⚙️</span>
                      Key Responsibilities
                    </h4>
                    <div className="space-y-3">
                      {job.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-gray-800 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Achievements */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="text-yellow-500 mr-3">🏆</span>
                      Key Achievements
                    </h4>
                    <div className="space-y-3 mb-6">
                      {job.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-gray-800 rounded-lg">
                          <span className="text-yellow-500 mr-3 mt-0.5">🏅</span>
                          <span className="text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Notable Projects */}
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="text-green-500 mr-2">🚀</span>
                      Notable Projects
                    </h5>
                    <div className="space-y-3">
                      {job.projects.map((project, idx) => (
                        <div key={idx} className="p-4 bg-gray-800 rounded-lg">
                          <h6 className="font-medium text-white mb-2">
                            {project.name}
                          </h6>
                          <p className="text-sm text-gray-300">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="text-purple-500 mr-3">💻</span>
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Philosophy */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Career Philosophy</h3>
          <p className="text-xl opacity-95 max-w-4xl mx-auto leading-relaxed">
            My professional journey is driven by a passion for building reliable, scalable systems that empower 
            development teams to deliver value faster. I believe in the power of automation, collaboration, and 
            continuous improvement. Each role has taught me valuable lessons about the intersection of people, 
            processes, and technology in creating successful software delivery pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;