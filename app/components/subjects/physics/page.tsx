import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Add from '@mui/icons-material/Add';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from "@mui/joy/Button";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
export default function TypographyHeadline() {
  return (
    <>
    <Stack spacing={2}>
      
      <Typography  level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
      <FormControl>
      <RadioGroup  name="radio-buttons-group">
        <Radio value="1" label="0.9%" variant="outlined" size="lg"/>
        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
        <Radio value="3" label="3.1%" variant="outlined"  size="lg"/>
        <Radio value="4" label="4.2%" variant="outlined"  size="lg"/>
     
      </RadioGroup>
    </FormControl>
    </Stack>
    <div className='bottom'>
    <Button size="lg">SAVE & NEXT</Button>
            <Button sx={{ ml: 2 }} size="lg" color="neutral" variant="solid">
              CLEAR
            </Button>
            <Button sx={{ ml: 2 }} size="lg" color="warning">
              SAVE & MARK FOR REVIEW
            </Button>
            <Button sx={{ ml: 2 }} size="lg" color="success">
              MARK FOR REVIEW & NEXT
            </Button>
       <Button className='down' size="lg" sx={{  ml: 50}} startDecorator={<ArrowBackIosRoundedIcon/>}>BACK </Button>
          <Button size="lg" sx={{ ml: 2 }}  endDecorator={<ArrowForwardIosRoundedIcon  />}>NEXT </Button>
       
       </div>
          </>
  );
}