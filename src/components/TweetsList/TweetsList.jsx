import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tweet from '../Tweet/Tweet';

function TweetsList() {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchTweets = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://63ebe5f3be929df00ca4038a.mockapi.io/tweets?page=${page}&limit=3`);
      setTweets((prevTweets) => [...prevTweets, ...response.data]);
      if (response.data.length === 0) {
        setIsLastPage(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets, page]);

  return (
    <div>
      <h1>Tweets</h1>
      <ToastContainer />
      {!isError && (
        <ul>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
          {!isLastPage && !isLoading && <button onClick={handleLoadMore}>Load More</button>}
        </ul>
      )}

      {isLoading && <ReactLoading type="spin" color="#1538ff" height={40} width={40} />}
    </div>
  );
}
export default TweetsList;
