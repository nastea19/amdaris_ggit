import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export interface Film {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genre: string;
  rating: number;
  durationMinutes: number;
}

export default function Movies() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="I want to Watch" />
        <Tab value="two" label="I'm watching" />
        <Tab value="three" label="I watched" />
      </Tabs>
    </Box>
  );
}
