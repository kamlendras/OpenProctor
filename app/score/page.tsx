"use client";
import * as React from "react";
import Grid from "@mui/joy/Grid";
import S1 from "../components/score/s1";
import S2 from "../components/score/s2";
import S3 from "../components/score/s3";
import S4 from "../components/score/s4";
import S5 from "../components/score/s5";
import S6 from "../components/score/s6";
import S7 from "../components/score/s7";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import { CountUp } from "use-count-up";
export default function LinearProgressDeterminate() {
  return (
    <>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
    <Grid xs={6}>
    <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg", maxWidth:"300px" }}
          >
      <Stack   direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg">Total Questions:</Typography>

        <Typography level="title-lg">
          <CountUp isCounting end={210} duration={1} />
        </Typography>
      </Stack>
    
      <Stack direction="row"   justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg">Total Attempted:</Typography>
        <Typography level="title-lg">
          <CountUp isCounting end={167} duration={1} />
        </Typography>{" "}
      </Stack>
      <Stack direction="row"   justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg" color="success">
          Total Correct:
        </Typography>
        <Typography level="title-lg" color="success">
          <CountUp isCounting end={116} duration={1} />
        </Typography>{" "}
      </Stack>
      <Stack direction="row"   justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg" color="danger">
          Total Incorrect:
        </Typography>
        <Typography level="title-lg" color="danger">
          <CountUp isCounting end={51} duration={1} />
        </Typography>{" "}
      </Stack>
      </Sheet>
      </Grid>
      <Grid xs={6}>
      <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg", maxWidth:"300px" }}
          >
      <Stack direction="row"   justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg">Rank:</Typography>
        <Typography level="title-lg">
          <CountUp isCounting end={408356} duration={1} />
        </Typography>{" "}
      </Stack>
      <Stack direction="row"   justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg">Percentage(%):</Typography>
        <Typography level="title-lg">
          <CountUp isCounting end={86} duration={1} />
        </Typography>{" "}
      </Stack>
      <Stack direction="row"   justifyContent="space-between"
  alignItems="center"
  spacing={0}>
        <Typography level="title-lg">Percentile:</Typography>
        <Typography level="title-lg">
          <CountUp isCounting end={91} duration={1} />
        </Typography>{" "}
      </Stack>
      </Sheet>
      </Grid>
      </Grid>
      <br/>
      <Sheet variant="soft" color="neutral" sx={{ p: 2, borderRadius: "lg" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img src="phy.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Physics</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S1 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              {" "}
              <img src="beaker.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Chemistry</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S2 />
          </Grid>
          <Grid xs={3}>
            {" "}
            <Stack direction="row" spacing={1}>
              <img src="math3.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Mathematics</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S3 />
          </Grid>
          <Grid xs={3}>
            {" "}
            <Stack direction="row" spacing={1}>
              <img src="bio.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Botany</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S4 />
          </Grid>
          <Grid xs={3}>
            {" "}
            <Stack direction="row" spacing={1}>
              <img src="earth.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Geography</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S5 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img src="res.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Reasoning</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S6 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img src="comp.svg" alt="devices" width="30" height="30" />
              <Typography level="title-lg">Computer</Typography>{" "}
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S7 />
          </Grid>
        </Grid>
      </Sheet>
    </>
  );
}
