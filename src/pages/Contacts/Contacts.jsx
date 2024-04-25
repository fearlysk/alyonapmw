import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import http from "../../services/http";
import styles from "./Contacts.module.scss";
import { Link } from "react-router-dom";
import Instagram from "../../assets/Contacts/instagram.png";
import Mail from "../../assets/Contacts/mail.png";
import Phone from "../../assets/Contacts/phone.png";
import Modal from "../../components/Modal/Modal";

const Contacts = () => {

    const Contacts = useRef(null);

    
    const token = process.env.REACT_APP_TOKEN;
    const chatId = process.env.REACT_APP_CHATID;

    const [open, setOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
            const text = `
             Имя: ${name}                                                                                                                                                      
             Телефон: ${phoneNumber}                                                                                                                                                       
             Сообщение: ${message}
           `
            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
            http(url, "GET");
            setName('');
            setPhoneNumber('');
            setMessage('');
            setIsSubmitted(true);
            setOpen(true);
           }
       
           const closeModal = () => {
             setOpen(false);
             setIsSubmitted(false);
           }
       
           const setSubmitted = () => {
             setIsSubmitted(true);
           }
    
        useEffect(() => {
        let ctx = gsap.context(() => {
    
        gsap.from("#contacts", {
            scale: 0.5,
            opacity: 0,
            ease: "power3",
            duration: 1,
        })
    
      }, Contacts);
    
      return () => ctx.revert();
    }, [])

    return (
        <div className={styles.wrapper}>
            <Modal open={open} onClose={closeModal} isSubmitted={isSubmitted} setIsSubmitted={setSubmitted} />
            <div ref={Contacts} className={styles.main}>
                <div id="contacts" className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText} style={{textTransform: "uppercase"}}>Επικοινωνία</h1>
                    </div>
                    <div className={styles.main__content}>
                        <section className={styles.applicationForm} aria-labelledby="form">
                            <div className={styles.applicationForm__block}>
                                <div className={styles.applicationForm__content}>
                                    <div className={styles.applicationForm__contentHeadline}>
                                        <h1 className={styles.applicationForm__contentHeadlineText}>Συμπληρώστε τη φόρμα,</h1>
                                        <p className={styles.applicationForm__contentHeadlineSubText}>για να υποβάλλετε αίτημα ενδιαφέροντος</p>
                                    </div>
                                    <form onSubmit={(e) => sendMessage(e)} className={styles.applicationForm__contentForm}>
                                        <div className={styles.applicationForm__contentFormInputs}>
                                            <input className={styles.applicationForm__contentFormInput}
                                            type="text"
                                            placeholder=" &#x1F464;  Όνομα"
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)} 
                                            />
                                            <input className={styles.applicationForm__contentFormInput}
                                            type="tel"
                                            placeholder=" &#x260E;  Τηλέφωνο"
                                            value={phoneNumber}
                                            required
                                            pattern="^[+\d](?:.*\d)?$"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                            <input className={styles.applicationForm__contentFormInput}
                                            type="text"
                                            placeholder=" &#x1F5E8;  Σχόλιο"
                                            value={message}
                                            required
                                            onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.applicationForm__contentFormBtnWrapper}>
                                            <button type="submit" className={styles.applicationForm__contentFormBtn}>Υποβολή αίτησης</button>
                                        </div>
                                        <div className={styles.applicationForm__contentFormCheckboxWrapper}>
                                            <input type="checkbox" required className={styles.applicationForm__contentFormCheckbox} id="privacy_policy" name="privacy_policy" value="yes" />
                                            <label className={styles.applicationForm__contentFormCheckboxLabel} htmlFor="privacy_policy">Αποδέχομαι τους όρους επεξεργασίας προσωπικών δεδομένων.</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <div className={styles.main__contentContacts}>
                        <Link className={styles.instLink} to="https://www.instagram.com/alyonapopa_pmutrainer" target="_blank">
                            <div className={styles.main__contentContactsItem}>
                                <img src={Instagram} draggable="false" alt="" />
                                <p className={styles.main__contentContactsItemText}>@alyonapopa_pmutrainer</p>
                            </div>
                            </Link>
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