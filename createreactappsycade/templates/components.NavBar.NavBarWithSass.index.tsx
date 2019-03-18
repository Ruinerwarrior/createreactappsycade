import * as React from 'react';
import styles from './NavBar.module.scss';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarleft}>
        <h1 className={styles.title}>
          <a className={styles.link} href="https://github.com/Ruinerwarrior/createreactappsycade/wiki/createreactappsycade">CreateReactAppSycade</a>
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
