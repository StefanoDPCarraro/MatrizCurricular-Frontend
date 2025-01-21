import Card from '@components/Card';
import { requirements } from '@mocks/Requirements';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <Card required={requirements}
      requirement={requirements}
        onClick={() => {
          console.log('clicked');
        }}
      >
        Button
      </Card>
    </>
  );
};      
export default LandingPage;