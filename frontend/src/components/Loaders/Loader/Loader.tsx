import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="w-full flex align-center justify-center">
      <div className={styles.loader}>
        <span className={`${styles["loader-text"]}`}>loading</span>
        <span className={styles.load}></span>
      </div>
    </div>
  );
}

export default Loader;
