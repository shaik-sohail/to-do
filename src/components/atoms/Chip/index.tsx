import React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import { Typography } from "@mui/material";
interface iProps {
  label: string;
  type: "done" | "progress" | "hold";
}
const index: React.FC<iProps & ChipProps> = (props) => {
  const { label, type } = props;
  return (
    <Chip
      label={<Typography color="white">{label}</Typography>}
      color={
        type === "done" ? "primary" : type === "progress" ? "secondary" : "info"
      }
      sx={{ width: "120px", height: "35px" }}
    />
  );
};

export default index;
