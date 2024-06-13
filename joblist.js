import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./job-list.module.css";

const JobList = () => {
  const router = useRouter();

  const onHomeEmployeesClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProfileTextClick = useCallback(() => {
    router.push("/landing-page1");
  }, [router]);

  return (
    <div className={styles.jobList}>
      <div className={styles.jobListChild} data-scroll-to="rectangle" />
      <div className={styles.iosDeveloper}>IOS Developer</div>
      <div className={styles.androidDeveloper}>Android Developer</div>
      <div className={styles.trendingJobKeywords}>Trending job keywords</div>
      <div className={styles.catagory}>Catagory ⌄</div>
      <div className={styles.career}>carEER</div>
      <div className={styles.getYourDream}>Get your dream job</div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.jobListItem} alt="" src="/rectangle-8@2x.png" />
      <div className={styles.homeEmployees} onClick={onHomeEmployeesClick}>
        Home Employees ⌄ Candidates ⌄ Pages ⌄ Contacts
      </div>
      <div className={styles.login}>Login</div>
      <div className={styles.register}>Register</div>
      <div className={styles.searchForMoreContainer}>
        <p className={styles.searchForMore}>SEARCH for more than</p>
        <p className={styles.searchForMore}>50,000 JOBS</p>
      </div>
      <div className={styles.jobListInner} />
      <div className={styles.location}>Location ⌄</div>
      <div className={styles.searchKeywords}>Search keywords...</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.search}>Search</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-13@2x.png" />
      <div className={styles.jobListChild1} />
      <div className={styles.jobListChild2} />
      <img className={styles.jobListChild3} alt="" src="/rectangle-16.svg" />
      <div className={styles.jobListChild4} />
      <div className={styles.webDesigner}>Web Designer</div>
      <div className={styles.webDeveloper}>Web Developer</div>
      <div className={styles.jobListChild5} />
      <div className={styles.jobListChild6} />
      <b className={styles.latestJobs}>Latest Jobs</b>
      <b className={styles.recentJobs}>Recent Jobs</b>
      <div className={styles.jobListChild7} />
      <div className={styles.phpDeveloper}>PHP Developer</div>
      <img className={styles.jobListChild8} alt="" src="/rectangle-21.svg" />
      <div className={styles.productManager}>Product Manager</div>
      <div className={styles.jobListChild9} />
      <div className={styles.durgapurWest}>Durgapur , West Bengal</div>
      <div className={styles.raniganjWest}>Raniganj , West Bengal</div>
      <div className={styles.jobListChild10} />
      <div className={styles.mumbaiMaharashtra}>Mumbai , Maharashtra</div>
      <div className={styles.jobListChild11} />
      <div className={styles.jobListChild12} />
      <div className={styles.jobListChild13} />
      <div className={styles.jobListChild14} />
      <div className={styles.jobListChild15} />
      <div className={styles.jobListChild16} />
      <div className={styles.jobListChild17} />
      <div className={styles.partTime}>Part Time</div>
      <div className={styles.jobListChild18} />
      <div className={styles.jobListChild19} />
      <div className={styles.jobListChild20} />
      <div className={styles.jobListChild21} />
      <div className={styles.jobListChild22} />
      <div className={styles.ellipseDiv} />
      <div className={styles.div}>♥</div>
      <div className={styles.div}>♥</div>
      <div className={styles.div}>♥</div>
      <div className={styles.div}>♥</div>
      <div className={styles.div}>♥</div>
      <div className={styles.div}>♥</div>
      <div className={styles.jobListChild23} />
      <div className={styles.fullTime}>Full Time</div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.jobListChild24} />
      <div className={styles.kolkataSector}>Kolkata , Sector V</div>
      <div className={styles.applyNow}>Apply Now</div>
      <div className={styles.jobListChild25} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-8@2x.png" />
      <div className={styles.profile} onClick={onProfileTextClick}>
        Profile
      </div>
      <div className={styles.jobListChild26} />
      <div className={styles.div6}>❤️</div>
      <div className={styles.div7}>️</div>
      <div className={styles.div}>♥</div>
      <div className={styles.jobListChild27} />
      <div className={styles.jobListChild28} />
      <div className={styles.jobListChild29} />
      <div className={styles.jobListChild30} />
      <div className={styles.div9}>❤️</div>
      <div className={styles.jobListChild31} />
      <div className={styles.div10}>❤️</div>
      <div className={styles.div11}>❤️</div>
      <div className={styles.jobListChild32} />
      <div className={styles.div12}>❤️</div>
      <img className={styles.jobListChild33} alt="" src="/ellipse-16@2x.png" />
      <div className={styles.jobListChild34} />
      <img className={styles.jobListChild35} alt="" src="/ellipse-18@2x.png" />
      <div className={styles.assistantPhpDeveloper}>
        Assistant PHP Developer
      </div>
      <div className={styles.jobListChild36} />
      <img className={styles.jobListChild37} alt="" src="/ellipse-20@2x.png" />
      <div className={styles.jobListChild38} />
      <div className={styles.jobListChild39} />
      <div className={styles.jobListChild40} />
      <div className={styles.jobListChild41} />
      <div className={styles.applyNow1}>Apply Now</div>
      <div className={styles.fullTime1}>Full Time</div>
      <div className={styles.jobListChild42} />
      <div className={styles.applyNow2}>Apply Now</div>
      <div className={styles.jobListChild43} />
      <div className={styles.applyNow3}>Apply Now</div>
      <div className={styles.freshIntern}>Fresh Intern</div>
    </div>
  );
};

export default JobList;
