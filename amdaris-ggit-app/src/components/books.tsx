import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// import Input from './input';

// interface Book with fields(id, name, author …
interface Book {
  id: number;
  name: string;
  author: string;
  language: string;
}


export default function Books() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const displayBook = 

return (
  <div>
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="In progress" />
          <Tab value="two" label="Finished" />
          <Tab value="three" label="In plan" />
        </Tabs>
      </Box>
    </div>
    <div>
      <h2>Books List:</h2>
    </div>
  </div>
  );
}


