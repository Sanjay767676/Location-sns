import React, { useEffect } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // The typing animation is CSS-based and takes 1.5s
    // We wait for the animation to finish + 1s delay
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="screen-container">
      <h2>Welcome to</h2>
      <div className="typewriter-text">SNS Institutions</div>
    </div>
  );
};
