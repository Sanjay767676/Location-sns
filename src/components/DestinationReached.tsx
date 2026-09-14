import React from 'react';
import type { Department } from '../data/departments';

interface DestinationReachedProps {
  department: Department;
  onRestart: () => void;
}

export const DestinationReached: React.FC<DestinationReachedProps> = ({ 
  department, 
  onRestart 
}) => {
  return (
    <div className="screen-container" style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img 
        src="/snsct-ai.jfif" 
        alt="SNS College of Technology AI Campus"
        style={{ width: '100%', maxWidth: '400px', borderRadius: '16px', marginBottom: '1.5rem', objectFit: 'cover' }}
      />
      
      <h2 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>{department.name}</h2>
      
      <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', width: '100%', maxWidth: '400px', marginBottom: '2rem' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--text-primary)' }}>Indoor Instructions</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
          {department.indoorInstruction}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <div>
            <strong style={{ display: 'block', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>Floor</strong>
            <span style={{ fontWeight: 600 }}>{department.floor}</span>
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>Block</strong>
            <span style={{ fontWeight: 600 }}>{department.block}</span>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <strong style={{ display: 'block', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>Rooms</strong>
            <span style={{ fontWeight: 600 }}>{department.rooms}</span>
          </div>
        </div>
      </div>

      <div className="bottom-action" style={{ marginTop: '0', background: 'transparent' }}>
        <button onClick={onRestart}>
          Finish
        </button>
      </div>
    </div>
  );
};
