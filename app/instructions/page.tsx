"use client"
import React, {useCallback} from 'react';
import Typography from "@mui/joy/Typography";
import Divider from '@mui/joy/Divider';
import Checkbox from '@mui/joy/Checkbox';
import Link from "next/link";
import Button from "@mui/joy/Button";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";

export default function TypographyScales() {
  const handle = useFullScreenHandle();
  return (
    <Sheet
    variant="soft"
    color="neutral"
    sx={{
      p: 10,
      mx:10,
      borderRadius: "lg",
    }}
  >
    <div>
      <Typography level="h3"><u>General Instructions:</u></Typography>

      <Typography level="body-lg">
        1. Total duration of Exam is 180 min.
        <br />
        2. The clock will be set at the server. The countdown timer in the top
        right corner of screen will display the remaining time available for you
        to complete the examination. When the timer reaches zero, the
        examination will end by itself. You will not be required to end or
        submit your examination.
        <br /> 3. The Questions Palette displayed on the right side of screen
        will show the status of each question using one of the following
        symbols:
        <ol>
                                            <li> You have not visited the question yet.<br /></li>
                                            <li> You have not answered the question.<br /></li>
                                            <li> You have answered the question.<br /></li>
                                            <li> You have NOT answered the question, but have marked the question for review.<br /></li>
                                            <li>The questions Answered and Marked for Review will be considered for evalution.<br /></li>
                                        </ol>
      
        4. You can click on the arrow which apperes to the left of question
        palette to collapse the question palette thereby maximizing the question
        window. To view the question palette again, you can click on which
        appears on the right side of question window.
        <br />
        5. You can click on your Profile image on top right corner of your
        screen to change the language during the exam for entire question paper.
        On clicking of Profile image you will get a drop-down to change the
        question content to the desired language.
        <br />
        6. You can click on to navigate to the bottom and to navigate to top of
        the question are, without scrolling.
      </Typography>
      <Typography level="h3"><u>Navigating to a Question:</u></Typography>
      <Typography level="body-lg">
        To answer a question, do the following:<br/>a. Click on the question number in
        the Question Palette at the right of your screen to go to that numbered
        question directly. Note that using this option does NOT save your answer
        to the current question.<br/>b.  Click on Save & Next to save your answer for
        the current question and then go to the next question.<br/>c.  Click on Mark for
        Review & Next to save your answer for the current question, mark it for
        review, and then go to the next question.
      </Typography>
      <Typography level="h3"><u>Answering a Question:</u></Typography>
      <Typography level="body-lg">
        8. Procedure for answering a multiple choice type question:<br/>a. To select you
        answer, click on the button of one of the options.<br/>b. To deselect your
        chosen answer, click on the button of the chosen option again or click
        on the Clear Response button.<br/>c. To change your chosen answer, click on the
        button of another option<br/>d. To save your answer, you MUST click on the Save
        & Next button.<br/>e. To mark the question for review, click on the Mark for
        Review & Next button.<br/>9. To change your answer to a question that has
        already been answered, first select that question for answering and then
        follow the procedure for answering that type of question.
      </Typography>
      <Typography level="h3"><u>Navigating through sections:</u></Typography>
      <Typography level="body-lg">
        10. Sections in this question paper are displayed on the top bar of the
        screen. Questions in a section can be viewed by click on the section
        name. The section you are currently viewing is highlighted.<br/>11. After click
        the Save & Next button on the last question for a section, you will
        automatically be taken to the first question of the next section.<br/>12. You
        can shuffle between sections and questions anything during the
        examination as per your convenience only during the time stipulated.
        <br/>13. Candidate can view the corresponding section summery as part of the
        legend that appears in every section above the question palette.
      </Typography>
      <Divider sx={{m:2}}/>
      <Typography color="danger" level="body-lg">Please note all questions will appear in your default language. This language can be changed for a particular question later on.</Typography>
      <Divider sx={{m:2}}/>
      <Typography level="body-lg"><Checkbox  defaultChecked/> I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations</Typography>
      <Divider sx={{m:1}}/>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={11}></Grid>
      <Grid xs={1}>
      <Link href="/">
      <Button size="lg" sx={{ m: 1 }} endDecorator={<ArrowForwardIosRoundedIcon  />} onClick={handle.enter}>START </Button>        
          </Link>
      </Grid>
      </Grid>
    </div>
    </Sheet>
  );
}
