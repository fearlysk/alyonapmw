import { useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../constants/routes";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = (props) => {

    const { isBurgerOpened, setIsBurgerOpened } = props;
    const [showBurger, setShowBurger] = useState(isBurgerOpened);
    
    const closeBurger = () => {
        setShowBurger(false);
        setTimeout(() => setIsBurgerOpened(false), 300)
    }

    return (
        <div className={showBurger ? styles.header__burgerLinks : styles.header__burgerLinksHidden}>
            <nav className={styles.header__burgerLinksNav}>
                <ul className={showBurger ? styles.header__burgerLinksItems : styles.header__burgerLinksItemsHidden}>
                    <li className={styles.header__burgerLinksItem}>
                        <NavLink to={routes.HOME} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", 
                        filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))", borderBottom: "1px solid #FFFFFF", paddingBottom: "6px" } : {};}}>Αρχική
                        </NavLink>
                    </li>
                    <li className={styles.header__burgerLinksItem}>
                        <NavLink to={routes.PORTFOLIO} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", 
                        filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))", borderBottom: "1px solid #FFFFFF", paddingBottom: "6px" } : {};}}>Χαρτοφυλάκιο
                        </NavLink>
                    </li>
                    <li className={styles.header__burgerLinksItem}>
                        <NavLink to={routes.SERVICES} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", 
                        filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))", borderBottom: "1px solid #FFFFFF", paddingBottom: "6px" } : {};}}>Υπηρεσίες
                        </NavLink>
                    </li>
                    <li className={styles.header__burgerLinksItem}>
                        <NavLink to={routes.COURSES} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", 
                        filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))", borderBottom: "1px solid #FFFFFF", paddingBottom: "6px" } : {};}}>Σεμινάρια
                        </NavLink>
                    </li>
                    <li className={styles.header__burgerLinksItem}>
                        <NavLink to={routes.CONTACTS} style={({ isActive }) => { return isActive ? { color: "#e0a933", fontWeight: "medium", 
                        filter: "drop-shadow(0px 2px 4px rgba(255, 238, 83, 0.45))", borderBottom: "1px solid #FFFFFF", paddingBottom: "6px" } : {};}}>Επικοινωνία
                        </NavLink>
                    </li>
                </ul>
                <div className={showBurger ? styles.closeBtn : styles.closeBtnHidden}>
                    <button className={showBurger ? styles.closeBtnItem : styles.closeBtnItemHidden} onClick={closeBurger}> 
                        X
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default BurgerMenu;
