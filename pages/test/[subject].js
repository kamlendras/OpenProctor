"use client";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import React, { useState, useRef } from "react";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import Link from "@mui/joy/Link";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import CustomWebcam from "../../components/CustomWebcam";
import Divider from "@mui/joy/Divider";
import DialogActions from "@mui/joy/DialogActions";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import ReactPaginate from "react-paginate";
import QRCode from "react-qr-code";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Test from "../../test.json";
import { Card, Chip } from "@mui/joy";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { questionsData } from "../../data/questions";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { db } from "../../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [layout, setLayout] = React.useState(undefined);
  const router = useRouter();
  const { subject } = router.query;
  const { currentUser } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      return;
    }

    if (subject && questionsData[subject]) {
      setQuestions(questionsData[subject]);
    }
  }, [currentUser, subject]);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitted) return;

    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    try {
      await addDoc(collection(db, "testResults"), {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        subject: subject,
        score: score,
        totalQuestions: questions.length,
        answers: answers,
        timestamp: serverTimestamp(),
      });

      setIsSubmitted(true);

      setTimeout(() => {
        router.push("/dashboard");
      }, 5000);
    } catch (error) {
      console.error("Error saving test result:", error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!currentUser || !questions.length) {
    return <div>Loading...</div>;
  }

  if (isSubmitted) {
    const score = questions.reduce((acc, question) => {
      return answers[question.id] === question.correctAnswer ? acc + 1 : acc;
    }, 0);
    const getScoreColor = (score) => {
      if (score >= 24) return "success";
      if (score >= 18) return "warning";
      return "danger";
    };

    const getScoreMessage = (score) => {
      if (score >= 24) return "Excellent!";
      if (score >= 18) return "Good Job!";
      return "Keep Practicing!";
    };
    return (
      <Box
        sx={{
          maxWidth: "32rem",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            p: 4,
            boxShadow: "md",
          }}
        >
          <Typography level="h1" sx={{ mb: 2 }}>
            Test Completed!
          </Typography>

          <Typography level="h3" sx={{ mb: 2 }}>
            Subject: {subject}
          </Typography>

          <Typography level="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Your Score: {score}/30 ({Math.round((score / 30) * 100)}%)
          </Typography>

          <Chip
            color={getScoreColor(score)}
            size="lg"
            variant="soft"
            sx={{ mb: 2 }}
          >
            {getScoreMessage(score)}
          </Chip>

          <Typography level="body-md" color="neutral" sx={{ mt: 2 }}>
            Redirecting to dashboard in 5 seconds...
          </Typography>
        </Card>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

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
            <Tabs
              variant="soft"
              aria-label="Scrollable tabs"
              defaultValue={0}
              sx={{
                height: "85vh",
                borderRadius: "lg",
                boxShadow: "lg",
                overflow: "auto",
              }}
            >
              <TabList
                disableUnderline
                tabFlex={1}
                sx={{
                  [`&& .${tabClasses.root}`]: {
                    [`&.${tabClasses.selected}`]: {
                      color: "primary.plainColor",
                      "&::after": {
                        height: 3,
                        borderRadius: 8,
                        bgcolor: "primary.500",
                      },
                    },
                  },
                }}
              >
                <Tab>
                  <span className="tab_title">ALL SUBJECTS</span>
                </Tab>
                <Tab disabled>
                  <ListItemDecorator sx={{ mx: 0.01 }}>
                    <img
                      src={Test.subjects.bicon}
                      alt="icon"
                      width="30"
                      height="30"
                    />
                  </ListItemDecorator>
                  <span className="tab_title"> {Test.subjects.b}</span>
                </Tab>
                <Tab disabled>
                  <ListItemDecorator sx={{ mx: 0.01 }}>
                    <img
                      src={Test.subjects.cicon}
                      alt="icon"
                      width="30"
                      height="30"
                    />
                  </ListItemDecorator>
                  <span className="tab_title"> {Test.subjects.c}</span>
                </Tab>
                <Tab disabled>
                  <ListItemDecorator sx={{ mx: 0.01 }}>
                    <img
                      src={Test.subjects.dicon}
                      alt="icon"
                      width="30"
                      height="30"
                    />
                  </ListItemDecorator>
                  <span className="tab_title">{Test.subjects.d}</span>
                </Tab>
                <Tab disabled>
                  <ListItemDecorator sx={{ mx: 0.01 }}>
                    <img
                      src={Test.subjects.eicon}
                      alt="icon"
                      width="30"
                      height="30"
                    />
                  </ListItemDecorator>
                  <span className="tab_title"> {Test.subjects.e}</span>
                </Tab>
                <Tab disabled>
                  <ListItemDecorator sx={{ mx: 0.01 }}>
                    <img
                      src={Test.subjects.ficon}
                      alt="icon"
                      width="30"
                      height="30"
                    />
                  </ListItemDecorator>
                  <span className="tab_title"> {Test.subjects.f}</span>
                </Tab>
                <Tab disabled>
                  <ListItemDecorator sx={{ mx: 0.01 }}>
                    <img
                      src={Test.subjects.gicon}
                      alt="icon"
                      width="30"
                      height="30"
                    />
                  </ListItemDecorator>
                  <span className="tab_title"> {Test.subjects.g}</span>
                </Tab>
              </TabList>
              <TabPanel value={0}>
                <Typography level="h3">{currentQuestion.question}</Typography>
                <center>
                  <img
                    src={currentQuestion.image}
                    alt="."
                    onerror="this.style.display='none'"
                    className="img"
                    width="500"
                    height="300"
                  />
                </center>
                <div className="bottom">
                  {currentQuestion.options.map((option, index) => (
                    <RadioGroup
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors cursor-pointer block ${
                        answers[currentQuestion.id] === index
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Typography level="h1">
                        <Radio
                          size="lg"
                          label={option}
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={index}
                          checked={answers[currentQuestion.id] === index}
                          onChange={() =>
                            handleAnswerSelect(currentQuestion.id, index)
                          }
                          className="mr-3"
                        />
                      </Typography>
                    </RadioGroup>
                  ))}

                  <Stack direction="column" spacing={2}>
                    <Stack>
                      <center>
                        {questions.map((_, index) => (
                          <Button
                            key={index}
                            onClick={() => setCurrentQuestionIndex(index)}
                            variant={
                              index === currentQuestionIndex
                                ? "contained"
                                : "outlined"
                            }
                            size="small"
                            sx={{
                              minWidth: 40,
                              width: 40,
                              height: 40,
                              borderRadius: 2,
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              ...(index === currentQuestionIndex && {
                                backgroundColor: "primary.main",
                                color: "primary.contrastText",
                                "&:hover": {
                                  backgroundColor: "primary.dark",
                                },
                              }),
                              ...(index !== currentQuestionIndex &&
                                answers[questions[index].id] !== undefined && {
                                  backgroundColor: "success.light",
                                  color: "success.dark",
                                  borderColor: "success.light",
                                  "&:hover": {
                                    backgroundColor: "success.main",
                                    borderColor: "success.main",
                                  },
                                }),
                              ...(index !== currentQuestionIndex &&
                                answers[questions[index].id] === undefined && {
                                  backgroundColor: "grey.100",
                                  color: "grey.600",
                                  borderColor: "grey.300",
                                  "&:hover": {
                                    backgroundColor: "grey.200",
                                    borderColor: "grey.400",
                                  },
                                }),
                            }}
                          >
                            {index + 1}
                          </Button>
                        ))}
                      </center>
                    </Stack>
                    <Stack
                      direction={{ md: "row", lg: "row" }}
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Stack
                        direction={{ md: "row", lg: "row" }}
                        spacing={{ xs: 1, sm: 1, md: 1 }}
                        sx={{
                          justifyContent: "flex-start",
                          alignItems: "flex-end",
                        }}
                      >
                        <Stack direction="row" spacing={1}>
                          <Button
                            onClick={() =>
                              setCurrentQuestionIndex(
                                Math.min(
                                  questions.length - 1,
                                  currentQuestionIndex + 1
                                )
                              )
                            }
                            className="swiper-button image-swiper-button-next"
                            size="lg"
                            sx={{ whiteSpace: "nowrap" }}
                          >
                            SAVE & NEXT
                          </Button>
                          <Button
                            size="lg"
                            color="neutral"
                            variant="solid"
                            sx={{ whiteSpace: "nowrap" }}
                          >
                            CLEAR
                          </Button>
                        </Stack>
                        <Button
                          onClick={() =>
                            setCurrentQuestionIndex(
                              Math.min(
                                questions.length - 1,
                                currentQuestionIndex + 1
                              )
                            )
                          }
                          size="lg"
                          color="warning"
                          className="swiper-button image-swiper-button-next"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          SAVE & MARK FOR REVIEW
                        </Button>
                        <Button
                          onClick={() =>
                            setCurrentQuestionIndex(
                              Math.min(
                                questions.length - 1,
                                currentQuestionIndex + 1
                              )
                            )
                          }
                          className="swiper-button image-swiper-button-next"
                          size="lg"
                          color="success"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          MARK FOR REVIEW & NEXT
                        </Button>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", gap: 2, whiteSpace: "nowrap" }}
                          className="nav-button"
                        >
                          <Button
                            onClick={() =>
                              setCurrentQuestionIndex(
                                Math.max(0, currentQuestionIndex - 1)
                              )
                            }
                            disabled={currentQuestionIndex === 0}
                            className="swiper-button image-swiper-button-prev"
                            size="lg"
                          >
                            <NavigateBeforeIcon />
                            Back
                          </Button>

                          <Button
                            onClick={() =>
                              setCurrentQuestionIndex(
                                Math.min(
                                  questions.length - 1,
                                  currentQuestionIndex + 1
                                )
                              )
                            }
                            className="swiper-button image-swiper-button-next"
                            size="lg"
                          >
                            Next
                            <NavigateNextIcon />
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              </TabPanel>

              <TabPanel value={1}></TabPanel>

              <TabPanel value={2}></TabPanel>
              <TabPanel value={3}></TabPanel>
              <TabPanel value={4}></TabPanel>
              <TabPanel value={5}></TabPanel>
              <TabPanel value={6}></TabPanel>
            </Tabs>
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
              <span style={{ textAlign: "center" }}>
                <Typography level="h2">{formatTime(timeLeft)}</Typography>
              </span>
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
                  <Typography level="title-md">Email:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md"> {currentUser.email}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Roll No:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {/* {Test.user.rollnumber} */} N/A
                  </Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">DOB:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  {/* <Typography level="title-md">{Test.user.dob}</Typography> */}{" "}
                  N/A
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">School No:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  {/* <Typography level="title-md">{Test.user.schoolno}</Typography> */}{" "}
                  N/A
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Centre No:</Typography>
                </Grid>
                <Grid xs={7} sm={7}>
                  {/* <Typography level="title-md">{Test.user.centreno}</Typography> */}{" "}
                  N/A
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">{subject}</Typography>
                </Grid>
                <Grid xs={5} sm={12} lg={5}>
                  <Typography level="title-md">Test Duration:</Typography>
                </Grid>
                <Grid xs={7} sm={12} lg={7}>
                  <Typography level="title-md">
                    {/* {Test.user.testduration} */} 30 min
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
                  value={(Math.random() * 10).toString(36).replace(".", "")}
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
                      <Button
                        variant="solid"
                        color="danger"
                        onClick={handleSubmit}
                      >
                        Yes
                      </Button>

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
