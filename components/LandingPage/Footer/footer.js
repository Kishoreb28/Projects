import { Stack } from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './footer.module.css';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Stack direction={{xs:'column',sm:'column',md:'row'}} justifyContent='space-around' marginTop={20}>
            <Stack className={styles.item} spacing={1}>
                <Typography variant='h6' fontSize={22}>Master Language Point</Typography>
                <Typography variant='paragraph'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.</Typography>
                <Stack direction='row' marginTop={20}>
                    <IconButton><FacebookIcon className={styles.icon} /></IconButton>
                    <IconButton><TwitterIcon className={styles.icon} /></IconButton>
                    <IconButton><LinkedInIcon className={styles.icon} /></IconButton>
                    <IconButton><YouTubeIcon className={styles.icon}/></IconButton>
                    <IconButton><InstagramIcon className={styles.icon}/></IconButton>
                </Stack>
            </Stack>
            <Stack className={styles.item} spacing={1}>
            <Typography variant='h6' fontSize={22}>Our Service</Typography>
            <Typography variant='h6' >Our Mission</Typography>
            <Typography variant='body1'>Our Vision</Typography>
            <Typography variant='body1'>Our Goal</Typography>

            </Stack>
            <div className={styles.item} >
                <Typography variant='h6' fontSize={22}>Reach Us</Typography>
                <Button startIcon={<AlternateEmailIcon  className={styles.icon}/>} className={styles.contact}>masterlanguagepoint@gmail.com</Button>
                <Button startIcon={<PhoneIcon className={styles.icon}/>} className={styles.contact}>6360012969</Button>
            </div>
        </Stack>
    );
}
 
export default Footer;