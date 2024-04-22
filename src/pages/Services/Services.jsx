import styles from "./Services.module.scss";
import Eyes from "../../assets/Services/eyes.png";
import Brows from "../../assets/Services/brows.png";
import Lips from "../../assets/Services/lips.png";
import Other from "../../assets/Services/other.png";

const Services = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText}>УСЛУГИ</h1>
                       <p className={styles.main__blockHeadlineSubText}>Permanent Makeup в техниках:</p>
                    </div>
                    <div className={styles.main__content}>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>ГЛАЗА</h1>
                                    <p className={styles.main__contentItemTextContent}>- Softliner</p>
                                    <p className={styles.main__contentItemTextContent}>- Classic Liner</p>
                                    <p className={styles.main__contentItemTextContent}>- Stardust</p>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Eyes} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>БРОВИ</h1>
                                    <p className={styles.main__contentItemTextContent}>- Magic shading</p>
                                    <p className={styles.main__contentItemTextContent}>- Hairstrokes </p>
                                    <p className={styles.main__contentItemTextContent}>- Cover Up</p>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Brows} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>ГУБЫ</h1>
                                    <p className={styles.main__contentItemTextContent}>- Aquarelle Lips</p>
                                    <p className={styles.main__contentItemTextContent}>- Superbright Lips</p>
                                    <p className={styles.main__contentItemTextContent}>- 3D Lipstick</p>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Lips} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>ДРУГОЕ</h1>
                                    <p className={styles.main__contentItemTextContent}>- Minitattoo</p>
                                    <p className={styles.main__contentItemTextContent}>- Removal</p>
                                    <p className={styles.main__contentItemTextContent}>- Lash Lift</p>
                                    <p className={styles.main__contentItemTextContent}>- Browsculpt <br/>Lamination</p>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Other} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default Services;
