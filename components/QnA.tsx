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

  const toggleAccordion = (index: number) => {
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
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-white text-lg font-semibold cursor-pointer focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="text-xl font-bold">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="p-4 text-gray-400"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnA;
