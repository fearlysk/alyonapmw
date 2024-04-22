import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import routes from "../../constants/routes";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.notFound}>
                <div className={styles.notFound__content}>
                    <h1 className={styles.notFound__contentHeadline}>Страница не найдена</h1>
                    <div className={styles.notFound__contentItemBtnWrapper}>
                        <Link to={routes.HOME}><button className={styles.notFound__contentItemBtn}>На главную</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
