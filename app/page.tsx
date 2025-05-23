"use client";
import Typography from "@mui/joy/Typography";
import Tabs from "./components/Tabs";
import React, { useState, useRef } from "react";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Timer from "./components/timer";
import Modal from "@mui/joy/Modal";
import Link from "@mui/joy/Link";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import CustomWebcam from "./components/CustomWebcam";
import Divider from "@mui/joy/Divider";
import DialogActions from "@mui/joy/DialogActions";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
import QRCode from "react-qr-code";
import Test from "../test.json";
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
        <Grid xs={12} sm={10} lg={10}>
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
          xs={12}
          sm={2}
          lg={2}
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
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Name:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">{Test.user.name}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Roll No:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {Test.user.rollnumber}
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">DOB:</Typography>
                </Grid>{" "}
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">{Test.user.dob}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">School No:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">{Test.user.schoolno}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Centre No:</Typography>
                </Grid>
                <Grid xs={7} sm={7}>
                  <Typography level="title-md">{Test.user.centreno}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">{Test.user.test}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test Duration:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {Test.user.testduration}
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test Mode:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md" color="success">
                    {Test.user.testmode}
                  </Typography>
                </Grid>
              </Grid>
            </Sheet>

            <Sheet
              variant="soft"
              color="neutral"
              sx={{ p: 1, m: 2, borderRadius: "lg" }}
            >
              <div style={{ background: "white", padding: "16px" }}>
                <QRCode
                  size={100}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={Test.user.qrsecretcode}
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
            >
              <React.Fragment>
                <Button fullWidth size="lg" onClick={() => setOpen(true)}>
                  Submit Test
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
                        <Button
                          variant="solid"
                          color="danger"
                          onClick={() => setOpen(false)}
                        >
                          Yes
                        </Button>
                      </Link>
                      <Button
                        variant="plain"
                        color="neutral"
                        onClick={() => setOpen(false)}
                      >
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
