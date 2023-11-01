import React, { SyntheticEvent } from 'react';
import '../App.css';
import { Tab, Tabs } from '@mui/material';

export function Movies() {
  function handleChange(event: SyntheticEvent<Element, Event>, value: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="App">
      <Tabs centered>
      <Tab label="I want to Watch" />
      <Tab label="I'm watching"/>
      <Tab label="I watched" />
      </Tabs>




    </div>




    
  );
}

export default Movies;
