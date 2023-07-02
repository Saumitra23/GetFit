import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <>
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
          position: "relative",
          p: "20px",
        }}
      >
        <Typography color="#FF2625" fontWeight="300" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
          Checkout the most effective exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{
            backgroundColor: "#ff2625",
          }}
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{
            opacity: 0.1,
            position: "absolute",
            display: {
              lg: "block",
              sm: "block",
              xs: "none",
            },
          }}
          fontSize="200px"
        >
          Exercise
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "none",
          display: {
            sm: "block",
            xs: "none",
          },
          width: "500px",
        }}
      >
        <img
          style={{ position: "absolute", right: 0, top: 0, zIndex: -1 }}
          src={HeroBannerImg}
          width={500}
          // className="hero-banner-img"
          alt="hero banner"
        />
      </Box>
    </>
  );
};

export default HeroBanner;
