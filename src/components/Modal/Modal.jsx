import { useEffect, useState, useRef } from 'react';
import gsap from "gsap";
import http from '../../services/http';
import styles from './Modal.module.scss';
import Cross from '../UI/Modal/Cross';

const Modal = (props) => {
    const { open, onClose, isSubmitted, setIsSubmitted } = props;

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    
    const ModalRef = useRef(null);

    useEffect(() => {
        if (open) {
        let ctx = gsap.context(() => {
    
            gsap.from("#modal__card", {
                opacity: 0,
                scale: 0,
                position: "relative",
                bottom: 200,
                ease: "power3",
                duration: 1,
            })
    
          }, ModalRef);
          
          return () => ctx.revert();
        }
        }, [open])
  
    const token = process.env.REACT_APP_TOKEN;
    const chatId = process.env.REACT_APP_CHATID;
    
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
     }

    if (open) {
        return (
            <div ref={ModalRef} className={styles.modal__background}>
                {!isSubmitted ?    
                <div id="modal__card">
                <div className={styles.modal__card}>            
                    <div className={styles.modal__header}>
                        <div className={styles.modal__headerHeadline}>
                            <h3>Το αίτημά σας</h3>
                            <p>Συμπληρώστε τη φόρμα για να αφήσετε αίτημα και θα επικοινωνήσω μαζί σας το συντομότερο δυνατό!</p>
                        </div>
                        <div className={styles.modal__close}>
                            <div className={styles.modal__closeWrapper} onClick={onClose}>
                                <Cross />
                            </div>
                        </div>
                    </div>
                   
                    <div className={styles.modal__content}>
                        
                        <div className={styles.modal__formWrapper}>
                            <form onSubmit={(e) => sendMessage(e)} className={styles.modal__form}>
                                <div className={styles.modal__formInputWrapper}>
                                    <input 
                                     className={styles.modal__input} 
                                     type="text" 
                                     placeholder=" &#9734;  Όνομα"
                                     value={name}
                                     required
                                     onChange={(e) => setName(e.target.value)} 
                                     />
                                </div>
                                <div className={styles.modal__formInputWrapper}>
                                    <input
                                     className={styles.modal__input} 
                                     type="tel" 
                                     required
                                     pattern="^[+\d](?:.*\d)?$"
                                     placeholder=" &#9743;  Τηλέφωνο"
                                     value={phoneNumber}
                                     onChange={(e) => setPhoneNumber(e.target.value)} 
                                     />
                                </div>
                                <div className={styles.modal__formInputWrapper}>
                                    <input 
                                     className={styles.modal__input} 
                                     type="text"
                                     placeholder=" *  Σχόλιο"
                                     value={message}
                                     required
                                     onChange={(e) => setMessage(e.target.value)} 
                                    />
                                </div>
                                <div className={styles.modal__formBtnWrapper}>
                                    <button type="submit" className={styles.modal__btn}>Υποβολή αίτησης</button>
                                </div>
                                <label className={styles.contacts__contentItemFormCheckboxText}>Αποδέχομαι τους όρους επεξεργασίας <span style={{color: "#c4af14", fontWeight: "400"}}>προσωπικών δεδομένων.</span>
                                      <input required type="checkbox" />
                                      <span className={styles.contacts__contentItemFormCheckboxCheckmark}></span>
                                </label>
                            </form> 
                        </div>
                    </div>
                </div>
                </div>
                : 
                <div id="modal__card" className={styles.modal__card}>            
                 <div className={styles.modal__header}>
                     <div className={styles.modal__closeThanks} onClick={onClose}>
                        <div className={styles.modal__closeWrapper} onClick={onClose}>
                            <Cross />
                        </div>
                     </div>
                     <div className={styles.modal__headerHeadline}>
                         <h3>Το αίτημα σας στάλθηκε</h3>
                     </div>
                 </div>
                
                 <div className={styles.modal__content}>
                     <div className={styles.modal__contentThanks}>
                        <p>Ευχαριστώ για το αίτημά σας, σύντομα θα επικοινωνήσω μαζί σας.</p>
                        <p>Μέχρι τότε, σας προσκαλώ να επισκεφτείτε το
                            <a className={styles.modal__contentThanksHighlighted} href="https://www.instagram.com/alyonapopa_pmutrainer" target="_blank" rel="noopener noreferrer">λογαριασμό μου στο Instagram!</a>
                        </p>
                     </div>
                 </div>
             </div>  
            }
            </div>
        );
    }
};

export default Modal;
