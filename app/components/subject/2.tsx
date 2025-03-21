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
        renderBullet: function (index: number, className: string) {
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

                            <Typography level="h3" >{Test.subject2.q1}</Typography>
                            <center>  <img src={Test.subject2.image1} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona1} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb1} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc1} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond1} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q2}</Typography>
                            <center>  <img src={Test.subject2.image2} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona2} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb2} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc2} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond2} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q3}</Typography>
                            <center>  <img src={Test.subject2.image3} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona3} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb3} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc3} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond3} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q4}</Typography>
                            <center>  <img src={Test.subject2.image4} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona4} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb4} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc4} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond4} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q5}</Typography>
                            <center>  <img src={Test.subject2.image5} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona5} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb5} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc5} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond5} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q6}</Typography>
                            <center>  <img src={Test.subject2.image6} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona6} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb6} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc6} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond6} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q7}</Typography>
                            <center>  <img src={Test.subject2.image7} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona7} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb7} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc7} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond7} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q8}</Typography>
                            <center>  <img src={Test.subject2.image8} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona8} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb8} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc8} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond8} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q9}</Typography>
                            <center>  <img src={Test.subject2.image9} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona9} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb9} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc9} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond9} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q10}</Typography>
                            <center>  <img src={Test.subject2.image10} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona10} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb10} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc10} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond10} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q11}</Typography>
                            <center>  <img src={Test.subject2.image11} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona11} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb11} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc11} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond11} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q12}</Typography>
                            <center>  <img src={Test.subject2.image12} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona12} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb12} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc12} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond12} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q13}</Typography>
                            <center>  <img src={Test.subject2.image13} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona13} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb13} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc13} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond13} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q14}</Typography>
                            <center>  <img src={Test.subject2.image14} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona14} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb14} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc14} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond14} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q15}</Typography>
                            <center>  <img src={Test.subject2.image15} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona15} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb15} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc15} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond15} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q16}</Typography>
                            <center>  <img src={Test.subject2.image16} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona16} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb16} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc16} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond16} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q17}</Typography>
                            <center>  <img src={Test.subject2.image17} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona17} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb17} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc17} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond17} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q18}</Typography>
                            <center>  <img src={Test.subject2.image18} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona18} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb18} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc18} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond18} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q19}</Typography>
                            <center>  <img src={Test.subject2.image19} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona19} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb19} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc19} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond19} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q20}</Typography>
                            <center>  <img src={Test.subject2.image20} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona20} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb20} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc20} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond20} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q21}</Typography>
                            <center>  <img src={Test.subject2.image21} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona21} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb21} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc21} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond21} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q22}</Typography>
                            <center>  <img src={Test.subject2.image22} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona22} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb22} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc22} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond22} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q23}</Typography>
                            <center>  <img src={Test.subject2.image23} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona23} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb23} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc23} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond23} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q24}</Typography>
                            <center>  <img src={Test.subject2.image24} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona24} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb24} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc24} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond24} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q25}</Typography>
                            <center>  <img src={Test.subject2.image25} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona25} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb25} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc25} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond25} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q26}</Typography>
                            <center>  <img src={Test.subject2.image26} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona26} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb26} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc26} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond26} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q27}</Typography>
                            <center>  <img src={Test.subject2.image27} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona27} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb27} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc27} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond27} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q28}</Typography>
                            <center>  <img src={Test.subject2.image28} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona28} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb28} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc28} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond28} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q29}</Typography>
                            <center>  <img src={Test.subject2.image29} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona29} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb29} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc29} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond29} variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>
                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >{Test.subject2.q30}</Typography>
                            <center>  <img src={Test.subject2.image30} width="500" height="300" /></center>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label={Test.subject2.optiona30} variant="outlined" size="lg" />
                                        <Radio value="2" label={Test.subject2.optionb30} variant="outlined" size="lg" />
                                        <Radio value="3" label={Test.subject2.optionc30} variant="outlined" size="lg" />
                                        <Radio value="4" label={Test.subject2.optiond30} variant="outlined" size="lg" />

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