import styles from './navbar.module.css';

import {Link} from 'react-scroll';
import Image from "next/image";
// logo
import companyLogo from 'public/assets/Logos/logo.png'
import { Drawer, Stack } from '@mui/material';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';

const drawerWidth = 250;
const navLinks =[
    {
        name:'About',
        link:'about'
    },
    {
        name:'Courses',
        link:'courses'
    },
    {
        name:'Our Services',
        link:'our-services'
    },
    {
        name:'Contact Us',
        link:'contact-us'
    }
]

const drawer = (
        <Stack className={styles.drawer} spacing={3}>
            {navLinks.map((row) =>{
            if(row.link == 'contact-us')
            return <li key={row.link} className={styles.navButton}><Link activeClass={styles.active} to={row.link} spy={true} smooth={true}>{row.name}</Link></li>
            return <li key={row.link} className={styles.navLink}><Link activeClass={styles.active} to={row.link} spy={true} smooth={true}> {row.name}</Link></li>
        })}
               
        </Stack>
    );
    
    // const container = window !== undefined ? () => window().document.body : undefined;
const Navbar = () => {

    const [mobileOpen,setMobileOpen] =useState(false);
    const drawerToggle =() =>setMobileOpen(!mobileOpen)


    return <nav className={styles.navbar}>

        <div className={styles.left}> 
            <Box sx ={{display: { xs: 'none', sm: 'none',md:'block' }}}>
                <img className={styles.bigImage} src='/assets/Logos/logo.png' />
            </Box>
            <Stack direction='row' alignItems='center' spacing={2} sx ={{display: { xs: 'block', sm: 'block',md:'none' }}}>
            <img className={styles.smallImage} src='/favicon.ico' alt='img'/> 
            <img className={styles.smallImage} src='/assets/Logos/Masterlanguagepoint.png' alt='img' />
            </Stack>
            
        </div>
        <Box sx ={{display: { xs: 'none', sm: 'none',md:'block' }}}>
        <ul className={styles.right}>
        {navLinks.map((row) =>{
            if(row.link == 'contact-us')
            return <li key={row.link} className={styles.navButton}><Link activeClass={styles.active} to={row.link} spy={true} smooth={true}>{row.name}</Link></li>
            return <li key={row.link} className={styles.navLink}><Link activeClass={styles.active} to={row.link} spy={true} smooth={true}> {row.name}</Link></li>
        })}
        </ul>
        </Box>
        <IconButton onClick={drawerToggle} sx ={{display: { xs: 'block', sm: 'block',md:'none' }}}><MenuRoundedIcon /></IconButton>  
        <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={drawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block',md:'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

    </nav>;
}
 
export default Navbar;