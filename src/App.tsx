import React from "react";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine";
import Chip from "./components/atoms/Chip";
import ButtonComponent from "./components/atoms/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DoneIcon from "@mui/icons-material/Done";
import { Typography } from "@mui/material";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        <Chip label="Done" type="done" color="green" />
        {/* <ButtonComponent
            variant="outlined"
            startIcon={<DoneIcon  />}
            color="#ffffff"
          >
          </ButtonComponent> */}
        <Typography color="#000">Add</Typography>
        <p>To Do application</p>
      </div>
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  );
}

export default App;
