import { IconButton } from '@mui/material';
import styles from './Slider.module.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as React from "react";

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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
  export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className={styles.carouselButtonGroup}> 
        <IconButton className={ styles.leftArrow } onClick={() => previous()} sx={{ boxShadow: 3 }} size='small'  ><NavigateBeforeIcon fontSize='large' /></IconButton>
        <IconButton onClick={() => next()} className={styles.rightArrow } sx={{ boxShadow: 3 }} size='small'><ChevronRightIcon fontSize='large'/></IconButton>
      </div>
    );
  };
 
  export  const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
        <div
           className={!active ? styles.dot : `${styles.dotActive} ${styles.dot}`}
          onClick={() => onClick()}
        />
    );
  };