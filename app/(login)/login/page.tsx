'use client'


import styles from '@/components/login/loginpage.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './loginAnimation.json'
import LoginForm from '@/components/login/login-form';


const LoginPage = ( ) => {
    

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <LoginForm />
      </div>
      <div className={styles.blankContainer}>
      <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '100%', width: '100%' }}
          />
      </div>
    </div>
  );
};

export default LoginPage;