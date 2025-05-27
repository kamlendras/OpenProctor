import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useAuth } from "../contexts/AuthContext";
import Sheet from "@mui/joy/Sheet";
import QRCode from "react-qr-code";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
export default function Dashboard() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function getUserDetails() {
      if (currentUser) {
        try {
          const userDocRef = doc(db, "user", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserDetails(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        } finally {
          setLoading(false);
        }
      }
    }

    getUserDetails();
  }, [currentUser]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {userDetails && (
        <div>
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
                  <Typography level="title-md">
                    {userDetails.username}
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Email:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">{userDetails.email}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Phone No:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {userDetails.phoneNumber}
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Roll No:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {userDetails.roleNumber}
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">DOB:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {userDetails.dateOfBirth}
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">University:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {" "}
                    Sri Balaji Vidyapeeth{" "}
                  </Typography>
                </Grid>

                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md"> Demo Test</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test Duration:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">30 min</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test Mode:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md" color="success">
                    Online
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
                  value={userDetails.uid}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </Sheet>
          </Grid>
        </div>
      )}
    </div>
  );
}
