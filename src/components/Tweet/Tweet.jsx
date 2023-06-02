import styles from './tweet.module.css';
const Tweet = ({ tweet }) => {
  return (
    <li className={styles.followParent}>
      <div className={styles.follow}>
        <button className={styles.button}>
          Follow
          {/* <div className={styles.follow1}>Follow</div> */}
        </button>
        <div className={styles.tweets}> {tweet.tweets} tweets</div>
        <div className={styles.followers}>{tweet.folovers} Followers</div>
        <div className={styles.followChild} />

        <div className={styles.outerRing}>
          <div className={styles.innerRing}></div>
        </div>

        <img className={styles.boyIcon} alt="" src={tweet.avatar} />
        <img className={styles.picture21Icon} alt="" src="./picture2-1@2x.png" />
        <img className={styles.logoIcon} alt="" src="./logo.svg" />
      </div>
    </li>
  );
};

export default Tweet;
