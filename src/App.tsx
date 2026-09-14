import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { DepartmentSelector } from './components/DepartmentSelector';
import { LocationPermission } from './components/LocationPermission';
import { NavigationScreen } from './components/NavigationScreen';
import { DestinationReached } from './components/DestinationReached';
import { departments } from './data/departments';
import { routes } from './data/routes';

type AppState = 
  | 'WELCOME'
  | 'DEPARTMENT_SELECTION'
  | 'LOCATION_PERMISSION'
  | 'NAVIGATION_STARTED'
  | 'DESTINATION_REACHED';

function App() {
  const [appState, setAppState] = useState<AppState>('WELCOME');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

  const selectedDepartment = departments.find(d => d.id === selectedDeptId);
  const routeKeys = selectedDeptId ? routes[selectedDeptId] : [];

  const handleRestart = () => {
    setSelectedDeptId(null);
    setAppState('DEPARTMENT_SELECTION');
  };

  return (
    <>
      {appState === 'WELCOME' && (
        <WelcomeScreen onComplete={() => setAppState('DEPARTMENT_SELECTION')} />
      )}
      
      {appState === 'DEPARTMENT_SELECTION' && (
        <DepartmentSelector 
          onSelect={(id) => {
            setSelectedDeptId(id);
            setAppState('LOCATION_PERMISSION');
          }} 
        />
      )}
      
      {appState === 'LOCATION_PERMISSION' && (
        <LocationPermission 
          onPermissionGranted={() => setAppState('NAVIGATION_STARTED')}
          onCancel={() => setAppState('DEPARTMENT_SELECTION')}
        />
      )}
      
      {appState === 'NAVIGATION_STARTED' && selectedDeptId && selectedDepartment && routeKeys.length > 0 && (
        <NavigationScreen 
          departmentId={selectedDeptId}
          departmentName={selectedDepartment.name}
          routeKeys={routeKeys}
          onDestinationReached={() => setAppState('DESTINATION_REACHED')}
        />
      )}

      {appState === 'DESTINATION_REACHED' && selectedDepartment && (
        <DestinationReached 
          department={selectedDepartment}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
