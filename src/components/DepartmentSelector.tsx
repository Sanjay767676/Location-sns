import React, { useState } from 'react';
import { departments } from '../data/departments';

interface DepartmentSelectorProps {
  onSelect: (departmentId: string) => void;
}

export const DepartmentSelector: React.FC<DepartmentSelectorProps> = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleStart = () => {
    if (selectedId) {
      onSelect(selectedId);
    }
  };

  return (
    <div className="screen-container" style={{ padding: '2rem 1rem' }}>
      <h2>Choose your department</h2>
      
      <div className="department-list">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className={`department-item ${selectedId === dept.id ? 'selected' : ''}`}
            onClick={() => setSelectedId(dept.id)}
          >
            {dept.name}
          </div>
        ))}
      </div>

      <div className="bottom-action">
        <button 
          onClick={handleStart} 
          disabled={!selectedId}
        >
          Guide Me / Get Directions
        </button>
      </div>
    </div>
  );
};
