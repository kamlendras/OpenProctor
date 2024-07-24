"use client";
import React, { useState, useRef} from "react";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Tabs from "./components/tabs";
import Timer from "./components/timer";
import Modal from "@mui/joy/Modal";
import Link from '@mui/joy/Link';
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import CustomWebcam from "./components/CustomWebcam";
import Divider from '@mui/joy/Divider';
import DialogActions from '@mui/joy/DialogActions';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
export default function Home() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  const [flag2, setFlag2] = React.useState(true);

  const handleClick2 = () => {
    setFlag2(!flag2);
  };
  const [flag3, setFlag3] = React.useState(true);

  const handleClick3 = () => {
    setFlag3(!flag3);
  };
  const [flag4, setFlag4] = React.useState(true);

  const handleClick4 = () => {
    setFlag4(!flag4);
  };
  const [flag5, setFlag5] = React.useState(true);

  const handleClick5 = () => {
    setFlag5(!flag5);
  };
  const [flag6, setFlag6] = React.useState(true);

  const handleClick6 = () => {
    setFlag6(!flag6);
  };
  const [flag7, setFlag7] = React.useState(true);

  const handleClick7 = () => {
    setFlag7(!flag7);
  };
  const [flag8, setFlag8] = React.useState(true);

  const handleClick8 = () => {
    setFlag8(!flag8);
  };
  const [flag9, setFlag9] = React.useState(true);

  const handleClick9 = () => {
    setFlag9(!flag9);
  };
  const [flag10, setFlag10] = React.useState(true);

  const handleClick10 = () => {
    setFlag10(!flag10);
  };
  const [flag11, setFlag11] = React.useState(true);

  const handleClick11 = () => {
    setFlag11(!flag11);
  };
  const [flag12, setFlag12] = React.useState(true);

  const handleClick12 = () => {
    setFlag12(!flag12);
  };
  const [flag13, setFlag13] = React.useState(true);

  const handleClick13 = () => {
    setFlag13(!flag13);
  };
  const [flag14, setFlag14] = React.useState(true);

  const handleClick14 = () => {
    setFlag14(!flag14);
  };
  const [flag15, setFlag15] = React.useState(true);

  const handleClick15 = () => {
    setFlag15(!flag15);
  };
  const [flag16, setFlag16] = React.useState(true);

  const handleClick16 = () => {
    setFlag16(!flag16);
  };
  const [flag17, setFlag17] = React.useState(true);

  const handleClick17 = () => {
    setFlag17(!flag17);
  };
  const [flag18, setFlag18] = React.useState(true);

  const handleClick18 = () => {
    setFlag18(!flag18);
  };
  const [flag19, setFlag19] = React.useState(true);

  const handleClick19 = () => {
    setFlag19(!flag19);
  };
  const [flag20, setFlag20] = React.useState(true);

  const handleClick20 = () => {
    setFlag20(!flag20);
  };
  const [flag21, setFlag21] = React.useState(true);

  const handleClick21 = () => {
    setFlag21(!flag21);
  };
  const [flag22, setFlag22] = React.useState(true);

  const handleClick22 = () => {
    setFlag22(!flag22);
  };
  const [flag23, setFlag23] = React.useState(true);

  const handleClick23 = () => {
    setFlag23(!flag23);
  };
  const [flag24, setFlag24] = React.useState(true);

  const handleClick24 = () => {
    setFlag24(!flag24);
  };
  const [flag25, setFlag25] = React.useState(true);

  const handleClick25 = () => {
    setFlag25(!flag25);
  };
  const [flag26, setFlag26] = React.useState(true);

  const handleClick26 = () => {
    setFlag26(!flag26);
  };
  const [flag27, setFlag27] = React.useState(true);

  const handleClick27 = () => {
    setFlag27(!flag27);
  };
  const [flag28, setFlag28] = React.useState(true);

  const handleClick28 = () => {
    setFlag28(!flag28);
  };
  const [flag29, setFlag29] = React.useState(true);

  const handleClick29 = () => {
    setFlag29(!flag29);
  };
  const [flag30, setFlag30] = React.useState(true);

  const handleClick30 = () => {
    setFlag30(!flag30);
  };
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
  return (
    <div
      onCopy={(event) => {
        event.preventDefault();
      }}
    >
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={10}>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ m: 0, borderRadius: "lg" }}
          >
            <Tabs />
          </Sheet>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          xs={2}
        >
          <Grid xs={12}>
            <Sheet
              variant="soft"
              color="neutral"
              sx={{
                borderRadius: "lg",
              }}
            >
              <div>
                <CustomWebcam />
              </div>
            </Sheet>
            <br />
            <Sheet
              variant="soft"
              color="neutral"
              sx={{ p: 2, borderRadius: "lg" }}
            >
              <Timer />
            </Sheet>
          </Grid>
          <Grid xs={12}>
            <Sheet
              variant="soft"
              color="neutral"
              sx={{ p: 0.5, borderRadius: "lg" }}
            >
              <Button
                sx={{ m: 1 }}
                onClick={handleClick}
                color={flag ? "primary" : "success"}
              >
                1
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick2}
                color={flag2 ? "primary" : "success"}
              >
                2
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick3}
                color={flag3 ? "primary" : "success"}
              >
                3
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick4}
                color={flag4 ? "primary" : "success"}
              >
                4
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick5}
                color={flag5 ? "primary" : "success"}
              >
                5
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick6}
                color={flag6 ? "primary" : "success"}
              >
                6
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick7}
                color={flag7 ? "primary" : "success"}
              >
                7
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick8}
                color={flag8 ? "primary" : "success"}
              >
                8
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick9}
                color={flag9 ? "primary" : "success"}
              >
                9
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick10}
                color={flag10 ? "primary" : "success"}
              >
                10
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick11}
                color={flag11 ? "primary" : "success"}
              >
                11
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick12}
                color={flag12 ? "primary" : "success"}
              >
                12
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick13}
                color={flag13 ? "primary" : "success"}
              >
                13
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick14}
                color={flag14 ? "primary" : "success"}
              >
                14
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick15}
                color={flag15 ? "primary" : "success"}
              >
                15
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick16}
                color={flag16 ? "primary" : "success"}
              >
                16
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick17}
                color={flag17 ? "primary" : "success"}
              >
                17
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick18}
                color={flag18 ? "primary" : "success"}
              >
                18
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick19}
                color={flag19 ? "primary" : "success"}
              >
                19
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick20}
                color={flag20 ? "primary" : "success"}
              >
                20
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick21}
                color={flag21 ? "primary" : "success"}
              >
                21
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick22}
                color={flag22 ? "primary" : "success"}
              >
                22
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick23}
                color={flag23 ? "primary" : "success"}
              >
                23
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick24}
                color={flag24 ? "primary" : "success"}
              >
                24
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick25}
                color={flag25 ? "primary" : "success"}
              >
                25
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick26}
                color={flag26 ? "primary" : "success"}
              >
                26
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick27}
                color={flag27 ? "primary" : "success"}
              >
                27
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick28}
                color={flag28 ? "primary" : "success"}
              >
                28
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick29}
                color={flag29 ? "primary" : "success"}
              >
                29
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={handleClick30}
                color={flag30 ? "primary" : "success"}
              >
                30
              </Button>
            </Sheet>
          </Grid>
          <Grid xs={12}>
            <Sheet
              variant="soft"
              color="neutral"
              sx={{ p: 0, borderRadius: "lg" }}
              // className="bottom2"
            >
              <React.Fragment>
  
      <Button fullWidth size="lg"     onClick={() => setOpen(true)}>
                Summit Test
              </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to quit the test?
          </DialogContent>
          <DialogActions>
          <Link href="/score">
            <Button variant="solid" color="danger" onClick={() => setOpen(false)}>
            Yes
            </Button>
            </Link>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
           
            </Sheet>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
