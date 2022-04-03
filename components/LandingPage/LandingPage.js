import styles from './landingPage.module.css'
// components
import HeroBanner from '@/components/LandingPage/HeroBanner/HeroBanner';
import OurServices from '@/components/LandingPage/OurServices/OurServices';
import AboutUs from '@/components/LandingPage/AboutUs/AboutUs';
import ContactUs from '@/components/LandingPage/ContactUs/ContactUs'
import Courses from '@/components/LandingPage/Courses/Courses';
import Navbar from '@/components/LandingPage/Navbar/Navbar';
import Footer from './Footer/footer';
const LandingPage = () => {
    return ( 
        <div className={styles.landingPage}>
                <Navbar />
                <HeroBanner  />
                <div className={styles.container}>
                    <div className='courses'><Courses  /></div>
                    <div className='about'><AboutUs  /></div>
                    <div className='our-services'><OurServices /></div>
                    <div className='contact-us'><ContactUs /></div>
                    <Footer />
                </div>
        </div> );
}
 
export default LandingPage;

