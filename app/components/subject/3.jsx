import React, { useState, useRef, ChangeEvent } from "react";
import Button from "@mui/joy/Button";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../page.module.css';
import Test from "../../../test.json"
import { Pagination, Navigation } from 'swiper/modules';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
export default function TypographyHeadline() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };



    return (
        <>

            <div className='bottom'>
                <Button className="swiper-button image-swiper-button-next" size="lg">SAVE & NEXT</Button>
                <Button sx={{ ml: 2 }} size="lg" color="neutral" variant="solid">
                    CLEAR
                </Button>
                <Button sx={{ ml: 2 }} size="lg" color="warning" className="swiper-button image-swiper-button-next">
                    SAVE & MARK FOR REVIEW
                </Button>
                <Button className="swiper-button image-swiper-button-next" sx={{ ml: 2 }} size="lg" color="success">
                    MARK FOR REVIEW & NEXT
                </Button>
                <span className='down'><Button className="swiper-button image-swiper-button-prev" size="lg" sx={{ ml: 50 }} startDecorator={<ArrowBackIosRoundedIcon />}>BACK </Button>
                </span><Button className="swiper-button image-swiper-button-next" size="lg" sx={{ ml: 2 }} endDecorator={<ArrowForwardIosRoundedIcon />}>NEXT </Button>

            </div>
            <>
                <Swiper
                    pagination={pagination}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q1}</Typography>
                            <center>  <img src={Test.subject3.image1} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona1} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb1} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc1} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond1} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q2}</Typography>
                            <center>  <img src={Test.subject3.image2} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona2} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb2} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc2} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond2} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q3}</Typography>
                            <center>  <img src={Test.subject3.image3} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona3} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb3} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc3} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond3} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q4}</Typography>
                            <center>  <img src={Test.subject3.image4} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona4} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb4} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc4} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond4} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q5}</Typography>
                            <center>  <img src={Test.subject3.image5} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona5} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb5} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc5} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond5} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q6}</Typography>
                            <center>  <img src={Test.subject3.image6} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona6} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb6} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc6} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond6} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q7}</Typography>
                            <center>  <img src={Test.subject3.image7} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona7} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb7} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc7} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond7} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q8}</Typography>
                            <center>  <img src={Test.subject3.image8} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona8} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb8} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc8} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond8} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q9}</Typography>
                            <center>  <img src={Test.subject3.image9} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona9} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb9} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc9} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond9} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q10}</Typography>
                            <center>  <img src={Test.subject3.image10} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona10} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb10} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc10} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond10} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q11}</Typography>
                            <center>  <img src={Test.subject3.image11} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona11} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb11} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc11} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond11} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q12}</Typography>
                            <center>  <img src={Test.subject3.image12} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona12} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb12} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc12} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond12} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q13}</Typography>
                            <center>  <img src={Test.subject3.image13} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona13} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb13} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc13} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond13} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q14}</Typography>
                            <center>  <img src={Test.subject3.image14} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona14} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb14} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc14} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond14} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q15}</Typography>
                            <center>  <img src={Test.subject3.image15} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona15} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb15} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc15} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond15} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q16}</Typography>
                            <center>  <img src={Test.subject3.image16} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona16} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb16} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc16} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond16} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q17}</Typography>
                            <center>  <img src={Test.subject3.image17} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona17} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb17} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc17} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond17} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q18}</Typography>
                            <center>  <img src={Test.subject3.image18} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona18} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb18} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc18} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond18} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q19}</Typography>
                            <center>  <img src={Test.subject3.image19} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona19} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb19} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc19} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond19} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q20}</Typography>
                            <center>  <img src={Test.subject3.image20} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona20} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb20} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc20} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond20} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q21}</Typography>
                            <center>  <img src={Test.subject3.image21} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona21} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb21} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc21} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond21} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q22}</Typography>
                            <center>  <img src={Test.subject3.image22} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona22} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb22} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc22} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond22} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q23}</Typography>
                            <center>  <img src={Test.subject3.image23} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona23} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb23} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc23} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond23} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q24}</Typography>
                            <center>  <img src={Test.subject3.image24} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona24} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb24} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc24} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond24} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q25}</Typography>
                            <center>  <img src={Test.subject3.image25} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona25} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb25} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc25} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond25} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q26}</Typography>
                            <center>  <img src={Test.subject3.image26} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona26} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb26} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc26} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond26} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q27}</Typography>
                            <center>  <img src={Test.subject3.image27} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona27} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb27} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc27} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond27} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q28}</Typography>
                            <center>  <img src={Test.subject3.image28} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona28} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb28} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc28} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond28} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q29}</Typography>
                            <center>  <img src={Test.subject3.image29} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona29} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb29} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc29} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond29} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject3.q30}</Typography>
                            <center>  <img src={Test.subject3.image30} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject3.optiona30} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject3.optionb30} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject3.optionc30} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject3.optiond30} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                </Swiper>
            </>
        </>

    );
}