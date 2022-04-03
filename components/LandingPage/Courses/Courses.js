import styles from './courses.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useState,useEffect } from 'react';
import { Typography } from '@mui/material';
import {ButtonGroup} from '@/components/Slider/Slider'
import {responsive} from '@/components/Slider/Slider'
import { CustomDot } from '@/components/Slider/Slider';

const Courses = () => {
  
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
const items =[
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag1.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag2.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag3.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag1.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag2.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag3.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag1.png'
  },
  {
    language:'french language',
    courseName:'Name of course',
    imgUrl:'/assets/Courses/itembag2.png'
  },
]
   
 
      
    return (
      <div className={styles.courses}>
          <h1 className={styles.heading}>Learn With Us</h1>
          <p className={styles.contnet}>Learning another language is not only learning different words for the same things, but learning another way to think about things.</p>

          <div className={styles.courseSlider}>
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
            deviceType={deviceType}
          >
          {items && items.map((row) =>{
            return <div  key= {row.courseName} className={styles.item}>
                      <img className={styles.itemImage} src={row.imgUrl} alt='imasdadg' />
                      <Typography variant='paragraph' className={styles.language}>{row.language}</Typography>
                      <Typography variant='paragraph' className={styles.courseName}>{row.courseName}</Typography>
                    </div>
          }) }
        </Carousel>
      </div>
      </div> 
    );
}

export default Courses;