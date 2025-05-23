import React from "react";
import Button from "@mui/joy/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Test from "../../../test.json";
import { Pagination, Navigation } from "swiper/modules";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Box from "@mui/joy/Box";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function TypographyHeadline() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <>
        <Swiper
          pagination={pagination}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q1}</Typography>
              <center>
                <img
                  src={Test.subject1.image1}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona1}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb1}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc1}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond1}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q2}</Typography>
              <center>
                <img
                  src={Test.subject1.image2}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona2}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb2}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc2}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond2}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q3}</Typography>
              <center>
                <img
                  src={Test.subject1.image3}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona3}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb3}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc3}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond3}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q4}</Typography>
              <center>
                <img
                  src={Test.subject1.image4}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona4}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb4}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc4}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond4}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q5}</Typography>
              <center>
                <img
                  src={Test.subject1.image5}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona5}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb5}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc5}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond5}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q6}</Typography>
              <center>
                <img
                  src={Test.subject1.image6}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona6}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb6}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc6}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond6}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q7}</Typography>
              <center>
                <img
                  src={Test.subject1.image7}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona7}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb7}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc7}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond7}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q8}</Typography>
              <center>
                <img
                  src={Test.subject1.image8}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona8}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb8}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc8}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond8}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q9}</Typography>
              <center>
                <img
                  src={Test.subject1.image9}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona9}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb9}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc9}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond9}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q10}</Typography>
              <center>
                <img
                  src={Test.subject1.image10}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona10}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb10}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc10}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond10}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q11}</Typography>
              <center>
                <img
                  src={Test.subject1.image11}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona11}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb11}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc11}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond11}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q12}</Typography>
              <center>
                <img
                  src={Test.subject1.image12}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona12}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb12}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc12}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond12}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q13}</Typography>
              <center>
                <img
                  src={Test.subject1.image13}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona13}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb13}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc13}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond13}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q14}</Typography>
              <center>
                <img
                  src={Test.subject1.image14}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona14}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb14}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc14}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond14}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q15}</Typography>
              <center>
                <img
                  src={Test.subject1.image15}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona15}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb15}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc15}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond15}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q16}</Typography>
              <center>
                <img
                  src={Test.subject1.image16}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona16}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb16}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc16}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond16}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q17}</Typography>
              <center>
                <img
                  src={Test.subject1.image17}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona17}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb17}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc17}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond17}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q18}</Typography>
              <center>
                <img
                  src={Test.subject1.image18}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona18}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb18}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc18}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond18}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q19}</Typography>
              <center>
                <img
                  src={Test.subject1.image19}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona19}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb19}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc19}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond19}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q20}</Typography>
              <center>
                <img
                  src={Test.subject1.image20}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona20}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb20}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc20}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond20}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q21}</Typography>
              <center>
                <img
                  src={Test.subject1.image21}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona21}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb21}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc21}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond21}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q22}</Typography>
              <center>
                <img
                  src={Test.subject1.image22}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona22}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb22}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc22}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond22}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q23}</Typography>
              <center>
                <img
                  src={Test.subject1.image23}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona23}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb23}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc23}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond23}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q24}</Typography>
              <center>
                <img
                  src={Test.subject1.image24}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona24}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb24}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc24}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond24}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q25}</Typography>
              <center>
                <img
                  src={Test.subject1.image25}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona25}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb25}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc25}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond25}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q26}</Typography>
              <center>
                <img
                  src={Test.subject1.image26}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona26}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb26}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc26}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond26}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q27}</Typography>
              <center>
                <img
                  src={Test.subject1.image27}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona27}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb27}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc27}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond27}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q28}</Typography>
              <center>
                <img
                  src={Test.subject1.image28}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona28}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb28}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc28}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond28}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q29}</Typography>
              <center>
                <img
                  src={Test.subject1.image29}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona29}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb29}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc29}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond29}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack spacing={2}>
              <Typography level="title-lg">{Test.subject1.q30}</Typography>
              <center>
                <img
                  src={Test.subject1.image30}
                  className="img"
                  width="500"
                  height="300"
                />
              </center>
              <Typography level="title-lg">
                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    <Radio
                      value="1"
                      label={Test.subject1.optiona30}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject1.optionb30}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject1.optionc30}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject1.optiond30}
                      variant="outlined"
                      size="lg"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </Stack>
          </SwiperSlide>
        </Swiper>
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
              size="lg"
              color="warning"
              className="swiper-button image-swiper-button-next"
              sx={{ whiteSpace: "nowrap" }}
            >
              SAVE & MARK FOR REVIEW
            </Button>
            <Button
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
                className="swiper-button image-swiper-button-prev"
                size="lg"
              >
                <NavigateBeforeIcon />
                Back
              </Button>

              <Button
                className="swiper-button image-swiper-button-next"
                size="lg"
              >
                Next
                <NavigateNextIcon />
              </Button>
            </Box>
          </Stack>
        </Stack>
      </>
    </>
  );
}
