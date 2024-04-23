import styles from "./Contacts.module.scss";
import Instagram from "../../assets/Contacts/instagram.png";
import Mail from "../../assets/Contacts/mail.png";
import Phone from "../../assets/Contacts/phone.png";

const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText}>КОНТАКТЫ</h1>
                    </div>
                    <div className={styles.main__content}>
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
                        <div className={styles.main__contentContacts}>
                            <div className={styles.main__contentContactsItem}>
                                <img src={Instagram} draggable="false" alt="" />
                                <p className={styles.main__contentContactsItemText}>@alyonapopa_pmutrainer</p>
                            </div>
                            <div className={styles.main__contentContactsItem}>
                                <img src={Mail} draggable="false" alt="" />
                                <p className={styles.main__contentContactsItemText}>alyona.popa@sviato.academy</p>
                            </div>
                            <div className={styles.main__contentContactsItem}>
                                <img src={Phone} draggable="false" alt="" />
                                <p className={styles.main__contentContactsItemTextNumber}>+30 (699) 40-99-468</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;