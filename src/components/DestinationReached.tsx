import React from 'react';

interface DestinationReachedProps {
  departmentName: string;
  onRestart: () => void;
}

export const DestinationReached: React.FC<DestinationReachedProps> = ({ 
  departmentName, 
  onRestart 
}) => {
  return (
    <div className="screen-container">
      <div className="confetti-icon">🎉</div>
      <h1 className="reached-title">You have arrived!</h1>
      <h3 className="reached-subtitle">{departmentName}</h3>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Your classroom is here. Welcome to the department!
      </p>

      <div className="bottom-action">
        <button onClick={onRestart}>
          Start New Navigation
        </button>
      </div>
    </div>
  );
};
