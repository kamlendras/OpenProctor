"use client";
import Typography from '@mui/joy/Typography';
import Tabs from "./components/Tabs"
import React, { useState, useRef, useEffect } from "react";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './globals.css';
import QRCode from 'react-qr-code';

export default function Home() {





  const [open, setOpen] = React.useState<boolean>(false);

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
              <Grid container>
  <Grid xs={5}><Typography level="title-md">Name:</Typography></Grid><Grid xs={7}><Typography level="title-md">Franklin B. McDaniels</Typography></Grid>
  <Grid xs={5}><Typography level="title-md">Roll No:</Typography></Grid><Grid xs={7}><Typography level="title-md">767397348</Typography></Grid>
  <Grid xs={5 }><Typography level="title-md">DOB:</Typography></Grid> <Grid xs={7}><Typography level="title-md">07/16/2002</Typography></Grid>
  <Grid xs={5}><Typography level="title-md">School No:</Typography></Grid><Grid xs={7}><Typography level="title-md">89200</Typography></Grid>
  <Grid xs={5}><Typography level="title-md">Centre No:</Typography></Grid><Grid xs={7}><Typography level="title-md">87382</Typography></Grid>
  <Grid xs={5}><Typography level="title-md">Test:</Typography></Grid><Grid xs={7}><Typography level="title-md">NTC</Typography></Grid>
  <Grid xs={5}><Typography level="title-md">Test Duration:</Typography></Grid><Grid xs={7}><Typography level="title-md">3 hours</Typography></Grid>
  <Grid xs={5}><Typography level="title-md">Test Mode:</Typography></Grid><Grid xs={7}><Typography level="title-md" color="success">Online</Typography></Grid>
  </Grid>
  
            </Sheet>

            <Sheet
              variant="soft"
              color="neutral"
              sx={{ p: 1,m:2, borderRadius: "lg" }}
            >
<div style={{ background: 'white', padding: '16px' }}>

            <QRCode
    size={100}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value="jakjxadcscfs72797394738973947809280198309801232"
    viewBox={`0 0 256 256`}
  />
</div>

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

                <Button fullWidth size="lg" onClick={() => setOpen(true)}>
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


const questions = [
  {
    id: "1",
    subject: 'physics',
    question: "ROYAL MUTTON CHICKEN",
    img: "/food2.jpg",
    optiona: "North Indian",
    optionb: "3.6",
    optionc: "14",
    optiond: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food2.jpg",
    h1: "Pizza",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food3.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },

  {
    img: "/food3.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food5.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food6.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food7.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food8.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food9.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food10.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food2.jpg",
    h1: "Pizza",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food3.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },

  {
    img: "/food3.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food5.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food6.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food7.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food8.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food9.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food10.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
];