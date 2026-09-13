import React, { useState, useRef, useEffect } from 'react';
import { departments } from '../data/departments';

interface DepartmentSelectorProps {
  onSelect: (departmentId: string) => void;
}

export const DepartmentSelector: React.FC<DepartmentSelectorProps> = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedDepartment = departments.find(d => d.id === selectedId);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStart = () => {
    if (selectedId) {
      onSelect(selectedId);
    }
  };

  return (
    <div className="screen-container" style={{ padding: '2rem 1rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Choose your department</h2>

      <div
        ref={dropdownRef}
        style={{
          width: '100%',
          maxWidth: '400px',
          position: 'relative',
          marginBottom: '2rem',
          zIndex: 50
        }}
      >
        {/* Dropdown Trigger */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '1rem 1.25rem',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 500,
            color: selectedId ? '#111111' : '#666666',
            transition: 'all 0.2s ease'
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {selectedDepartment ? selectedDepartment.name : "Select your department"}
          </span>
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: '#999', flexShrink: 0 }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              padding: '0.5rem',
              maxHeight: '300px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            {departments.map((dept) => (
              <div
                key={dept.id}
                onClick={() => {
                  setSelectedId(dept.id);
                  setIsOpen(false);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                style={{
                  padding: '0.875rem 1rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: selectedId === dept.id ? 600 : 500,
                  color: selectedId === dept.id ? 'var(--primary-color)' : '#333333',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background-color 0.15s ease',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {dept.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom-action" style={{ marginTop: '0', background: 'transparent' }}>
        <button
          onClick={handleStart}
          disabled={!selectedId}
          style={{ backgroundColor: '#111111', color: '#ffffff', padding: '1.25rem', borderRadius: '16px', fontSize: '1.1rem' }}
        >
          Guide
        </button>
      </div>
    </div>
  );
};
