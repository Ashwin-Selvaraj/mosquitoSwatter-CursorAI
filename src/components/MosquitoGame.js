import { useState, useEffect } from 'react';
import './MosquitoGame.css';

const MosquitoGame = () => {
  const [score, setScore] = useState(0);
  const [mosquitoes, setMosquitoes] = useState([]);

  const spawnMosquito = () => {
    const newMosquito = {
      id: Math.random(),
      left: Math.random() * (window.innerWidth - 50),
      top: Math.random() * (window.innerHeight - 50),
    };
    setMosquitoes(prev => [...prev, newMosquito]);
  };

  const swatMosquito = (id) => {
    setMosquitoes(prev => prev.filter(mosquito => mosquito.id !== id));
    setScore(prev => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(spawnMosquito, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="game-container">
      <div className="score">Score: {score}</div>
      {mosquitoes.map(mosquito => (
        <div
          key={mosquito.id}
          className="mosquito"
          style={{
            left: `${mosquito.left}px`,
            top: `${mosquito.top}px`
          }}
          onClick={() => swatMosquito(mosquito.id)}
        >
          🦟
        </div>
      ))}
    </div>
  );
};

export default MosquitoGame; 