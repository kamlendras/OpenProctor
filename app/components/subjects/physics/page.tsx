import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
export default function TypographyHeadline() {
  return (
    <Stack spacing={1.5}>
      <Typography  level="title-lg" >1. If the sizes of charged bodies are very small compared to the distances between them, we treat them as ____________.</Typography>
      <FormControl>
      <RadioGroup  name="radio-buttons-group">
        <Radio value="1" label="Zero charges" variant="outlined" size="md"/>
        <Radio value="2" label="Point charges" variant="outlined" />
        <Radio value="3" label="Single charge" variant="outlined" />
        <Radio value="4" label="No charges" variant="outlined" />
     
      </RadioGroup>
    </FormControl>
    </Stack>
  );
}