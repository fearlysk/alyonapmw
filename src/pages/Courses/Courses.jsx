import styles from "./Courses.module.scss";
import Crown from "../../assets/Home/Best/crown.png";
import Checkmark from "../../assets/Home/Best/checkmark.png";

const Courses = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.main__block}>
                    <div className={styles.main__blockHeadline}>
                       <h1 className={styles.main__blockHeadlineText}>ЛУЧШИЕ КУРСЫ</h1>
                       <p className={styles.main__blockHeadlineSubText}>Основные курсы</p>
                    </div>
                    <div className={styles.best__contentBasicCourseWrapper}>
                        <div className={styles.best__contentBasicCourse}>
                            <h1 className={styles.best__contentBasicCourseHeadline}>BASIC COURSE</h1>
                            <div className={styles.best__contentBasicCourseSep}></div>
                            <div className={styles.best__contentBasicCourseSkills}>
                                <div className={styles.best__contentBasicCourseSkill}>
                                    <img src={Checkmark} width={45} alt="" />
                                    <p className={styles.best__contentBasicCourseSkillText}>Волшебная растушевка на бровях</p>
                                </div>
                                <div className={styles.best__contentBasicCourseSkill}>
                                    <img src={Checkmark} width={45} alt="" />
                                    <p className={styles.best__contentBasicCourseSkillText}>Акварель Губы</p>
                                </div>
                                <div className={styles.best__contentBasicCourseSkill}>
                                    <img src={Checkmark} width={45} alt="" />
                                    <p className={styles.best__contentBasicCourseSkillText}>Мягкая подводка для глаз</p>
                                </div>
                            </div>
                            <div className={styles.best__contentBasicCourseSep}></div>
                            <div className={styles.best__contentBasicCourseKnowledge}>
                                <h1 className={styles.best__contentBasicCourseKnowledgeHeadline}>ЗА 5 ДНЕЙ ПРОГРАММЫ ВЫ УЗНАЕТЕ:</h1>
                                <ul className={styles.best__contentBasicCourseKnowledgeText}>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>изготовление эскиза за 10 минут;</li>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>типы кожи и колористика;</li>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>колористика пигментов;</li>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>анестезия;</li>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>правильная штриховка и постановка руки;</li>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>3 зоны лица и 3 техники;</li>
                                    <li className={styles.best__contentBasicCourseKnowledgeTextItem}>отработка на латексе и на 6 моделях.</li>
                                </ul>
                            </div>
                            <div className={styles.best__contentBasicCourseSep}></div>
                            <div className={styles.best__contentBasicCourseResults}>
                                <div className={styles.best__contentBasicCourseResultsHeadline}>
                                    <img className={styles.best__contentBasicCourseResultsHeadlineImg} width={60} src={Crown} alt="" />
                                    <h1 className={styles.best__contentBasicCourseResultsHeadlineText}>ПО ИТОГАМ ВЫ ПОЛУЧИТЕ:</h1>
                                </div>
                                <ul className={styles.best__contentBasicCourseResultsText}>
                                    <li className={styles.best__contentBasicCourseResultsTextItem}>Сертификат <span style={{fontWeight: "600"}}>мирового уровня</span> от Академии Свято</li>
                                    <br />
                                    <li className={styles.best__contentBasicCourseResultsTextItem}>1 месяц <span style={{fontWeight: "600"}}>БЕСПЛАТНОГО</span> доступа к платформе Beauty Class с уроками от ведущих инструкторов Академии</li>
                                </ul>          
                            </div>
                            <div className={styles.best__contentBasicCourseSep}></div>
                            <div className={styles.best__contentBasicCourseBonus}>
                                <h1 className={styles.best__contentBasicCourseBonusHeadline}>BONUS</h1>
                                <p className={styles.best__contentBasicCourseBonusText}>Стартовый набор для каждого ученика, в который входит  машинка от Sviato Academy, иглы и пигменты</p>
                                <p className={styles.best__contentBasicCourseBonusTextSecond}><span className={styles.best__plus}>+</span> Пигменты, лайнер для эскиза, все обучающие материалы.</p>
                           </div>
                           <div className={styles.best__contentBasicCourseSep}></div>
                           <h1 className={styles.best__contentBasicCoursePrice}>1900 €</h1>
                           <div className={styles.best__contentBasicCourseSepFinal}></div>
                           <h1 className={styles.best__contentBasicCourseHeadline}>MASTER-CLASS</h1>
                           <p className={styles.best__contentBasicCourseBonusText} style={{marginBottom: "45px"}}><span style={{fontWeight: "600"}}>Повышение квалификации</span> для работающих мастеров</p>
                        </div>
                    </div>
                    <h1 className={styles.best__addCourses}>Вспомогательные курсы</h1>
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
                    <div className={styles.courses__contentBtnWrapper}>
                        <button className={styles.courses__contentBtn}>Записаться на курс</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;