import React, { useState, useEffect, useCallback } from "react";

import ArrivalsList from "./components/ArrivalsList";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import "./App.css";
import Line from "./components/Line";
import Layout from "./components/layout/Layout"


//add refresh every 30 sec
//add pages for results

function App() {
  const [arrivals, setArrivals] = useState([]);
  const [lines, setLines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    //Get request to receive tube lines
    const fetchStationsHandler = useCallback(async () => {
      setIsLoading(true); 
      setError(null);
      try {
        const response = await fetch(
          "https://api.tfl.gov.uk/line/mode/tube"
        ); 
  
        if (!response.ok) {
          throw new Error(
            "We coudn't get the tube lines from the API."
          );
        }
  
        const data = await response.json();

        // Format and store API response
        const loadedStations = [];
        for (const key in data) {
          loadedStations.push({
              id: data[key].id,
              name: data[key].name,
            });

        }
        setLines(loadedStations);

      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);

    // http requests are side effects, so we use useEffect to get the data on page load
  useEffect(() => {
    fetchStationsHandler();
  }, [fetchStationsHandler]);

  // Request selected line data
  const lineChangeHandler = async (line) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://api.tfl.gov.uk/line/" + line + "/arrivals"
        ); 
  
        if (!response.ok) {
          throw new Error(
            "Something went wrong! Please try again later."
          );
        }
  
        const data = await response.json();
  
        // Only format and store the most recent 15 arrivals
        const loadedArrivals = [];
        for (const key in data) {
          if(key < 15) {
            loadedArrivals.push({
              id: data[key].id + key,
              data: data[key],
            });
          }
        }
  
        setArrivals(loadedArrivals); 
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
  };

  // Manage content displayed based on app state
  let content = <p>No arrivals found.</p>;

  if (arrivals.length > 0) {
    content = <ArrivalsList arrivals={arrivals} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <Layout>
      <section>
        <Line lines={lines} onChangeFilter={lineChangeHandler} />
      </section>
      <section>{content}</section>
    </Layout>
  );
}

export default App;
