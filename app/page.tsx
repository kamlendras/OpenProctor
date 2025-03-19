"use client";
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

              something
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