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
        <img className={styles.boyIcon} alt="" src="./boy.svg" />
        <img className={styles.picture21Icon} alt="" src="./picture2-1@2x.png" />
        <img className={styles.logoIcon} alt="" src="./logo.svg" />
      </button>
    </div>
  );
};

export default Tweet;
