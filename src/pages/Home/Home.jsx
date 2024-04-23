import { useEffect, useRef } from "react";
import useWindowDimensions from "../../utils/getWindowDimensions";
import ScrollAnimation from 'react-animate-on-scroll';
import gsap from "gsap";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
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
                                    <p><span style={{fontWeight: "bold"}}>Тренер и организатор</span> мастер-классов Sviato Academy в Афинах с 2022 г.</p>
                                </div>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Гран-при 2022 г.</span> в Афинах на чемпионате World's Greece Cyprus</p>
                                </div>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Более 15 лет</span> в beauty-индустрии</p>
                                </div>
                            </div>
                            <div className={styles.main__aboutItem}>
                                <div className={styles.main__aboutItemPhoto}>
                                    <img width={setImgWidth()} src={Alyona} draggable="false" alt="" />
                                </div>
                                <Link to={routes.CONTACTS}>
                                <div className={styles.main__aboutItemBtnWrapper}>
                                    <button className={styles.main__aboutItemBtn}>Записаться на курс <img width={setEuroWidth()} className={styles.main__aboutItemEuro} draggable="false" src={Euro} alt="" /></button>
                                </div>
                                </Link>
                            </div>
                            <div className={styles.main__aboutItem}>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Победитель и призер </span> множества турниров и чемпионатов с 2019 г.</p>
                                </div>
                                <div className={styles.main__aboutItemText}>
                                    <img src={Ellipse} draggable="false" alt="" />
                                    <p><span style={{fontWeight: "bold"}}>Сертифицированный мастер, судья и тренер </span> по перманентному макияжу в Greece Athens</p>
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
                                <h1 className={styles.achievements__blockHeadlineText}>Косметология, мастер маникюра, подолог,  визажист-стилист, мастер и тренер перманентного макияжа...<br />
                                Более 15 лет опыта, шишек, взлетов и падений</h1>
                            </div>
                        </ScrollAnimation>
                        <div className={styles.achievements__content}>
                                <div className={styles.achievements__contentQuote}>
                                <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
                                    <div className={styles.achievements__contentQuoteItem}>
                                        <QuoteLeft />
                                    </div>
                                    <div className={styles.achievements__contentQuoteItem}>
                                        <p>Уметь зарабатывать - навык, который я выработала, сменив несколько стран и сфер деятельности. 
                                            Будучи молодой и неопытной, оставшись одной с маленьким ребёнком на руках, нужно было найти способ обеспечить свою семью.</p>
                                            <br />
                                        <p>Мне есть чем поделиться. Я изнутри знакома с кухней сферы красоты и теперь точно знаю, где прячутся <span style={{fontWeight: "600"}}>самые высокие доходы.</span></p>
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
                                        <p style={{fontWeight: "600"}}>Призёр и победитель</p>
                                        <p>на International Championship IV 2021, Interunim II 2020, International PMU Tournament Beauty Expo 2019</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Master />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Гран-при 2022 г.</p>
                                        <p>в Афинах на чемпионате Worlds Greece Cyprus</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Judge />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Судья чемпионата</p>
                                        <p>IBV World Beauty Voyage Молдовы 2021</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Certificate />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Сертифицированный мастер и тренер</p>
                                        <p>перманентного макияжа в Greece Athens</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <div className={styles.achievements__contentTitlesItem}>
                                    <div className={styles.achievements__contentTitlesItemIcon}>
                                        <Trainer />
                                    </div>
                                    <div className={styles.achievements__contentTitlesItemText}>
                                        <p style={{fontWeight: "600"}}>Тренер и организатор</p>
                                        <p>мастер-классов Sviato Academy в Афинах с 2022 г.</p>
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
                                    <h1 className={styles.makeup__contentItemHeadlineText}>ПЕРМАНЕНТНЫЙ МАКИЯЖ</h1>
                                </div>
                                <div className={styles.makeup__contentItemTextWrapper}>
                                    <p className={styles.makeup__contentItemText}>
                                    Один из самых прибыльных бизнесов в сфере красоты согласно последним статистическим данным 2022.
                                    </p>
                                    <br />
                                    <p className={styles.makeup__contentItemText}>
                                    Узнай у меня как попасть в профессию с нуля и начать зарабатывать уже <span style={{fontWeight: "600"}}>спустя 5 дней после прохождения базового курса!</span>
                                    </p>
                                </div>
                                <Link to={routes.CONTACTS}>
                                    <div className={styles.makeup__contentItemBtnWrapper}>
                                        <button className={styles.makeup__contentItemBtn}>Записаться на курс</button>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.makeup__contentItem}>
                                <div className={styles.makeup__contentItemImgWrapper}>
                                    <img className={styles.makeup__contentItemImg} width={setWalletWidth()} src={Wallet} alt="" />
                                </div>
                                <div className={styles.makeup__contentItemImgTextWrapper}>
                                    <p className={styles.makeup__contentItemImgText}>Вложения в обучение окупаются в первый же месяц работы!</p>
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
                                <h1 className={styles.services__contentHeadlineText}>УСЛУГИ</h1>
                                <h3 className={styles.services__contentHeadlineSubText}>Permanent Makeup в техниках:</h3>
                            </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <div className={styles.services__contentItems}>
                            <div className={styles.services__contentItemWrapper}>
                                <div className={styles.services__contentItem}>
                                    <div className={styles.services__contentItemServiceHeadline}>
                                        <h3>БРОВИ</h3>
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
                                            <h3>ГЛАЗА</h3>
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
                                            <h3>ГУБЫ</h3>
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
                                <h1 className={styles.portfolio__contentHeadlineText}>ПОРТФОЛИО</h1>
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
                                <button className={styles.portfolio__contentBtn}>Смотреть больше работ</button>
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
                                <h1 className={styles.best__contentHeadlineText}>ЛУЧШИЕ КУРСЫ</h1>
                            </div>
                            <div className={styles.best__content}>
                                <div className={styles.best__contentItems}>
                                    <div className={styles.best__contentItem}>
                                        <img className={styles.best__contentItemImg} draggable="false" width={275} src={BestAlena} alt="" />
                                    </div>
                                    <div className={styles.best__contentItem}>
                                        <div className={styles.best__contentItemTextWrapper}>
                                            <p className={styles.best__contentItemText}><span style={{fontWeight: "600"}}>5 дней теории и практики</span>, чтобы стать готовым и практикующим мастером перманентного макияжа!</p>
                                            <p className={styles.best__contentItemText}>За 5 дней я предоставлю вам самую полезную информацию, знания и опыт <span style={{fontWeight: "600"}}>по самым востребованным техникам</span> для максимально естественного и элегантного результата!</p>
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
                                                <p className={styles.best__contentBasicCourseSkillText}>Волшебная растушевка на бровях</p>
                                            </div>
                                            <div className={styles.best__contentBasicCourseSkill}>
                                                <img draggable="false" src={Checkmark} width={45} alt="" />
                                                <p className={styles.best__contentBasicCourseSkillText}>Акварель Губы</p>
                                            </div>
                                            <div className={styles.best__contentBasicCourseSkill}>
                                                <img draggable="false" src={Checkmark} width={45} alt="" />
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
                                                <img draggable="false" className={styles.best__contentBasicCourseResultsHeadlineImg} width={60} src={Crown} alt="" />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.best__more}>
                        <div className={styles.best__moreLocation}>
                            <img className={styles.best__moreLocationImg} draggable="false" src={Location} width={75} alt="" />
                            <p className={styles.best__moreLocationText}>Афины</p>
                        </div>
                        <Link to={routes.COURSES}>
                            <div className={styles.best__moreBtnWrapper}>
                                <button className={styles.best__moreBtn}>Подробнее о курсах</button>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                </section>
                <section className={styles.students} aria-labelledby="students">
                    <div className={styles.students__block}>
                        <div className={styles.students__content}>
                            <div className={styles.students__contentHeadline}>
                                <h1 className={styles.students__contentHeadlineText}>РАБОТЫ СТУДЕНТОВ</h1>
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
                                    <button className={styles.students__contentBtn}>Больше работ</button>
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
    )
}

export default Home;
