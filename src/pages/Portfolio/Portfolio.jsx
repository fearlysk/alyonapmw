import { useEffect, useRef } from "react";
import gsap from "gsap";
import useWindowDimensions from "../../utils/getWindowDimensions";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import styles from "./Portfolio.module.scss";
import Eyes1 from "../../assets/Portfolio/Eyes/1.png";
import Eyes2 from "../../assets/Portfolio/Eyes/2.png";
import Eyes3 from "../../assets/Portfolio/Eyes/3.png";
import Eyes4 from "../../assets/Portfolio/Eyes/4.png";
import Eyes5 from "../../assets/Portfolio/Eyes/5.png";
import Eyes6 from "../../assets/Portfolio/Eyes/6.png";
import Eyes7 from "../../assets/Portfolio/Eyes/7.png";
import Eyes8 from "../../assets/Portfolio/Eyes/8.png";
import Eyes9 from "../../assets/Portfolio/Eyes/9.png";
import Eyes10 from "../../assets/Portfolio/Eyes/10.png";
import Eyes11 from "../../assets/Portfolio/Eyes/11.png";
import Eyes12 from "../../assets/Portfolio/Eyes/12.png";
import Brows1 from "../../assets/Portfolio/Brows/1.png";
import Brows2 from "../../assets/Portfolio/Brows/2.png";
import Brows3 from "../../assets/Portfolio/Brows/3.png";
import Brows4 from "../../assets/Portfolio/Brows/4.png";
import Brows5 from "../../assets/Portfolio/Brows/5.png";
import Brows6 from "../../assets/Portfolio/Brows/6.png";
import Brows7 from "../../assets/Portfolio/Brows/7.png";
import Brows8 from "../../assets/Portfolio/Brows/8.png";
import Brows9 from "../../assets/Portfolio/Brows/9.png";
import Brows10 from "../../assets/Portfolio/Brows/10.png";
import Brows11 from "../../assets/Portfolio/Brows/11.png";
import Brows12 from "../../assets/Portfolio/Brows/12.png";
import Lips1 from "../../assets/Portfolio/Lips/1.png";
import Lips2 from "../../assets/Portfolio/Lips/2.png";
import Lips3 from "../../assets/Portfolio/Lips/3.png";
import Lips4 from "../../assets/Portfolio/Lips/4.png";
import Lips5 from "../../assets/Portfolio/Lips/5.png";
import Lips6 from "../../assets/Portfolio/Lips/6.png";
import Lips7 from "../../assets/Portfolio/Lips/7.png";
import Lips8 from "../../assets/Portfolio/Lips/8.png";
import Lips9 from "../../assets/Portfolio/Lips/9.png";
import Lips10 from "../../assets/Portfolio/Lips/10.png";
import Lips11 from "../../assets/Portfolio/Lips/11.png";
import Lips12 from "../../assets/Portfolio/Lips/12.png";
import MiniTattoo1 from "../../assets/Portfolio/MiniTattoo/1.png";
import MiniTattoo2 from "../../assets/Portfolio/MiniTattoo/2.png";
import MiniTattoo3 from "../../assets/Portfolio/MiniTattoo/3.png";
import MiniTattoo4 from "../../assets/Portfolio/MiniTattoo/4.png";
import MiniTattoo5 from "../../assets/Portfolio/MiniTattoo/5.png";
import MiniTattoo6 from "../../assets/Portfolio/MiniTattoo/6.png";
import MiniTattoo7 from "../../assets/Portfolio/MiniTattoo/7.png";
import MiniTattoo8 from "../../assets/Portfolio/MiniTattoo/8.png";
import MiniTattoo9 from "../../assets/Portfolio/MiniTattoo/9.png";
import Removal1 from "../../assets/Portfolio/Removal/1.png";
import Removal2 from "../../assets/Portfolio/Removal/2.png";
import Removal3 from "../../assets/Portfolio/Removal/3.png";
import Removal4 from "../../assets/Portfolio/Removal/4.png";
import Removal5 from "../../assets/Portfolio/Removal/5.png";
import Removal6 from "../../assets/Portfolio/Removal/6.png";
import Students from "../../assets/Portfolio/students.png";

const Portfolio = () => {

    const { width } = useWindowDimensions();

    const setImgWidth = () => {
        let imgWidth;
        if (width > 2100) {
            imgWidth = 350;
        } 
        if (width > 630 && width <= 2100) {
            imgWidth = 260;
        }
        if (width > 349 && width <= 630) {
            imgWidth = 140;
        }
        if (width > 200 && width <= 349) {
            imgWidth = 100;
        }
        return imgWidth;
      }

      const Portfolio = useRef(null);

        useEffect(() => {
        let ctx = gsap.context(() => {

        gsap.from("#portfolio", {
            x: -300,
            opacity: 0,
            ease: "power3",
            duration: 1,
        })

      }, Portfolio);

      return () => ctx.revert();
    }, [])


    return (
        <div className={styles.wrapper} ref={Portfolio}>
            <div className={styles.main}>
                <div id="portfolio" className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText}>ПОРТФОЛИО</h1>
                    </div>
                    <div className={styles.main__content}>
                        <div className={styles.main__contentSection}>
                            <h1 className={styles.main__contentSectionHeadline}>ГЛАЗА</h1>
                            <div className={styles.main__contentSectionItems}>
                                <img src={Eyes1} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes2} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes3} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes4} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes5} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes6} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes7} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes8} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes9} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes10} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes11} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Eyes12} draggable="false" width={setImgWidth()} alt="" />
                            </div>
                        </div>
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <div className={styles.main__contentSection}>
                            <h1 className={styles.main__contentSectionHeadline}>БРОВИ</h1>
                            <div className={styles.main__contentSectionItems}>
                                <img src={Brows1} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows2} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows3} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows4} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows5} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows6} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows7} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows8} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows9} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows10} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows11} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Brows12} draggable="false" width={setImgWidth()} alt="" />
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                        <div className={styles.main__contentSection}>
                            <h1 className={styles.main__contentSectionHeadline}>ГУБЫ</h1>
                            <div className={styles.main__contentSectionItems}>
                                <img src={Lips1} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips2} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips3} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips4} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips5} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips6} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips7} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips8} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips9} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips10} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips11} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Lips12} draggable="false" width={setImgWidth()} alt="" />
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                        <div className={styles.main__contentSection}>
                            <h1 className={styles.main__contentSectionHeadline}>МИНИ-ТАТУ</h1>
                            <div className={styles.main__contentSectionItemsTattoo}>
                                <img src={MiniTattoo1} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo2} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo3} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo4} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo5} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo6} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo7} draggable="false" width={setImgWidth()} alt="" />
                                <img src={MiniTattoo8} draggable="false" width={setImgWidth()} alt="" />
                                <img className={styles.tattooLast} src={MiniTattoo9} width={setImgWidth()} alt="" />
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <div className={styles.main__contentSection}>
                            <h1 className={styles.main__contentSectionHeadline}>REMOVAL</h1>
                            <div className={styles.main__contentSectionItemsRemoval}>
                                <img src={Removal1} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Removal2} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Removal3} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Removal4} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Removal5} draggable="false" width={setImgWidth()} alt="" />
                                <img src={Removal6} draggable="false" width={setImgWidth()} alt="" />
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <div className={styles.main__contentStudent}>
                        <div className={styles.main__blockHeadlineStudent}>
                            <h1 className={styles.main__blockHeadlineText}>РАБОТЫ СТУДЕНТОВ</h1>
                        </div>
                        <div className={styles.main__contentStudentItems}>
                            <img src={Students} draggable="false" className={styles.students} alt="" />
                        </div>
                    </div>
                    </ScrollAnimation>
                    <div className={styles.applicationFormWrapper}>
                    <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                    <section className={styles.applicationForm} aria-labelledby="form">
                        <div className={styles.applicationForm__block}>
                            <div className={styles.applicationForm__content}>
                                <div className={styles.applicationForm__contentHeadline}>
                                    <h1 className={styles.applicationForm__contentHeadlineText}>ЗАПОЛНИТЕ ФОРМУ,</h1>
                                    <p className={styles.applicationForm__contentHeadlineSubText}>чтобы оставить заявку на курс</p>
                                </div>
                                <form className={styles.applicationForm__contentForm}>
                                    <div className={styles.applicationForm__contentFormInputs}>
                                        <input className={styles.applicationForm__contentFormInput} type="text" placeholder=" &#x1F464;  Ваше имя" />
                                        <input className={styles.applicationForm__contentFormInput} type="phonenumber" placeholder=" &#x260E;  Ваш номер телефона" />
                                        <input className={styles.applicationForm__contentFormInput} type="text" placeholder=" &#x1F5E8;  Комментарий" />
                                    </div>
                                    <div className={styles.applicationForm__contentFormBtnWrapper}>
                                        <button className={styles.applicationForm__contentFormBtn}>Оставить заявку</button>
                                    </div>
                                    <div className={styles.applicationForm__contentFormCheckboxWrapper}>
                                        <input type="checkbox" className={styles.applicationForm__contentFormCheckbox} id="privacy_policy" name="privacy_policy" value="yes" />
                                        <label className={styles.applicationForm__contentFormCheckboxLabel} htmlFor="privacy_policy">Я принимаю условия обработки персональных данных.</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
