import styles from './courses.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Courses = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (<div className={styles.courses}>
        <h1 className={styles.heading}>Learn With Us</h1>
        <p className={styles.contnet}>Learning another language is not only learning different words for the same things, but learning another way to think about things.</p>
        <div className={styles.courseSlider}>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    </div>  );
}
 
export default Courses;