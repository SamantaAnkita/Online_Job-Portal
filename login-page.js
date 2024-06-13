import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./login-page.module.css";

const LoginPage = () => {
  const router = useRouter();

  const onLoginPageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDontHaveAnClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  return (
    <div className={styles.loginPage11} onClick={onLoginPageClick}>
      <img
        className={styles.image5Icon}
        alt=""
        src="/image-5@2x.png"
        data-scroll-to="image5"
      />
      <img
        className={styles.loginPage11Child}
        alt=""
        src="/rectangle-8@2x.png"
      />
      <div className={styles.career}>carEER</div>
      <div className={styles.getYourDream}>Get your dream job</div>
      <div className={styles.login}>Login</div>
      <div className={styles.loginPage11Item} />
      <div className={styles.loginPage11Inner} />
      <div className={styles.emailOrUsername}>email or Username</div>
      <div className={styles.password}>Password</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.login1}>Login</div>
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account? `}</span>
        <span className={styles.signup}>Signup</span>
      </div>
    </div>
  );
};

export default LoginPage;
