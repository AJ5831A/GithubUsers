import { useEffect, useState } from "react";

const useGitHubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setUser(null);

    const fetchUser = async () => {
      try {
        const API_URL = `https://api.github.com/users/${username}`;

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("User not found");

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  return { user, loading, error };
};

export default useGitHubUser;