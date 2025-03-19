import React, { } from "react";
import Button from "@mui/joy/Button";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../page.module.css';

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

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <img src="./1.svg" width="500" height="300" />
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>

                        </Stack>




                    </SwiperSlide >
                    <SwiperSlide >
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide id='3'>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack spacing={2}>

                            <Typography level="h3" >1. The density of a solid ball is to be determined in an experiment. The diameter of the ball is measured with a screw gauge, whose pitch is 0.5 mm and there are 50 divisions on the circular scale. The reading on the main scale is 2.5 mm and that on the circular scale is 20 divisions. If the measured mass of the ball has a relative error of 2%, the relative percentage error in the density is</Typography>
                            <Typography level="h1" sx={{ fontSize: 'xl', mb: 0.5 }}>
                                <FormControl>
                                    <RadioGroup name="radio-buttons-group">
                                        <Radio value="1" label="0.9%" variant="outlined" size="lg" />
                                        <Radio value="2" label="2.4%" variant="outlined" size="lg" />
                                        <Radio value="3" label="3.1%" variant="outlined" size="lg" />
                                        <Radio value="4" label="4.2%" variant="outlined" size="lg" />

                                    </RadioGroup>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                </Swiper>
            </>
        </>

    );
}