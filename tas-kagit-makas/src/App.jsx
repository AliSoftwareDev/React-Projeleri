import { useState } from 'react';
import './App.css';

const TOOLS = [
  { id: 'stone', label: 'Taş', img: 'images/images.jpg', alt: 'tas' },
  { id: 'paper', label: 'Kağıt', img: 'images/62e133404e3fe11214814c11.webp', alt: 'kağıt' },
  { id: 'scissors', label: 'Makas', img: 'images/makas.jpg', alt: 'makas' }
];

// Fonksiyonu tamamen dışarı aldık. Kapsam (scope) ve tanım hatası alma ihtimali sıfıra indi.
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * TOOLS.length);
  return TOOLS[randomIndex].id;
};

export default function App() {
  const [computerChoice, setComputerChoice] = useState('Bilgisayar Seçimi');
  const [resultText, setResultText] = useState('Gösteri Yeri');

  const playGame = (userChoice) => {
    const computer = getComputerChoice();
    setComputerChoice("Bilgisayar:" + computer);

    if (userChoice === "stone" && computer === "scissors") {
      setResultText("Kazandın! Taş Makası kırar.");
    } else if (userChoice === "stone" && computer === "paper") {
      setResultText("Kaybettin! Kağıt Taşı Sarmalar.");
    } else if (userChoice === "paper" && computer === "scissors") {
      setResultText("Kaybettin! Makas Kağıdı keser.");
    } else if (userChoice === "paper" && computer === "stone") {
      setResultText("Kazandın! Kağıt Taşı Sarmalar.");
    } else if (userChoice === "scissors" && computer === "stone") {
      setResultText("Kaybettin! Taş Makası Kırar.");
    } else if (userChoice === "scissors" && computer === "paper") {
      setResultText("Kazandın! Makas Kağıdı keser.");
    } else {
      setResultText("Berabere!");
    }
  };

  return (
    <>
      <p id="computer-choice">{computerChoice}</p>
      
      <div className="container">
        {TOOLS.map((tool) => (
          <button 
            key={tool.id} 
            className="game-btn" 
            id={`${tool.id}-btn`}
            onClick={() => playGame(tool.id)}
          >
            {tool.label}
            <img src={tool.img} alt={tool.alt} />
          </button>
        ))}
      </div>

      <div className="result">
        <p id="result-text">{resultText}</p>
      </div>
    </>
  );
}