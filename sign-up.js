import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./sign-up-page.module.css";

const SignUpPage = () => {
  const router = useRouter();

  const onAlreadyHaveAnClick = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <div className={styles.signUpPage11}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.signUpPage11Child} />
      <div className={styles.aSuccessfulCareerContainer}>
        <p className={styles.aSuccessful}>{`A  SUCCESSFUL `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`“CAREER” `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`IS JUST `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>ONE STEP AWAY</p>
      </div>
      <img
        className={styles.signUpPage11Item}
        alt=""
        src="/rectangle-8@2x.png"
      />
      <div className={styles.career1}>carEER</div>
      <div className={styles.getYourDream}>Get your dream job</div>
      <div className={styles.createNewAccount}>Create New Account</div>
      <div className={styles.signUpPage11Inner} />
      <div className={styles.loginWithFacebook}>Login with Facebook</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.name}>Name</div>
      <div className={styles.signUpPage11Child1} />
      <div className={styles.password}>Password</div>
      <div className={styles.signUpPage11Child2} />
      <div className={styles.mobileNumber}>Mobile Number</div>
      <div className={styles.signUpPage11Child3} />
      <div className={styles.email}>email</div>
      <div className={styles.signUpPage11Child4} />
      <div
        className={styles.alreadyHaveAnContainer}
        onClick={onAlreadyHaveAnClick}
      >
        <span>{`Already have an account? `}</span>
        <span className={styles.login}>Login</span>
      </div>
      <div className={styles.or}>OR</div>
      <div className={styles.loginWithGoogle}>Login with Google</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-23@2x.png" />
      <img
        className={styles.signUpPage11Child5}
        alt=""
        src="/ellipse-24@2x.png"
      />
    </div>
  );
};

export default SignUpPage;
