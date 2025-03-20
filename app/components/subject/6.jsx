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

                            <Typography level="h3" >{Test.subject6.q1}</Typography>
                            <center>  <img src={Test.subject6.image1} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona1} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb1} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc1} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond1} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q2}</Typography>
                            <center>  <img src={Test.subject6.image2} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona2} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb2} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc2} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond2} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q3}</Typography>
                            <center>  <img src={Test.subject6.image3} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona3} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb3} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc3} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond3} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q4}</Typography>
                            <center>  <img src={Test.subject6.image4} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona4} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb4} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc4} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond4} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q5}</Typography>
                            <center>  <img src={Test.subject6.image5} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona5} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb5} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc5} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond5} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q6}</Typography>
                            <center>  <img src={Test.subject6.image6} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona6} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb6} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc6} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond6} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q7}</Typography>
                            <center>  <img src={Test.subject6.image7} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona7} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb7} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc7} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond7} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q8}</Typography>
                            <center>  <img src={Test.subject6.image8} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona8} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb8} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc8} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond8} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q9}</Typography>
                            <center>  <img src={Test.subject6.image9} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona9} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb9} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc9} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond9} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q10}</Typography>
                            <center>  <img src={Test.subject6.image10} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona10} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb10} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc10} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond10} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q11}</Typography>
                            <center>  <img src={Test.subject6.image11} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona11} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb11} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc11} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond11} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q12}</Typography>
                            <center>  <img src={Test.subject6.image12} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona12} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb12} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc12} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond12} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q13}</Typography>
                            <center>  <img src={Test.subject6.image13} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona13} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb13} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc13} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond13} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q14}</Typography>
                            <center>  <img src={Test.subject6.image14} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona14} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb14} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc14} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond14} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q15}</Typography>
                            <center>  <img src={Test.subject6.image15} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona15} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb15} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc15} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond15} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q16}</Typography>
                            <center>  <img src={Test.subject6.image16} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona16} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb16} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc16} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond16} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q17}</Typography>
                            <center>  <img src={Test.subject6.image17} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona17} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb17} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc17} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond17} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q18}</Typography>
                            <center>  <img src={Test.subject6.image18} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona18} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb18} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc18} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond18} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q19}</Typography>
                            <center>  <img src={Test.subject6.image19} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona19} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb19} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc19} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond19} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q20}</Typography>
                            <center>  <img src={Test.subject6.image20} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona20} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb20} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc20} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond20} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q21}</Typography>
                            <center>  <img src={Test.subject6.image21} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona21} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb21} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc21} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond21} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q22}</Typography>
                            <center>  <img src={Test.subject6.image22} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona22} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb22} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc22} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond22} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q23}</Typography>
                            <center>  <img src={Test.subject6.image23} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona23} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb23} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc23} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond23} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q24}</Typography>
                            <center>  <img src={Test.subject6.image24} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona24} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb24} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc24} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond24} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q25}</Typography>
                            <center>  <img src={Test.subject6.image25} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona25} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb25} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc25} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond25} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q26}</Typography>
                            <center>  <img src={Test.subject6.image26} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona26} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb26} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc26} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond26} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q27}</Typography>
                            <center>  <img src={Test.subject6.image27} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona27} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb27} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc27} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond27} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q28}</Typography>
                            <center>  <img src={Test.subject6.image28} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona28} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb28} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc28} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond28} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q29}</Typography>
                            <center>  <img src={Test.subject6.image29} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona29} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb29} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc29} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond29} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject6.q30}</Typography>
                            <center>  <img src={Test.subject6.image30} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject6.optiona30} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject6.optionb30} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject6.optionc30} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject6.optiond30} variant="outlined" size="lg" />

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