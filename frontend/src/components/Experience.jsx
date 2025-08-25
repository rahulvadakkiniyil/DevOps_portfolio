import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Honeykode Technologies Private Limited",
      duration: "3 Years",
      description:
        "Worked on designing, automating, and managing CI/CD pipelines, deploying scalable infrastructure on AWS, implementing monitoring solutions, and maintaining high system availability.",
    },
    {
      role: "Server Administrator Trainee",
      company: "IPSR Solution Private Limited",
      duration: "7 Months",
      description:
        "Assisted in managing Linux and Windows servers, configuring network setups, handling troubleshooting, and supporting deployment activities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-10 text-center"
        >
          Professional Experience
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 w-6 h-6 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  {exp.role}
                </h2>
              </div>
              <p className="text-gray-600 text-sm mb-2">{exp.duration}</p>
              {exp.company && (
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
              )}
              <p className="text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
