import styles from './navbar.module.css';

import {Link} from 'react-scroll';
import Image from "next/image";
// logo
import companyLogo from 'public/assets/Logos/logo.png'


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

const Navbar = () => {
    return <nav className={styles.navbar}>

        <div className={styles.left}> 
            <Image src={companyLogo} width={100} height={130} />
        </div>
        <ul className={styles.right}>
        {navLinks.map((row) =>{
            if(row.link == 'contact-us')
            return <li className={styles.navButton}><Link activeClass={styles.active} to={row.link} spy={true} smooth={true}>{row.name}</Link></li>
            return <li className={styles.navLink}><Link activeClass={styles.active} to={row.link} spy={true} smooth={true}> {row.name}</Link></li>
        })}
            
        </ul>

    </nav>;
}
 
export default Navbar;