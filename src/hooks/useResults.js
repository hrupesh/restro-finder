import yelp from "../api/yelp";
import { useState, useEffect } from "react";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "New York",
        },
      });
      setResults(response.data.businesses);
      console.log(results);
    } catch (e) {
      setError("Something went wrong 🥴");
    }
  };

  useEffect(() => {
    searchAPI("rupesh");
  }, []);

  return [searchAPI, results, error];
};
