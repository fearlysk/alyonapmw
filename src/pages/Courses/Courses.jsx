import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Courses.module.scss";
import routes from "../../constants/routes";
import Crown from "../../assets/Home/Best/crown.png";
import Checkmark from "../../assets/Home/Best/checkmark.png";
import { Link } from "react-router-dom";

const Courses = () => {

    const Courses = useRef(null);
    
        useEffect(() => {
        let ctx = gsap.context(() => {
    
        gsap.from("#courses", {
            opacity: 0,
            ease: "power3",
            duration: 1,
        })
    
      }, Courses);
    
      return () => ctx.revert();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div ref={Courses} className={styles.main}>
                <div id="courses" className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText}>ΚΑΛΥΤΕΡΑ ΣΕΜΙΝΑΡΙΑ</h1>
                       <p className={styles.main__blockHeadlineSubText}>Βασικά μαθήματα</p>
                    </div>
                    <div className={styles.best__contentBasicCourseWrapper}>
                        <div className={styles.best__contentBasicCourse}>
                            <h1 className={styles.best__contentBasicCourseHeadline}>BASIC COURSE</h1>
                            <div className={styles.best__contentBasicCourseSep}></div>
                            <div className={styles.best__contentBasicCourseSkills}>
                                <div className={styles.best__contentBasicCourseSkill}>
                                    <img draggable="false" src={Checkmark} width={45} alt="" />
                                    <p className={styles.best__contentBasicCourseSkillText}>Magic Shading (φρύδια)</p>
                                </div>
                                <div className={styles.best__contentBasicCourseSkill}>
                                    <img draggable="false" src={Checkmark} width={45} alt="" />
                                    <p className={styles.best__contentBasicCourseSkillText}>Aquarelle Lips (χείλη)</p>
                                </div>
                                <div className={styles.best__contentBasicCourseSkill}>
                                    <img draggable="false" src={Checkmark} width={45} alt="" />
                                    <p className={styles.best__contentBasicCourseSkillText}>Soft Liner (μάτια)</p>
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
                                    <img className={styles.best__contentBasicCourseResultsHeadlineImg} draggable="false" width={60} src={Crown} alt="" />
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
                           <div className={styles.best__contentBasicCourseSepFinal}></div>
                           <h1 className={styles.best__contentBasicCourseHeadline}>MASTER-CLASS</h1>
                           <p className={styles.best__contentBasicCourseBonusText} style={{marginBottom: "45px"}}><span style={{fontWeight: "600"}}>Αύξηση εξειδίκευσης</span> για ενεργούς τεχνίτες</p>
                        </div>
                    </div>
                    <h1 className={styles.best__addCourses}>Βοηθητικά σεμινάρια</h1>
                    <div className={styles.best__contentBasicCourseWrapper}>
                        <div className={styles.best__contentBasicCourse}>
                            <div className={styles.best__addCourseItem}>
                                <p className={styles.best__addCourseItemText}>Basic Course & Master Class Mini Tattoo</p>
                            </div>
                            <div className={styles.best__contentAddCourseSep}></div>
                            <div className={styles.best__addCourseItem}>
                                <p className={styles.best__addCourseItemText}>Master Class Removal</p>
                            </div>
                            <div className={styles.best__contentAddCourseSep}></div>
                            <div className={styles.best__addCourseItem}>
                                <p className={styles.best__addCourseItemText}>Basic Course & Master Class Hairstrokes</p>
                            </div>
                            <div className={styles.best__contentAddCourseSep}></div>
                            <div className={styles.best__addCourseItem}>
                                <p className={styles.best__addCourseItemText}>Master Class Areola Tatoo</p>
                            </div>
                            <div className={styles.best__contentAddCourseSep}></div>
                            <div className={styles.best__addCourseItem}>
                                <p className={styles.best__addCourseItemText} style={{marginBottom: "30px"}}>Basic Course & Master Class Scalp Tattoo</p>
                            </div>
                        </div>
                    </div>
                    <Link to={routes.CONTACTS}>
                    <div className={styles.courses__contentBtnWrapper}>
                        <button className={styles.courses__contentBtn}>Εγγραφή σε σεμινάριο</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Courses;