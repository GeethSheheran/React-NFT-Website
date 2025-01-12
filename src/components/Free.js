import React from 'react';
import FAQ from 'react-faq-component';
import styles from './Free.module.css';

const Free = () => {
  const data = {
    rows: [
      {
        title: 'What is The Birds of Pamparigouste?',
        content: 'The Birds of Pamparigouste is A UNIQUE NFT collection of 9,999 NFTs on Solana that allows collectors and art lovers to engage with the legacy of PHI while supporting street artists worldwide'
      },
      {
        title: 'What is the purpose of The Birds of Pamparigouste?',
        content: "This project aims to honor the late French street artist Phi's legacy by preserving and showcasing his iconic works through NFTs Additionally, we aim to support the broader street art community by providing a platform where artists can share their collections,with NFT holders voting on their favorite submissions"
      },
      {
        title: 'How does voting work for NFT holders?',
        content: "Only NFT holders from our collection will have the power to vote on digital street art submissions. The artist with the most votes will win exclusive benefits, including a free NFT from Phi’s legendary collection."
      },
      {
        title: 'What benefits do NFT holders receive?',
        content: "NFT holders enjoy several perks, including voting rights on street art submissions, participation in a lucky draw, exclusive Phi NFT rewards, and free child NFTs when our P2E game launches. Holders can also vote on which of Phi’s works should be featured in future collections or real-world exhibitions."
      },
      {
        title: 'How does the project support street artists?',
        content: "We dedicate 30% of proceeds to street artists, based on community voting. Street artists can submit their work to our platform, and the most-voted artist will win a free NFT from Phi’s collection along with other rewards."
      },
      // Add more questions and answers as needed
    ]
  };

  const stylesCustom = {
    bgColor: "#1e1e1e",
    titleTextColor: "#fff",
    rowTitleColor: "#ddd",
    rowContentColor: "#bbb",
    arrowColor: "#ddd",
    rowTitleFontSize: "16px",
    rowContentFontSize: "14px",
    rowContentPadding: "10px 0",
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>FAQ</h2>
      <div className={styles.gridContainer}>
        <FAQ data={data} styles={stylesCustom} />
      </div>
    </div>
  );
};

export default Free;
