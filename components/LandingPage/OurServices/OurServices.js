import styles from './ourServices.module.css'
import Carousel from "react-multi-carousel";
import { useState,useEffect } from 'react';
import "react-multi-carousel/lib/styles.css"
import { Stack, Typography } from '@mui/material';
import {ButtonGroup} from '@/components/Slider/Slider'
import { CustomDot } from '@/components/Slider/Slider';
import { Button } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { Avatar } from '@mui/material';
const ourServices = () => {
  var width;
  const [deviceType,setDeviceType] =useState('');
  if(typeof window !== 'undefined'){
    width =window.innerWidth
  }
  useEffect(() =>{
    setDevice();
  },[width])
  
  const setDevice =() =>{
      if(width >=3000 && width <= 4000){
        setDeviceType('superLargeDesktop');
      }
      if(width >=1024 && width <= 3000){
        setDeviceType('desktop');
      }
      if(width >=564 && width <= 1024){
        setDeviceType('tablet');
      }
      if(width >=0 && width <= 564){
        setDeviceType('mobile');
      }
   
  } 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 564 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 564, min: 0 },
          items: 1
        }
      };
      // for testimonial
      const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 564 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
    return (<div className={styles.ourServices}>
        <h1 className={styles.heading}>Our Services</h1>
        <p className={styles.contnet}>Our classes are taught by dedicated and experienced educators. Using proven teaching strategies, they make sure that every student finds a path to success.</p>
        <div className={styles.ourServiceSlider}>
          <Carousel
            swipeable={true}
            draggable={true} 
            showDots={true}
            arrows={false}
            autoPlaySpeed={5000}
            customButtonGroup={deviceType != 'tablet'&& deviceType != 'mobile' && <ButtonGroup />}
            renderButtonGroupOutside={true}
            customDot={<CustomDot />}
            responsive={responsive}
            ssr
            infinite={true}
            containerClass={styles.carouselContainer}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
          >
          {items && items.map((row) =>{
            return <div >
                      <Button className={styles.item} variant='outlined'>{row.courseName}</Button>
                    </div>
          }) }
        </Carousel>
        </div>
        <div className={styles.belowCarousel}>
          {course && course.map(row =>{
            return <Stack spacing={2} className={styles.courseItem}>
              <img src='/assets/services/courseImage.png' alt='' />
                <Stack direction='row' justifyContent='space-around'>
                  <Stack direction='row' justifyContent='space-around'>
                    <Button startIcon={<StarBorderRoundedIcon />} className={styles.courseRating} >4.5 (56k)</Button>
                  </Stack>
                  <Stack direction='row' justifyContent='space-around'>
                   <Button startIcon={<VideocamOutlinedIcon />} className={styles.courseRating} > 2 Sessions</Button>
                  </Stack>
                  <Stack direction='row' justifyContent='space-around'>
                    <Button startIcon={   <AccessTimeRoundedIcon />} className={styles.courseRating} >8 Hours</Button>
                  </Stack>
                </Stack>
                <h3>French Basic Course</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Stack>
          })}
        </div>
        <div className={styles.testimonial}>
          <h1 className={styles.testimonialHead}> Student <br />Testimonial</h1>
             <Carousel
            swipeable={true}
            showDots={true}
            arrows={false}
            autoPlaySpeed={5000}
            responsive={responsive1}
            customDot={<CustomDot />}
            ssr
            infinite={true}
            containerClass={styles.testmonialCarousel}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
          >
          {items && items.map((row) =>{
            return <div className={styles.Testimonialitem} >
                      <Stack direction='row' spacing={2} >
                          <Avatar alt="Remy Sharp" src="/assets/services/Avatar.png" sx={{ width: 100, height: 100 }} />
                          <Stack spacing={2}>
                            <h2>“Isinya daging semua”</h2>
                            <p className={styles.testiContnet}>Dari beberapa course yang telah saya ikuti, online course dari LEARNEW adalah yang terbaik. Kursus ini sangat membantu saya yang ingin belajar hal-hal baru untuk membantu perkembangan saya kedepannya.</p>
                            <p className={styles.testiName}>Vipul Uthaiah</p>
                          </Stack>
                      </Stack>
                  </div>
          }) }
        </Carousel>
        </div>
       
    </div>  );
}
 
export default ourServices;

const items =[
  {
    courseName:'French Course',
  },
 
  {
    courseName:'English Course',
  },
 
  {
    courseName:'Portuguese Course',
  },
 
  {
    courseName:'German Course',
  }
 
]
const course =[{
  data:''
}]