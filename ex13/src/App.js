import React, { useEffect, useState } from "react";

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }

        const data = await response.json();

        if (!ignore) {
          setPosts(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setPosts([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [userId]);

  return (
    <section className="exercise">
      <h2>1. Data Fetching</h2>
      <p>Posts for User ID: {userId}</p>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div>
          {posts.map((post) => (
            <article className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return undefined;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <section className="exercise">
      <h2>2. Countdown Timer</h2>
      <p className="timer">Time Remaining: {timeRemaining}</p>
    </section>
  );
}

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="exercise">
      <h2>3. Window Resize Listener</h2>
      <p>
        Window size: {windowSize.width} x {windowSize.height}
      </p>
    </section>
  );
}

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <section className="exercise">
      <h2>4. Form Input Validation</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={isValid ? "" : "input-error"}
        placeholder="Enter at least 5 characters"
      />

      {!isValid && <p className="error-message">{errorMessage}</p>}
    </section>
  );
}

function App() {
  const [userId, setUserId] = useState(1);

  const validateInput = (value) => value.trim().length >= 5;

  return (
    <main className="container">
      <h1>Exercise 13 - useEffect</h1>

      <div className="user-control">
        <label htmlFor="userId">User ID: </label>
        <select
          id="userId"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>

      <UserPosts userId={userId} />
      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput
        validationFunction={validateInput}
        errorMessage="Input must contain at least 5 characters."
      />
    </main>
  );
}

export default App;
