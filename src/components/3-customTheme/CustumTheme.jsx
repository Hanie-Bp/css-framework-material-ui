import { Height } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";

const CustumTheme = () => {
  return (
    <Stack>
      <Box sx={{ height: "200px" }} bgcolor='secondary.main'></Box>
      <Box sx={{ height: "200px" }} bgcolor='coral'></Box>
      <Box sx={{ height: "200px" }} bgcolor='bisque'></Box>
    </Stack>
  );
};

export default CustumTheme;
