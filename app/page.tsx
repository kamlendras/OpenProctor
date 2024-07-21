"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import styles from "./page.module.css";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Button from "@mui/joy/Button";
import Tabs from "./components/tabs"
export default function Home() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  return (
    <div onCopy={(event)=>{
      event.preventDefault();
    }}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={10}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ m: 0, borderRadius: "lg" }}
          >
                     <Tabs/>
          </Sheet>
        </Grid>
        <Grid xs={2}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{
              p: 10,
              borderRadius: "lg",
            }}
          >
            {/* <div> */}
            <Camera ref={camera} />
            {/* <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button> */}
            {/* <img src={image} alt='Taken photo'/> */}
            {/* </div> */}
          </Sheet>
        </Grid>
        <Grid xs={10}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
   
          </Sheet>
        </Grid>
        <Grid xs={2}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
            k
          </Sheet>
        </Grid>
        <Grid xs={10}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
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
         <br/>
          <Button size="lg" sx={{ m: 1 }} startDecorator={<ArrowBackIosNewRoundedIcon/>}>BACK</Button>
          <Button size="lg" sx={{ m: 1 }} endDecorator={<ArrowForwardIosRoundedIcon  />}>NEXT </Button>
          </Sheet>


        </Grid>
        <Grid xs={2}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 0, borderRadius: "lg" }}
          >
            <Button fullWidth size="lg">
              Summit Test
            </Button>
          </Sheet>
        </Grid>
        
      </Grid>
    </div>
  );
}
