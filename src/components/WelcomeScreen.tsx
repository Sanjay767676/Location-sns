import React, { useEffect } from 'react';
import ShinyText from './ShinyText';

interface WelcomeScreenProps {
  onComplete: () => void;
}

// Change this value to increase or decrease the delay before moving to the next page
const DISPLAY_DELAY_MS = 5000;

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // We wait for the animation to finish + delay
    const timer = setTimeout(() => {
      onComplete();
    }, DISPLAY_DELAY_MS);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="screen-container">
      <h2 className="charis-sil-regular welcome-title" style={{ marginBottom: '0', lineHeight: '1' }}>
        <ShinyText
          text="Welcome to"
          speed={2}
          delay={0}
          color="#000000ff"
          shineColor=""
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
      </h2>
      <div className="welcome-subtitle" style={{ marginTop: '0.5rem', lineHeight: '1' }}>
        <ShinyText
          text="SNS Institutions"
          speed={3}
          color="#111111"
          shineColor="#ffffff"
          direction="left"
          className="charm-bold"
          spread={100}
          yoyo={true}
        />
      </div>
    </div>
  );
};
