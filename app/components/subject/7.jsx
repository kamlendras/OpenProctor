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

                            <Typography level="h3" >{Test.subject7.q1}</Typography>
                            <center>  <img src={Test.subject7.image1} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona1} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb1} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc1} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond1} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q2}</Typography>
                            <center>  <img src={Test.subject7.image2} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona2} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb2} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc2} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond2} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q3}</Typography>
                            <center>  <img src={Test.subject7.image3} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona3} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb3} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc3} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond3} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q4}</Typography>
                            <center>  <img src={Test.subject7.image4} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona4} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb4} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc4} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond4} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q5}</Typography>
                            <center>  <img src={Test.subject7.image5} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona5} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb5} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc5} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond5} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q6}</Typography>
                            <center>  <img src={Test.subject7.image6} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona6} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb6} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc6} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond6} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q7}</Typography>
                            <center>  <img src={Test.subject7.image7} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona7} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb7} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc7} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond7} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q8}</Typography>
                            <center>  <img src={Test.subject7.image8} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona8} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb8} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc8} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond8} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q9}</Typography>
                            <center>  <img src={Test.subject7.image9} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona9} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb9} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc9} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond9} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q10}</Typography>
                            <center>  <img src={Test.subject7.image10} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona10} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb10} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc10} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond10} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q11}</Typography>
                            <center>  <img src={Test.subject7.image11} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona11} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb11} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc11} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond11} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q12}</Typography>
                            <center>  <img src={Test.subject7.image12} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona12} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb12} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc12} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond12} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q13}</Typography>
                            <center>  <img src={Test.subject7.image13} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona13} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb13} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc13} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond13} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q14}</Typography>
                            <center>  <img src={Test.subject7.image14} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona14} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb14} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc14} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond14} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q15}</Typography>
                            <center>  <img src={Test.subject7.image15} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona15} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb15} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc15} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond15} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q16}</Typography>
                            <center>  <img src={Test.subject7.image16} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona16} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb16} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc16} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond16} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q17}</Typography>
                            <center>  <img src={Test.subject7.image17} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona17} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb17} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc17} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond17} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q18}</Typography>
                            <center>  <img src={Test.subject7.image18} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona18} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb18} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc18} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond18} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q19}</Typography>
                            <center>  <img src={Test.subject7.image19} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona19} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb19} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc19} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond19} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q20}</Typography>
                            <center>  <img src={Test.subject7.image20} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona20} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb20} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc20} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond20} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q21}</Typography>
                            <center>  <img src={Test.subject7.image21} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona21} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb21} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc21} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond21} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q22}</Typography>
                            <center>  <img src={Test.subject7.image22} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona22} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb22} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc22} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond22} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q23}</Typography>
                            <center>  <img src={Test.subject7.image23} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona23} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb23} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc23} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond23} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q24}</Typography>
                            <center>  <img src={Test.subject7.image24} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona24} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb24} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc24} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond24} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q25}</Typography>
                            <center>  <img src={Test.subject7.image25} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona25} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb25} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc25} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond25} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q26}</Typography>
                            <center>  <img src={Test.subject7.image26} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona26} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb26} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc26} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond26} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q27}</Typography>
                            <center>  <img src={Test.subject7.image27} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona27} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb27} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc27} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond27} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q28}</Typography>
                            <center>  <img src={Test.subject7.image28} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona28} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb28} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc28} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond28} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q29}</Typography>
                            <center>  <img src={Test.subject7.image29} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona29} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb29} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc29} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond29} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject7.q30}</Typography>
                            <center>  <img src={Test.subject7.image30} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject7.optiona30} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject7.optionb30} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject7.optionc30} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject7.optiond30} variant="outlined" size="lg" />

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