import styles from './contactUs.module.css'
import { TextField, Typography,Textarea, Stack ,Button} from '@mui/material';

const ContactUs = () => {
    return (<div className={styles.contactForm}>
        <h1 className={styles.head}>Apply Now</h1>  
        <Stack spacing={4} className={styles.formElement}>
        <TextField variant='outlined' fullWidth size='small' label='Enter Full Name' />
        <TextField variant='outlined' fullWidth size='small' label='Email' />
        <TextField multiline rows={4} maxRows={4} fullWidth size='small' label='Email' />
        <Button variant='contained' className={styles.submit}> Send</Button>
        </Stack>
    </div>  );
}
 
export default ContactUs;