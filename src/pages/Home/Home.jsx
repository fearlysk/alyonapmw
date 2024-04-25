import { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../../utils/getWindowDimensions";
import ScrollAnimation from 'react-animate-on-scroll';
import gsap from "gsap";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import http from "../../services/http.js";
import "animate.css/animate.compat.css"
import Alyona from "../../assets/Home/alyona.png";
import Ellipse from "../../assets/Home/ellipse.png";
import Euro from "../../assets/Home/euro.png";
import Feather from "../../assets/Home/feather.png";
import styles from "./Home.module.scss";
import QuoteLeft from "../../components/UI/Quote/QuoteLeft/QuoteLeft";
import QuoteRight from "../../components/UI/Quote/QuoteRight/QuoteRight";
import Trophy from "../../components/UI/AchievementsElements/Trophy";
import Master from "../../components/UI/AchievementsElements/Master";
import Judge from "../../components/UI/AchievementsElements/Judge";
import Certificate from "../../components/UI/AchievementsElements/Certificate";
import Trainer from "../../components/UI/AchievementsElements/Trainer";
import AchievementsAlena from "../../assets/Home/Achievements/achievementsAlena.png";
import Wallet from "../../assets/Home/Makeup/wallet.png";
import EyesOne from "../../assets/Home/Portfolio/eyesOne.png";
import Lips from "../../assets/Home/Portfolio/lips.png";
import EyesTwo from "../../assets/Home/Portfolio/eyesTwo.png";
import Puzzle from "../../assets/Home/Achievements/puzzle.png";
import BestAlena from "../../assets/Home/Best/alena.png";
import Crown from "../../assets/Home/Best/crown.png";
import Checkmark from "../../assets/Home/Best/checkmark.png";
import Location from "../../assets/Home/Best/location.png";
import StudentsOne from "../../assets/Home/Students/students1.png";
import StudentsTwo from "../../assets/Home/Students/students2.png";
import StudentsThree from "../../assets/Home/Students/students3.png";
import StudentsFour from "../../assets/Home/Students/students4.png";
import StudentsFive from "../../assets/Home/Students/students5.png";
import StudentsSix from "../../assets/Home/Students/students6.png";
import FormSplash from "../../assets/Home/splash__form.png";
import Modal from "../../components/Modal/Modal.jsx";

const Home = () => {

    const { width } = useWindowDimensions();

    const setImgWidth = () => {
        let imgWidth;
        if (width > 546) {
          imgWidth = 610;
        }
        if (width > 480 && width <= 546) {
          imgWidth = 520;
        }
        if (width > 399 && width <= 480)  {
            imgWidth = 460;
        }
        if (width > 200 && width <= 399) {
            imgWidth = 355;
        }
        return imgWidth;
      }

      const setEuroWidth = () => {
        let euroWidth;
        if (width > 400) {
          euroWidth = 90;
        } else {
            euroWidth = 75;
        }
        return euroWidth;
      }

      const setAchievementsImgWidth = () => {
        let achievementsImgWidth;
        if (width > 911) {
            achievementsImgWidth = 420;
        } else {
            achievementsImgWidth = 350;
        }
        return achievementsImgWidth;
      }

      const setWalletWidth = () => {
        let walletWidth;
        if (width > 330) {
            walletWidth = 270;
        } else {
            walletWidth = 220;
        }
        return walletWidth;
      }

      const setPortfolioImgWidth = () => {
        let portfolioImgWidth;
        if (width > 1150) {
            portfolioImgWidth = 375;
        }
        if (width > 930 && width <= 1150) {
            portfolioImgWidth = 315;
        } 
        if (width > 499 && width <= 930) {
            portfolioImgWidth = 470;
        } 
        if (width > 395 && width <= 499) {
            portfolioImgWidth = 410;
        }
        if (width > 327 && width <= 395) {
            portfolioImgWidth = 330;
        }
        if (width > 150 && width <= 327) {
            portfolioImgWidth = 255;
        }
        return portfolioImgWidth;
      }

      const setPuzzleWidth = () => {
        let puzzleWidth;
        if (width > 772) {
            puzzleWidth = 180;
        } else {
            puzzleWidth = 130;
        }
        return puzzleWidth;
      }

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

    const Main = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
    
            gsap.from("#main", {
                scale: 0.5,
                opacity: 0,
                ease: "power3",
                duration: 1,
            })
    
          }, Main);
    
          return () => ctx.revert();
        }, [])

    return (
        <div className={styles.wrapper}>
            <Modal open={open} onClose={closeModal} isSubmitted={isSubmitted} setIsSubmitted={setSubmitted} />
            <div className={styles.container}>
                <section className={styles.main} ref={Main} aria-labelledby="main">
                    <div id="main" className={styles.main__block}>
                        <div className={styles.main__blockHeadline}>
                            <h1 className={styles.main__blockHeadlineText}>ALYONA POPA</h1>
                        </div>
                        <div className={styles.main__about}>
                            <div className={styles.main__aboutItem}>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Εκπαιδεύτρια και διοργανωτής</span> των Masterclass της Sviato Academy στην Αθήνα από το 2020.</p>
                                </div>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Grand Prix 2020</span> στην Αθήνα στο Πρωτάθλημα World's Greece Cyprus</p>
                                </div>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Περισσότερα από 15 χρόνια</span> στον κλάδο αισθητικής</p>
                                </div>
                            </div>
                            <div className={styles.main__aboutItem}>
                                <div className={styles.main__aboutItemPhoto}>
                                    <img width={setImgWidth()} src={Alyona} draggable="false" alt="" />
                                </div>
                                <div className={styles.main__aboutItemBtnWrapper}>
                                    <button onClick={() => setOpen(true)} className={styles.main__aboutItemBtn}>Εγγραφή σε σεμινάριο <img width={setEuroWidth()} className={styles.main__aboutItemEuro} draggable="false" src={Euro} alt="" /></button>
                                </div>
                            </div>
                            <div className={styles.main__aboutItem}>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Νικήτρια πολλών διαγωνισμών </span> και πρωταθλημάτων από το 2019</p>
                                </div>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Πιστοποιημένη τεχνίτρια, κριτής και εκπαιδεύτρια </span> στον τομέα του Ημιμόνιμου Μακιγιάζ στην Αθήνα, Ελλάδα</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__feather}>
                            <img className={styles.main__featherImg} draggable="false" src={Feather} width={400} alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.achievements} aria-labelledby="achievements">
                    <div className={styles.achievements__block}>
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <div className={styles.achievements__blockHeadline}>
                                <h1 className={styles.achievements__blockHeadlineText}>ΚΟΣΜΕΤΟΛΟΓΟΣ, ΤΕΧΝΙΤΡΙΑ ΝΥΧΙΩΝ, ΠΟΔΟΛΟΓΟΣ, ΑΙΣΘΗΤΙΚΟΣ-ΣΤΥΛΙΣΤΑΣ, ΤΕΧΝΙΤΡΙΑ ΚΑΙ ΕΚΠΑΙΔΕΥΤΡΙΑ ΗΜΙΜΟΝΙΜΟΥ ΜΑΚΙΓΙΑΖ…<br />
                                ΠΕΡΙΣΣΟΤΕΡΑ ΑΠΟ 15 ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ ΜΕ ΕΠΙΤΥΧΙΕΣ ΚΑΙ ΑΠΟΤΥΧΙΕΣ</h1>
                            </div>
                        </ScrollAnimation>
                        <div className={styles.achievements__content}>
                                <div className={styles.achievements__contentQuote}>
                                <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                                    <div className={styles.achievements__contentQuoteItem}>
                                        <QuoteLeft />
                                    </div>
                                    <div className={styles.achievements__contentQuoteItem}>
                                        <p>Την ικανότητα να βγάζω χρήματα την απέκτησα αλλάζοντας μερικές χώρες και τομείς δραστηριότητας. Ούσα νέα και άπειρη, με ένα μικρό παιδί στα χέρια, έπρεπε να βρω έναν τρόπο να συντηρώ την οικογένειά μου.</p>
                                            <br />
                                        <p>Έχω να μοιραστώ πράγματα. Γνωρίζω εκ των έσω τη σφαίρα της αισθητικής και πλέον ξέρω που <span style={{fontWeight: "600"}}>κρύβονται τα υψηλά έσοδα.</span></p>
                                    </div>
                                    <div className={styles.achievements__contentQuoteItem}>
                                        <QuoteRight />
                                    </div>
                                </ScrollAnimation>
                                </div>
                            <div className={styles.achievements__contentTitles}>
                            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Trophy />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Νικήτρια</p>
                                        <p>στο International Championship IV 2021, Interunim II 2020, International PMU Tournament Beauty Expo 2019</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Master />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Grand Prix 2022</p>
                                        <p>στην Αθήνα στο Πρωτάθλημα Worlds Greece Cyprus</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Judge />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Κριτής στο Πρωτάθλημα</p>
                                        <p>IBV World Beauty Voyage 2021 στη Μολδαβία</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Certificate />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Πιστοποιημένη τεχνίτρια</p>
                                        <p>και εκπαιδεύτρια Ημιμόνιμου Μακιγιάζ στην Αθήνα, Ελλάδα</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Trainer />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Εκπαιδεύτρια και διοργανωτής</p>
                                        <p>των Masterclass της Sviato Academy στην Αθήνα από το 2022</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>
                            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                            <div className={styles.achievements__photo}>
                                <img src={AchievementsAlena} draggable="false" width={setAchievementsImgWidth()} alt="" />
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                <section className={styles.makeup} aria-labelledby="makeup">
                    <div className={styles.makeup__block}>
                    <img className={styles.puzzle} draggable="false" width={setPuzzleWidth()} src={Puzzle} alt="" />
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <div className={styles.makeup__content}>
                            <div className={styles.makeup__contentItem}>
                                <div className={styles.makeup__contentItemHeadline}>
                                    <h1 className={styles.makeup__contentItemHeadlineText}>ΗΜΙΜΟΝΙΜΟ ΜΑΚΙΓΙΑΖ</h1>
                                </div>
                                <div className={styles.makeup__contentItemTextWrapper}>
                                    <p className={styles.makeup__contentItemText}>
                                    Μία από τις πιο κερδοφόρες επιχειρήσεις στον κλάδο της ομορφιάς σύμφωνα με τα τελευταία στατιστικά στοιχεία του 2022.
                                    </p>
                                    <br />
                                    <p className={styles.makeup__contentItemText}>
                                    Μάθε από εμένα πώς να διεισδύσεις στο επάγγελμα από το μηδέν και να αρχίσεις να βγάζεις χρήματα <span style={{fontWeight: "600"}}>μόλις 5 ημέρες μετά την ολοκλήρωση της βασικής εκπαίδευσης!</span>
                                    </p>
                                </div>
                                <Link to={routes.CONTACTS}>
                                    <div className={styles.makeup__contentItemBtnWrapper}>
                                        <button className={styles.makeup__contentItemBtn}>Εγγραφή σε σεμινάριο</button>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.makeup__contentItem}>
                                <div className={styles.makeup__contentItemImgWrapper}>
                                    <img className={styles.makeup__contentItemImg} width={setWalletWidth()} src={Wallet} alt="" />
                                </div>
                                <div className={styles.makeup__contentItemImgTextWrapper}>
                                    <p className={styles.makeup__contentItemImgText}>Οι επενδύσεις στην εκπαίδευση αποσβένονται τον πρώτο κιόλας μήνα εργασίας!</p>
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </section>
                <section className={styles.services} aria-labelledby="services">
                    <div className={styles.services__block}>
                        <div className={styles.services__content}>
                            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <div className={styles.services__contentHeadline}>
                                <h1 className={styles.services__contentHeadlineText} style={{textTransform: "uppercase"}}>Υπηρεσίες</h1>
                                <h3 className={styles.services__contentHeadlineSubText}>Τεχνικές Permanent Makeup:</h3>
                            </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <div className={styles.services__contentItems}>
                            <div className={styles.services__contentItemWrapper}>
                                <div className={styles.services__contentItem}>
                                    <div className={styles.services__contentItemServiceHeadline}>
                                        <h3>ΦΡΥΔΙΑ</h3>
                                    </div>
                                    <div className={styles.services__contentItemService}>
                                        <p>- Magic Shading</p>
                                        <p>- Hairstrokes</p>
                                        <p>- Cover Up</p>
                                    </div>
                                </div>
                                </div>
                                <div className={styles.services__contentItemWrapper}>
                                    <div className={styles.services__contentItem}>
                                        <div className={styles.services__contentItemServiceHeadline}>
                                            <h3>ΜΑΤΙΑ</h3>
                                        </div>
                                        <div className={styles.services__contentItemService}>
                                            <p>- Softliner</p>
                                            <p>- Classic Liner</p>
                                            <p>- Stardust</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.services__contentItemWrapper}>
                                    <div className={styles.services__contentItem}>
                                        <div className={styles.services__contentItemServiceHeadline}>
                                            <h3>ΧΕΙΛΗ</h3>
                                        </div>
                                        <div className={styles.services__contentItemService}>
                                            <p>- Aquarelle Lips</p>
                                            <p>- Superbright Lips</p>
                                            <p>- 3D Lipstick</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                <section className={styles.portfolio} aria-labelledby="portfolio">
                    <div className={styles.portfolio__block}>
                        <div className={styles.portfolio__content}>
                            <div className={styles.portfolio__contentHeadline}>
                                <h1 className={styles.portfolio__contentHeadlineText} style={{textTransform: "uppercase"}}>Χαρτοφυλάκιο</h1>
                            </div>
                            <div className={styles.portfolio__contentItems}>
                                <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                                    <div className={styles.portfolio__contentItem}>
                                        <img width={setPortfolioImgWidth()} draggable="false" src={EyesOne} alt="" />
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                    <div className={styles.portfolio__contentItem}>
                                        <img width={setPortfolioImgWidth()} draggable="false" src={Lips} alt="" />
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                                    <div className={styles.portfolio__contentItem}>
                                        <img width={setPortfolioImgWidth()} draggable="false" src={EyesTwo} alt="" />
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <Link to={routes.PORTFOLIO}>
                            <div className={styles.portfolio__contentBtnWrapper}>
                                <button className={styles.portfolio__contentBtn}>Δες κι άλλες δουλειές</button>
                            </div>
                        </Link>
                    </div>
                </section>
                <div className={styles.sep}></div>
                <section className={styles.best} aria-labelledby="best">
                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <div className={styles.best__block}>
                        <div className={styles.best__content}>
                            <div className={styles.best__contentHeadline}>
                                <h1 className={styles.best__contentHeadlineText}>ΚΑΛΥΤΕΡΑ ΣΕΜΙΝΑΡΙΑ</h1>
                            </div>
                            <div className={styles.best__content}>
                                <div className={styles.best__contentItems}>
                                    <div className={styles.best__contentItem}>
                                        <img className={styles.best__contentItemImg} draggable="false" width={275} src={BestAlena} alt="" />
                                    </div>
                                    <div className={styles.best__contentItem}>
                                        <div className={styles.best__contentItemTextWrapper}>
                                            <p className={styles.best__contentItemText}><span style={{fontWeight: "600"}}>5 ημέρες θεωρίας και πρακτικής</span>, για να είσαι έτοιμος ασκούμενος τεχνίτης ημιμόνιμου μακιγιάζ!</p>
                                            <p className={styles.best__contentItemText}>Σε 5 ημέρες θα σας παρουσιάσω τις πιο χρήσιμες πληροφορίες, τις <span style={{fontWeight: "600"}}>εμπειρία πάνω στις πιο δημοφιλείς τεχνικές</span> για το πιο φυσικό και εκλεπτυσμένο αποτέλεσμα!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.best__contentBasicCourseWrapper}>
                                    <div className={styles.best__contentBasicCourse}>
                                        <h1 className={styles.best__contentBasicCourseHeadline}>BASIC COURSE</h1>
                                        <div className={styles.best__contentBasicCourseSep}></div>
                                        <div className={styles.best__contentBasicCourseSkills}>
                                            <div className={styles.best__contentBasicCourseSkill}>
                                                <img draggable="false" src={Checkmark} width={45} alt="" />
                                                <p className={styles.best__contentBasicCourseSkillText}>Magic Shading στα φρύδια</p>
                                            </div>
                                            <div className={styles.best__contentBasicCourseSkill}>
                                                <img draggable="false" src={Checkmark} width={45} alt="" />
                                                <p className={styles.best__contentBasicCourseSkillText}>Aquarelle Lips</p>
                                            </div>
                                            <div className={styles.best__contentBasicCourseSkill}>
                                                <img draggable="false" src={Checkmark} width={45} alt="" />
                                                <p className={styles.best__contentBasicCourseSkillText}>Soft Liner στα μάτια</p>
                                            </div>
                                        </div>
                                        <div className={styles.best__contentBasicCourseSep}></div>
                                        <div className={styles.best__contentBasicCourseKnowledge}>
                                            <h1 className={styles.best__contentBasicCourseKnowledgeHeadline}>ΣΕ 5 ΜΕΡΕΣ ΒΑΣΙΚΗΣ ΕΚΠΑΙΔΕΥΣΗΣ ΘΑ ΜΑΘΕΙΣ:</h1>
                                            <ul className={styles.best__contentBasicCourseKnowledgeText}>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>Δημιουργία σκίτσου σε 10 λεπτά;</li>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>Τύποι επιδερμίδας και χρωματολογία;</li>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>Χρωστικές;</li>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>Αναισθησία;</li>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>Σωστή σκίαση και τοποθέτηση χεριού;</li>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>3 ζώνες προσώπου και 3 τεχνικές;</li>
                                                <li className={styles.best__contentBasicCourseKnowledgeTextItem}>Πρακτική σε λατέξ και σε 6 μοντέλα.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.best__contentBasicCourseSep}></div>
                                        <div className={styles.best__contentBasicCourseResults}>
                                            <div className={styles.best__contentBasicCourseResultsHeadline}>
                                                <img draggable="false" className={styles.best__contentBasicCourseResultsHeadlineImg} width={60} src={Crown} alt="" />
                                                <h1 className={styles.best__contentBasicCourseResultsHeadlineText}>ΩΣ ΑΠΟΤΕΛΕΣΜΑ ΘΑ ΛΑΒΕΤΕ:</h1>
                                            </div>
                                            <ul className={styles.best__contentBasicCourseResultsText}>
                                                <li className={styles.best__contentBasicCourseResultsTextItem}>Πιστοποιητικό <span style={{fontWeight: "600"}}>διεθνούς επιπέδου από</span> τη Sviato Academy</li>
                                                <br />
                                                <li className={styles.best__contentBasicCourseResultsTextItem}>1 μήνα <span style={{fontWeight: "600"}}>ΔΩΡΕΑΝ</span> πρόσβαση στην πλατφόρμα Beauty Class με μαθήματα από τους κορυφαίους εκπαιδευτές της Ακαδημίας</li>
                                            </ul>          
                                        </div>
                                        <div className={styles.best__contentBasicCourseSep}></div>
                                        <div className={styles.best__contentBasicCourseBonus}>
                                            <h1 className={styles.best__contentBasicCourseBonusHeadline}>BONUS</h1>
                                            <p className={styles.best__contentBasicCourseBonusText}>Βασικό kit για τον κάθε μαθητή που αποτελείται από ένα μηχάνημα της Sviato Academy, βελόνες και χρωστικές</p>
                                            <p className={styles.best__contentBasicCourseBonusTextSecond}><span className={styles.best__plus}>+</span> Liner για το σκίτσο και όλο το διδακτικό υλικό</p>
                                       </div>
                                       <div className={styles.best__contentBasicCourseSep}></div>
                                       <h1 className={styles.best__contentBasicCoursePrice}>1900 €</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.best__more}>
                        <div className={styles.best__moreLocation}>
                            <img className={styles.best__moreLocationImg} draggable="false" src={Location} width={75} alt="" />
                            <p className={styles.best__moreLocationText}>Αθήνα</p>
                        </div>
                        <Link to={routes.COURSES}>
                            <div className={styles.best__moreBtnWrapper}>
                                <button className={styles.best__moreBtn}>Λεπτομέρειες σεμιναρίων</button>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                </section>
                <section className={styles.students} aria-labelledby="students">
                    <div className={styles.students__block}>
                        <div className={styles.students__content}>
                            <div className={styles.students__contentHeadline}>
                                <h1 className={styles.students__contentHeadlineText}>ΔΟΥΛΕΙΕΣ ΜΑΘΗΤΩΝ</h1>
                            </div>
                            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                            <div className={styles.students__contentItems}>
                                <div className={styles.students__contentItem}>
                                    <img className={styles.students__contentItemImg} width={320} draggable="false" src={StudentsOne} alt="" />
                                </div>
                                <div className={styles.students__contentItem}>
                                    <img className={styles.students__contentItemImg} width={320} draggable="false" src={StudentsTwo} alt="" />
                                </div>
                                <div className={styles.students__contentItem}>
                                    <img className={styles.students__contentItemImg} width={320} draggable="false" src={StudentsThree} alt="" />
                                </div>
                                <div className={styles.students__contentItem}>
                                    <img className={styles.students__contentItemImg} width={320} draggable="false" src={StudentsFour} alt="" />
                                </div>
                                <div className={styles.students__contentItem}>
                                    <img className={styles.students__contentItemImg} width={320} draggable="false" src={StudentsFive} alt="" />
                                </div>
                                <div className={styles.students__contentItem}>
                                    <img className={styles.students__contentItemImg} width={290} draggable="false" src={StudentsSix} alt="" />
                                </div>
                            </div>
                            </ScrollAnimation>
                            <Link to={routes.PORTFOLIO}>
                                <div className={styles.students__contentBtnWrapper}>
                                    <button className={styles.students__contentBtn}>Περισσότερες δουλειές</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sepLine}></div>
                </section>
                <img className={styles.applicationFormSplash} draggable="false" width={600} src={FormSplash} alt="" />
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
                                    <input type="checkbox" className={styles.applicationForm__contentFormCheckbox} id="privacy_policy" name="privacy_policy" value="yes" required />
                                    <label className={styles.applicationForm__contentFormCheckboxLabel} htmlFor="privacy_policy">Αποδέχομαι τους όρους επεξεργασίας προσωπικών δεδομένων.</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;
