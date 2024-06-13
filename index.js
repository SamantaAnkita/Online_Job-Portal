import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const LandingPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  const onLoginTextClick = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const onRectangleClick1 = useCallback(() => {
    router.push("/job-list");
  }, [router]);

  return (
    <div className={styles.landingPage10}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.career}> carEER</div>
      <div className={styles.getYourDream}>Get your dream job</div>
      <img
        className={styles.landingPage10Child}
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className={styles.homeFindA}>Home Find a job About Page Content</div>
      <div className={styles.landingPage10Item} onClick={onRectangleClick} />
      <div className={styles.landingPage10Inner} />
      <div className={styles.login} onClick={onLoginTextClick}>
        Login
      </div>
      <div className={styles.signup}>Signup</div>
      <div className={styles.sayGoodbyeToContainer}>
        <p className={styles.sayGoodbye}>{`Say GOODBYE `}</p>
        <p className={styles.sayGoodbye}>{`to `}</p>
        <p className={styles.sayGoodbye}>UN-EMPLOYMENT</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.location}>
        <span>Location</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.jobTitleOr}>Job Title or keyword</div>
      <div className={styles.landingPage10Child1} onClick={onRectangleClick1} />
      <div className={styles.findJob}>Find Job</div>
      <div className={styles.div}>{`>`}</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
      <img
        className={styles.landingPage10Child2}
        alt=""
        src="/ellipse-2@2x.png"
      />
    </div>
  );
};

export default LandingPage;
