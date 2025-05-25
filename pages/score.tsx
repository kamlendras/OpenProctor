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
import Pie from "../components/score/pie";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import { CountUp } from "use-count-up";
import Test from "../test.json";
export default function LinearProgressDeterminate() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="soft"
          color="neutral"
          sx={{ p: 2, borderRadius: "lg", maxWidth: "300px" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg">Total Questions:</Typography>

            <Typography level="title-lg">
              <CountUp isCounting end={210} duration={1} />
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg">Total Attempted:</Typography>
            <Typography level="title-lg">
              <CountUp isCounting end={167} duration={1} />
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg" color="success">
              Total Correct:
            </Typography>
            <Typography level="title-lg" color="success">
              <CountUp isCounting end={116} duration={1} />
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg" color="danger">
              Total Incorrect:
            </Typography>
            <Typography level="title-lg" color="danger">
              <CountUp isCounting end={51} duration={1} />
            </Typography>
          </Stack>
        </Sheet>

        <Sheet
          variant="soft"
          color="neutral"
          sx={{ p: 2, borderRadius: "lg", maxWidth: "300px" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg">Rank:</Typography>
            <Typography level="title-lg">
              <CountUp isCounting end={408356} duration={1} />
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg">Percentage(%):</Typography>
            <Typography level="title-lg">
              <CountUp isCounting end={86} duration={1} />
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Typography level="title-lg">Percentile:</Typography>
            <Typography level="title-lg">
              <CountUp isCounting end={91} duration={1} />
            </Typography>
          </Stack>
        </Sheet>

        <Pie />
      </Stack>
      <br />

      <Sheet variant="soft" color="neutral" sx={{ p: 2, borderRadius: "lg" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.aicon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.a}</Typography>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S1 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.bicon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.b}</Typography>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S2 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.cicon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.c}</Typography>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S3 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.dicon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.d}</Typography>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S4 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.eicon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.e}</Typography>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S5 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.ficon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.f}</Typography>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <S6 />
          </Grid>
          <Grid xs={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Test.subjects.gicon}
                alt="icon"
                width="30"
                height="30"
              />
              <Typography level="title-lg"> {Test.subjects.g}</Typography>
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
