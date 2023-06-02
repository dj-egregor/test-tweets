import styles from './tweet.module.css';
const Tweet = () => {
  return (
    <div className={styles.followParent}>
      <div className={styles.follow}>
        <button className={styles.button}>
          Follow
          {/* <div className={styles.follow1}>Follow</div> */}
        </button>
        <div className={styles.tweets}> 777 tweets</div>
        <div className={styles.followers}>100,500 Followers</div>
        <div className={styles.followChild} />

        <div className={styles.outerRing}>
          <div className={styles.innerRing}></div>
        </div>

        {/* <img className={styles.boyIcon} alt="" src="./boy.svg" /> */}
        <img className={styles.picture21Icon} alt="" src="./picture2-1@2x.png" />
        <img className={styles.logoIcon} alt="" src="./logo.svg" />
      </div>
    </div>
  );
};

export default Tweet;
