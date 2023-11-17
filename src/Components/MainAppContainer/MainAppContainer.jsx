import styles from "./MainAppContainer.module.css";
export default function MainAppContainer({ children }) {
  return <div className={styles.main_app_container}>{children}</div>;
}
