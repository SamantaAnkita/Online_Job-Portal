import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./landing-page1.module.css";

const LandingPage1 = () => {
  const router = useRouter();

  const onFindJobTextClick = useCallback(() => {
    router.push("/job-list");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.landingPage11}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.landingPage11Child} data-scroll-to="rectangle" />
      <div className={styles.career}> carEER</div>
      <div className={styles.getYourDream}>Get your dream job</div>
      <img
        className={styles.landingPage11Item}
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className={styles.homeFindA}>Home Find a job About Page Content</div>
      <div className={styles.login}>Login</div>
      <div className={styles.register}>Register</div>
      <div className={styles.sayGoodbyeToContainer}>
        <p className={styles.sayGoodbye}>{`Say GOODBYE `}</p>
        <p className={styles.sayGoodbye}>{`to `}</p>
        <p className={styles.sayGoodbye}>UN-EMPLOYMENT</p>
      </div>
      <div className={styles.landingPage11Inner} />
      <div className={styles.location}>
        <span>Location</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.jobTitleOr}>Job Title or keyword</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.findJob} onClick={onFindJobTextClick}>
        Find Job
      </div>
      <div className={styles.div}>{`>`}</div>
      <div className={styles.landingPage11Child1} onClick={onRectangleClick} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-7@2x.png" />
      <div className={styles.profile}>Profile</div>
    </div>
  );
};

export default LandingPage1;
