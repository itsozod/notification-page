import styles from "./MainAppContainer.module.css";
import PropTypes from "prop-types";

export default function MainAppContainer({ children }) {
  return <div className={styles.main_app_container}>{children}</div>;
}
MainAppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
