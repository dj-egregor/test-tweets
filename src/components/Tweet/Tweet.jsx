import styles from './tweet.module.css';
const Tweet = () => {
  return (
    <div className={styles.followParent}>
      <button className={styles.follow}>
        <button className={styles.button}>
          <div className={styles.follow1}>Follow</div>
        </button>
        <div className={styles.tweets}> 777 tweets</div>
        <div className={styles.followers}>100,500 Followers</div>
        <div className={styles.followChild} />
        <img className={styles.boyIcon} alt="" src="/boy.svg" />
        <img className={styles.picture21Icon} alt="" src="/picture2-1@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
      </button>
      {/* <div className={styles.following}>
        <div className={styles.tweets1}> 777 tweets</div>
        <div className={styles.followers1}>100,501 Followers</div>
        <div className={styles.followChild} />
        <img className={styles.boyIcon} alt="" src="/boy1.svg" />
        <img className={styles.picture21Icon} alt="" src="/picture2-1@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        <div className={styles.button1}>
          <div className={styles.following1}>Following</div>
        </div>
      </div> */}
    </div>
  );
};

export default Tweet;
