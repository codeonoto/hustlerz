'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionAnswer {
  question: string;
  answer: string;
}

const questions: QuestionAnswer[] = [
  {
    question: 'What services does Hustlerz provide?',
    answer:
      'Hustlerz offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  },
  {
    question: 'How involved will I be in the project development process?',
    answer:
      'We believe in close collaboration. You’ll be involved throughout the project lifecycle, from initial concept to final launch. Our team will keep you informed and updated every step of the way.',
  },
  {
    question: 'How do you ensure my product security?',
    answer:
      'We prioritize security at every stage. Our development practices adhere to industry-standard security protocols. We conduct regular security audits and implement robust measures to protect your data and applications.',
  },
  {
    question: 'How can Hustlerz help my business?',
    answer:
      'Hustlerz can help your business by providing innovative solutions that drive growth and efficiency. We can help you build a strong online presence, streamline your operations, and improve customer engagement.',
  },
  {
    question: 'How long does it take to complete a project with Hustlerz?',
    answer:
      'The project timeline depends on the scope and complexity of the project. We work closely with you to establish realistic timelines and milestones.',
  },
  {
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer ongoing maintenance and support services to ensure your website or app remains up-to-date, secure, and performing optimally.',
  },
  {
    question: 'How do I get started with Hustlerz?',
    answer:
      'Getting started is easy. Simply contact us through our website or give us a call. We’ll schedule a consultation to discuss your project requirements and answer any questions you may have.',
  },
];

const QnA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkBlue">
            Got Questions? We've Got Answers!
          </h2>
          <p className="text-lg sm:text-xl text-white mt-4">
            If you have any additional questions or need further clarification, don't hesitate to get in touch with us. We're here to help you!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h4 className="text-lg font-semibold text-white">
                  {question.question}
                </h4>
                <div className="text-xl font-bold text-white">
                  {activeIndex === index ? '-' : '+'}
                </div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 500 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-400 overflow-hidden"
                  >
                    <p>{question.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnA;
