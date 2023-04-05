import React, { FC } from "react";
import { Typography } from "@mui/material";

interface ButtonProps {
  text: string;
  color: string;
  fontSize: number;
}

const TPText: FC<ButtonProps> = ({ text, color, fontSize }) => {
  return (
    <Typography sx={{ fontSize: fontSize }} color={color} gutterBottom>
      {text}
    </Typography>
  );
};

export default TPText;
