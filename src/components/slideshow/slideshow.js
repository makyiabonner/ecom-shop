import styles from '../slideshow/slideshow.module.scss';
import { Carousel } from 'react-bootstrap';

export default function Slideshow(){
    return (
        <Carousel>
            <Carousel.Item>
                <div className={styles.slide1}>
                    <container className={styles.container}>
                        <section className={styles.section}>
                            <h1 className={styles.carouselHeaderSmallSlide1}>UP TO</h1>
                            <h1 className={styles.carouselHeaderSlide1}>20% OFF</h1>
                            <p className={styles.pSlide1}>PRICES AS MARKED | NO CODE NEEDED</p>
                        </section>
                        <button className={styles.buttonSlide1}>SHOP NOW</button>
                    </container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.slide2}>
                    <section className={styles.section}>
                        <h1 className={styles.carouselHeaderSmallSlide2}>JEWELERY</h1>
                        <h1 className={styles.carouselHeaderSlide2}>70% OFF </h1>
                        <p className={styles.pSlide2}>PRICES AS MARKED | NO CODE NEEDED</p>
                    </section>
                    <button className={styles.buttonSlide2}>SHOP NOW</button>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}