// import styles from './tweet.module.css';
// const Tweet = ({ tweet }) => {
//   return (
//     <li className={styles.followParent}>
//       <div className={styles.follow}>
//         <button className={styles.button}>
//           Follow
//           {/* <div className={styles.follow1}>Follow</div> */}
//         </button>
//         <div className={styles.tweets}> {tweet.tweets} tweets</div>
//         <div className={styles.followers}>{tweet.folovers} Followers</div>
//         <div className={styles.followChild} />

//         <div className={styles.outerRing}>
//           <div className={styles.innerRing}></div>
//         </div>

//         <img className={styles.boyIcon} alt="" src={tweet.avatar} />
//         <img className={styles.picture21Icon} alt="" src="./picture2-1@2x.png" />
//         <img className={styles.logoIcon} alt="" src="./logo.svg" />
//       </div>
//     </li>
//   );
// };

// export default Tweet;

// import { useState } from 'react';
// import styles from './tweet.module.css';

// const Tweet = ({ tweet, handleFollowClick }) => {
//   const [isFollowing, setIsFollowing] = useState(tweet.following);

//   const handleClick = () => {
//     if (!isFollowing) {
//       handleFollowClick(tweet.id);
//       setIsFollowing(true);
//     }
//   };

//   return (
//     <li className={styles.followParent}>
//       <div className={styles.follow}>
//         <button className={isFollowing ? `${styles.button} ${styles.buttonFollowing}` : styles.button} onClick={handleClick}>
//           {isFollowing ? 'Following' : 'Follow'}
//         </button>
//         <div className={styles.tweets}> {tweet.tweets} tweets</div>
//         <div className={styles.followers}>{tweet.followers} Followers</div>
//         <div className={styles.followChild} />

//         <div className={styles.outerRing}>
//           <div className={styles.innerRing}></div>
//         </div>

//         <img className={styles.boyIcon} alt="" src={tweet.avatar} />
//         <img className={styles.picture21Icon} alt="" src="./picture2-1@2x.png" />
//         <img className={styles.logoIcon} alt="" src="./logo.svg" />
//       </div>
//     </li>
//   );
// };

// export default Tweet;
import { useState } from 'react';
import styles from './tweet.module.css';
import PropTypes from 'prop-types';

const Tweet = ({ tweet, handleFollowClick, handleUnfollowClick }) => {
  const [isFollowing, setIsFollowing] = useState(tweet.following);
  //   console.log(tweet);

  const handleButtonClick = async () => {
    if (isFollowing) {
      await handleUnfollowClick(tweet.id);
      setIsFollowing(false);
    } else {
      await handleFollowClick(tweet.id);
      setIsFollowing(true);
    }
  };

  return (
    <li className={styles.followParent}>
      <div className={styles.follow}>
        <button className={isFollowing ? `${styles.button} ${styles.buttonFollowing}` : styles.button} onClick={handleButtonClick}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <div className={styles.tweets}> {tweet.tweets} tweets</div>
        <div className={styles.followers}>{tweet.followers} Followers</div>
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

Tweet.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
  handleFollowClick: PropTypes.func.isRequired,
  handleUnfollowClick: PropTypes.func.isRequired,
};

export default Tweet;
