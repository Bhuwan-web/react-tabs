import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Tab from "./Tab";
// import useFetch from "./usefetch";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [tab, setTab] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        return setTab(data);
      });
  }, [isLoading]);

  // setTab(data);
  return (
    <main className="section">
      <header className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </header>
      {tab.map((d) => {
        console.log(d);
        return <Tab tab={d} key={d.id} />;
      })}
    </main>
  );
}

export default App;
