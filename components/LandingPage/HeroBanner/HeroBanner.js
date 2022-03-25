import Circle from 'public/assets/HeroBanner/Circle'
import People from 'public/assets/HeroBanner/People';
import styles from './heroBanner.module.css'
const HeroBanner = () => {
    return ( 
        <section className={styles.heroBanner}>
            <div className={styles.left}>
                <h1 className={styles.head}>Mastery Any <br />Language You Desire</h1>
                <p className={styles.content}>You discover a unique travel destination, cultures, cuisine, new people, new movies & music, a wide array of <br />
                 books and literature, and of course, new career opportunities in languages</p>
                 <button className={styles.bannerBtn}>Start For Free</button>
            </div>
            <div className={styles.right}>
                <div className={styles.circle}>
                    <Circle />
                </div>
                <div className={styles.people}>   
                    <People />
                </div>
            </div>
            
        </section>
     );
}
 
export default HeroBanner;