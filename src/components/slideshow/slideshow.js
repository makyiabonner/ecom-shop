import styles from '../slideshow/slideshow.module.scss';
import { Carousel } from 'react-bootstrap';
export default function Slideshow(){
    return (
        <Carousel>
            <Carousel.Item>
                <div className={styles.slide0} ></div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.slide1} ></div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.slide2} ></div>
            </Carousel.Item>
        </Carousel>
    )
}