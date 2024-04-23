import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import routes from "../../constants/routes";
import Logo from "../UI/Logo/Logo";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import InstagramMini from "../UI/InstagramMini/InstagramMini";

const Header = () => {

    const [isBurgerOpened, setIsBurgerOpened] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [scrollY])

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    return (
        <section className={styles.wrapper}>
            <div className={scrollY < 100 ? styles.header : styles.headerFixed}>
                <div className={styles.header__content}>
                    <div className={styles.header__contentLogo}>
                        <Link to={routes.HOME}>
                            <Logo />
                        </Link>
                    </div>
                    <div className={styles.header__contentLinks}>
                        <nav>
                            <ul className={styles.header__contentLinksList}>
                                <li className={styles.header__contentLinksListItem}>
                                    <NavLink to={routes.HOME} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", borderBottom: "1px solid #FFFFFF", paddingBottom: "5px",
                                    filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))" } : {};}}>Главная
                                    </NavLink>
                                </li>
                                <li className={styles.header__contentLinksListItem}>
                                    <NavLink to={routes.PORTFOLIO} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", borderBottom: "1px solid #FFFFFF", paddingBottom: "5px",
                                    filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))" } : {};}}>Портфолио
                                    </NavLink>
                                </li>
                                <li className={styles.header__contentLinksListItem}>
                                    <NavLink to={routes.SERVICES} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", borderBottom: "1px solid #FFFFFF", paddingBottom: "5px",
                                    filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))" } : {};}}>Услуги
                                    </NavLink>
                                </li>
                                <li className={styles.header__contentLinksListItem}>
                                    <NavLink to={routes.COURSES} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", borderBottom: "1px solid #FFFFFF", paddingBottom: "5px",
                                    filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))" } : {};}}>Курсы
                                    </NavLink>
                                </li>
                                <li className={styles.header__contentLinksListItem}>
                                    <NavLink to={routes.CONTACTS} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", borderBottom: "1px solid #FFFFFF", paddingBottom: "5px",
                                    filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))" } : {};}}>Контакты
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.headerContacts}>
                        <p>+30 699 40-99-468</p>
                        <div>
                            <Link to="https://www.instagram.com/alyonapopa_pmutrainer" target="_blank">
                            <InstagramMini />
                            </Link>
                            <Link to="https://www.instagram.com/alyonapopa_pmutrainer" target="_blank">
                            <p className={styles.headerContacts__inst}>alyonapopa_pmutrainer</p>
                            </Link>
                        </div>
                    </div>
                     <div className={styles.header__burger} onClick={() => setIsBurgerOpened(true)}>
                        <div className={styles.header__burgerItem}></div>
                        <div className={styles.header__burgerItem}></div>
                        <div className={styles.header__burgerItem}></div>
                    </div>
                    {isBurgerOpened ? <BurgerMenu isBurgerOpened={isBurgerOpened} setIsBurgerOpened={setIsBurgerOpened} /> : null} 
                  
                </div>
                
            </div>
        </section>
    )
}

export default Header;
