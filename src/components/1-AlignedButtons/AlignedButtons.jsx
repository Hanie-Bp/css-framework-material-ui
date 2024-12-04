import { Button, Link, Stack } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';

const AlignedButtons = () => {
    const [isDisabled,setIsDisabled] = useState(false)

    const handleDisabled =()=> {
        setIsDisabled(true)
    }
  return (
    <Stack  sx={{justifyContent:'center', marginTop:'200px' ,border:'1px solid'}}  direction="row" spacing={2}>
      <Button variant="text"  sx={{ paddingY: "0.5rem", paddingX: "2rem" }} color="success" onClick={handleDisabled} disabled={isDisabled}>Text</Button>
      <Button variant="contained"  sx={{ paddingY: "0.5rem", paddingX: "2rem" }} startIcon={<PersonIcon/>}>Contained</Button>
      <Button variant="outlined"  sx={{ paddingY: "0.5rem", paddingX: "2rem" }} color="error" component={Link}  href="https://www.google.com/">Outlined</Button>
    </Stack>
  );
};

export default AlignedButtons;
