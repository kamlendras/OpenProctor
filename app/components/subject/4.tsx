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
              <Typography level="title-lg">{Test.subject4.q1}</Typography>
              <center>
                <img
                  src={Test.subject4.image1}
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
                      label={Test.subject4.optiona1}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb1}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc1}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond1}
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
              <Typography level="title-lg">{Test.subject4.q2}</Typography>
              <center>
                <img
                  src={Test.subject4.image2}
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
                      label={Test.subject4.optiona2}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb2}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc2}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond2}
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
              <Typography level="title-lg">{Test.subject4.q3}</Typography>
              <center>
                <img
                  src={Test.subject4.image3}
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
                      label={Test.subject4.optiona3}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb3}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc3}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond3}
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
              <Typography level="title-lg">{Test.subject4.q4}</Typography>
              <center>
                <img
                  src={Test.subject4.image4}
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
                      label={Test.subject4.optiona4}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb4}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc4}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond4}
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
              <Typography level="title-lg">{Test.subject4.q5}</Typography>
              <center>
                <img
                  src={Test.subject4.image5}
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
                      label={Test.subject4.optiona5}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb5}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc5}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond5}
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
              <Typography level="title-lg">{Test.subject4.q6}</Typography>
              <center>
                <img
                  src={Test.subject4.image6}
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
                      label={Test.subject4.optiona6}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb6}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc6}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond6}
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
              <Typography level="title-lg">{Test.subject4.q7}</Typography>
              <center>
                <img
                  src={Test.subject4.image7}
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
                      label={Test.subject4.optiona7}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb7}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc7}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond7}
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
              <Typography level="title-lg">{Test.subject4.q8}</Typography>
              <center>
                <img
                  src={Test.subject4.image8}
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
                      label={Test.subject4.optiona8}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb8}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc8}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond8}
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
              <Typography level="title-lg">{Test.subject4.q9}</Typography>
              <center>
                <img
                  src={Test.subject4.image9}
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
                      label={Test.subject4.optiona9}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb9}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc9}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond9}
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
              <Typography level="title-lg">{Test.subject4.q10}</Typography>
              <center>
                <img
                  src={Test.subject4.image10}
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
                      label={Test.subject4.optiona10}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb10}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc10}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond10}
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
              <Typography level="title-lg">{Test.subject4.q11}</Typography>
              <center>
                <img
                  src={Test.subject4.image11}
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
                      label={Test.subject4.optiona11}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb11}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc11}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond11}
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
              <Typography level="title-lg">{Test.subject4.q12}</Typography>
              <center>
                <img
                  src={Test.subject4.image12}
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
                      label={Test.subject4.optiona12}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb12}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc12}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond12}
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
              <Typography level="title-lg">{Test.subject4.q13}</Typography>
              <center>
                <img
                  src={Test.subject4.image13}
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
                      label={Test.subject4.optiona13}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb13}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc13}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond13}
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
              <Typography level="title-lg">{Test.subject4.q14}</Typography>
              <center>
                <img
                  src={Test.subject4.image14}
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
                      label={Test.subject4.optiona14}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb14}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc14}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond14}
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
              <Typography level="title-lg">{Test.subject4.q15}</Typography>
              <center>
                <img
                  src={Test.subject4.image15}
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
                      label={Test.subject4.optiona15}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb15}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc15}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond15}
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
              <Typography level="title-lg">{Test.subject4.q16}</Typography>
              <center>
                <img
                  src={Test.subject4.image16}
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
                      label={Test.subject4.optiona16}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb16}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc16}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond16}
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
              <Typography level="title-lg">{Test.subject4.q17}</Typography>
              <center>
                <img
                  src={Test.subject4.image17}
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
                      label={Test.subject4.optiona17}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb17}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc17}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond17}
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
              <Typography level="title-lg">{Test.subject4.q18}</Typography>
              <center>
                <img
                  src={Test.subject4.image18}
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
                      label={Test.subject4.optiona18}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb18}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc18}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond18}
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
              <Typography level="title-lg">{Test.subject4.q19}</Typography>
              <center>
                <img
                  src={Test.subject4.image19}
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
                      label={Test.subject4.optiona19}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb19}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc19}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond19}
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
              <Typography level="title-lg">{Test.subject4.q20}</Typography>
              <center>
                <img
                  src={Test.subject4.image20}
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
                      label={Test.subject4.optiona20}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb20}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc20}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond20}
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
              <Typography level="title-lg">{Test.subject4.q21}</Typography>
              <center>
                <img
                  src={Test.subject4.image21}
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
                      label={Test.subject4.optiona21}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb21}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc21}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond21}
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
              <Typography level="title-lg">{Test.subject4.q22}</Typography>
              <center>
                <img
                  src={Test.subject4.image22}
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
                      label={Test.subject4.optiona22}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb22}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc22}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond22}
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
              <Typography level="title-lg">{Test.subject4.q23}</Typography>
              <center>
                <img
                  src={Test.subject4.image23}
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
                      label={Test.subject4.optiona23}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb23}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc23}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond23}
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
              <Typography level="title-lg">{Test.subject4.q24}</Typography>
              <center>
                <img
                  src={Test.subject4.image24}
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
                      label={Test.subject4.optiona24}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb24}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc24}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond24}
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
              <Typography level="title-lg">{Test.subject4.q25}</Typography>
              <center>
                <img
                  src={Test.subject4.image25}
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
                      label={Test.subject4.optiona25}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb25}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc25}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond25}
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
              <Typography level="title-lg">{Test.subject4.q26}</Typography>
              <center>
                <img
                  src={Test.subject4.image26}
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
                      label={Test.subject4.optiona26}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb26}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc26}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond26}
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
              <Typography level="title-lg">{Test.subject4.q27}</Typography>
              <center>
                <img
                  src={Test.subject4.image27}
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
                      label={Test.subject4.optiona27}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb27}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc27}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond27}
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
              <Typography level="title-lg">{Test.subject4.q28}</Typography>
              <center>
                <img
                  src={Test.subject4.image28}
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
                      label={Test.subject4.optiona28}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb28}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc28}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond28}
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
              <Typography level="title-lg">{Test.subject4.q29}</Typography>
              <center>
                <img
                  src={Test.subject4.image29}
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
                      label={Test.subject4.optiona29}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb29}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc29}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond29}
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
              <Typography level="title-lg">{Test.subject4.q30}</Typography>
              <center>
                <img
                  src={Test.subject4.image30}
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
                      label={Test.subject4.optiona30}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="2"
                      label={Test.subject4.optionb30}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="3"
                      label={Test.subject4.optionc30}
                      variant="outlined"
                      size="lg"
                    />
                    <Radio
                      value="4"
                      label={Test.subject4.optiond30}
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