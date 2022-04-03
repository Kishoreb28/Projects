import styles from './aboutUs.module.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutUs = () => {
     const Data =[
        {
            head:'How can i get a Refund',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, libero!'
        },
        {
            head:'Can i use this Design Set on Client sites?',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, libero!'
        },
        {
            head:'How long is the license valid?',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, libero!'
        },
    ];
    const accordian =() =>{
        return (
            <div>{Data && Data.map(row =>{
                return <Accordion key={row.head} disableGutters elevation={0} className={styles.accordian} >
                            <AccordionSummary expandIcon={<ExpandMoreIcon className={styles.downArrow} />}>
                                <Typography>{row.head}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{row.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                })}
            </div>
        )
        
    }
    return (<div className={styles.AboutUs}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.contnet}>Our classes are taught by dedicated and experienced educators. Using proven teaching strategies, they make sure that every student finds a path to success.</p>
        <div className={styles.belowHead}>
          <div className={styles.ourMissionVision}> 
            <div className={styles.left}>
              <h3>Our Mission</h3>
              <p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>
            <div className={styles.right}>
            {accordian()}
            </div>
          </div>
          <div className={styles.ourMissionVision}>
          <div className={styles.left}>
            <h3>Our Vision</h3>
            <p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
          </div>
            <div className={styles.right}>
             {accordian()}
            </div>
        </div>
        </div>
    </div>  );
}
 
export default AboutUs;