import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [val, setVal] = useState("");

  const handleSearch = async () => {
    console.log("handled search");
    setVal("");
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome exercises you <br />
        should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              textAlign: "center",
              position: "relative",
              height: { xs: "4px", sm: "5px" },
            },
            width: { sm: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={val}
          onChange={(e) => setVal(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            backgroundColor: "#ff2525",
            width: { sm: "130px" },
            position: "absolute",
            right: 0,
          }}
          variant="contained"
          color="error"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
