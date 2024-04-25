import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import http from "../../services/http";
import styles from "./Services.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import Eyes from "../../assets/Services/eyes.png";
import Brows from "../../assets/Services/brows.png";
import Lips from "../../assets/Services/lips.png";
import Other from "../../assets/Services/other.png";
import Modal from "../../components/Modal/Modal";

const Services = () => {

    const Services = useRef(null);

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

    gsap.from("#services", {
        opacity: 0,
        ease: "power3",
        duration: 1,
    })

  }, Services);

  return () => ctx.revert();
}, [])

    return (
        <div className={styles.wrapper}>
            <Modal open={open} onClose={closeModal} isSubmitted={isSubmitted} setIsSubmitted={setSubmitted} />
            <div ref={Services} className={styles.main}>
                <div id="services" className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText} style={{textTransform: "uppercase"}}>Υπηρεσίες</h1>
                       <p className={styles.main__blockHeadlineSubText}>Τεχνικές Permanent Makeup:</p>
                    </div>
                    <div className={styles.main__content}>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>ΜΑΤΙΑ</h1>
                                    <p className={styles.main__contentItemTextContent}>- Softliner</p>
                                    <p className={styles.main__contentItemTextContent}>- Classic Liner</p>
                                    <h6 className={styles.main__contentItemTextContent}>- Stardust</h6>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Eyes} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>ΦΡΥΔΙΑ</h1>
                                    <p className={styles.main__contentItemTextContent}>- Magic shading</p>
                                    <p className={styles.main__contentItemTextContent}>- Hairstrokes </p>
                                    <h6 className={styles.main__contentItemTextContent}>- Cover Up</h6>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Brows} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline}>ΧΕΙΛΗ</h1>
                                    <p className={styles.main__contentItemTextContent}>- Aquarelle Lips</p>
                                    <p className={styles.main__contentItemTextContent}>- Superbright Lips</p>
                                    <h6 className={styles.main__contentItemTextContent}>- 3D Lipstick</h6>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Lips} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                        <div className={styles.main__contentItemWrapper}>
                            <div className={styles.main__contentItem}>
                                <div className={styles.main__contentItemText}>
                                    <h1 className={styles.main__contentItemTextHeadline} style={{textTransform: "uppercase"}}>άλλες</h1>
                                    <p className={styles.main__contentItemTextContent}>- Mini Tattoo</p>
                                    <p className={styles.main__contentItemTextContent}>- Removal</p>
                                    <h6 className={styles.main__contentItemTextContent}>- Lash Lift</h6>
                                    <p className={styles.main__contentItemTextContent}>- Browsculpt <br/>Lamination</p>
                                </div>
                                <div className={styles.main__contentItemImg}>
                                    <img src={Other} draggable="false" width={250} alt="" />
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
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
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Services;
