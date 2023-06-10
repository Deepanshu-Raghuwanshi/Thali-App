import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.heading}>
          <h1>
            <b>Chappan Bhog Restaurant</b>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Header;
