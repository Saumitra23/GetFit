import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid#ff2625" : "",
        backgroundColor: bodyPart === item ? "" : "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        margin: "10px",
      }}
      onClick={() => setBodyPart(item)}
    >
      <img src={Icon} alt="dumbell" width={40} />
      <Typography textTransform="capitalize">{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
