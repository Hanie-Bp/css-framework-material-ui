import { Box, Stack } from "@mui/material";


const CustumTheme = () => {
  return (
    <Stack>
      <Box sx={{ height: "200px" }} bgcolor='secondary.main'></Box>
      <Box sx={{ height: "200px" }} bgcolor='primary.main'></Box>
      <Box sx={{ height: "200px" }} bgcolor='success.main'></Box>
    </Stack>
  );
};

export default CustumTheme;
