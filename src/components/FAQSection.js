import React, { useState } from 'react';
import './faq.css'; // External CSS file for styling

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "What is The Birds of Pamparigouste?", answer: "The Birds of Pamparigouste is A UNIQUE NFT collection of 9,999 NFTs on Solana that allows collectors and art lovers to engage with the legacy of PHI while supporting street artists worldwide" },
    { question: "What is the purpose of The Birds of Pamparigouste?", answer: "This project aims to honor the late French street artist Phi's legacy by preserving and showcasing his iconic works through NFTs Additionally, we aim to support the broader street art community by providing a platform where artists can share their collections,with NFT holders voting on their favorite submissions" },
    { question: "How does voting work for NFT holders?", answer: "Only NFT holders from our collection will have the power to vote on digital street art submissions. The artist with the most votes will win exclusive benefits, including a free NFT from Phi’s legendary collection." },
    { question: "What benefits do NFT holders receive?", answer: "NFT holders enjoy several perks, including voting rights on street art submissions, participation in a lucky draw, exclusive Phi NFT rewards, and free child NFTs when our P2E game launches. Holders can also vote on which of Phi’s works should be featured in future collections or real-world exhibitions." },
    { question: "How does the project support street artists?", answer: "We dedicate 30% of proceeds to street artists, based on community voting. Street artists can submit their work to our platform, and the most-voted artist will win a free NFT from Phi’s collection along with other rewards." },
  
  ];

  return (
    <div className="faq-container">
        <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{faq.question}</span>
            <i className={`faq-icon ${open === index ? 'open' : ''}`}>▼</i>
          </div>
          {open === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
