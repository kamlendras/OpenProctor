"use client";
import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import { useCountUp } from 'use-count-up';
export default function LinearProgressDeterminate() {
  const { value } = useCountUp({
    isCounting: true,
    duration: 1,
    easing: 'linear',
    start: 0,
    end: 65,
    onComplete: () => ({
      shouldRepeat: false,
      delay: 0.2,
    }),
  });
  
 
  return (
  <>
        <LinearProgress determinate  value={Number(value!)} variant="solid" color="neutral"/>
        </>  
  );
}
