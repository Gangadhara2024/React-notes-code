// import React, { useEffect, useState } from "react";
// import { fetchWeatherReport, getLocation } from "./report";

// export const Fetch = () => {
//   const [apistatus, setApistatus] = useState("init");
//   const [report, setReport] = useState(null);
//   const [unit, setUnit] = useState("c");

//   const toggleunit = () => {
//     setUnit(unit === "c" ? "f" : "c");
//   };

//   useEffect(() => {
//     // fetch location
//     // fetch report
//     (async function () {
//       setApistatus("pending");
//       const location = await getLocation();
//       const { success, data } = await fetchWeatherReport(location.coords);
//       if (success) {
//         setReport(data);
//         setApistatus("success");
//       } else {
//         setApistatus("error");
//       }
//     })();
//   }, []);

//   if (apistatus === "init" || apistatus === "pending") {
//     return <p>Loading...</p>;
//   }

//   if (apistatus === "error") {
//     return <button>Retry...</button>;
//   }
//   return (
//     <div className="App">
//       <h2>Visakhapatnam</h2>
//       <div className="weather-report">
//         <div className="left">
//           <img src="cloud.png" alt="cloud" width="100px" height="100px" />
//           <div className="temp">
//             <h2>{report.temp} </h2>
//             <div>
//               <button onClick={toggleunit} disabled={unit === "f"}>
//               °C
//               </button>
//               <span>|</span>
//               <button onClick={toggleunit} disabled={unit === "c"}>
//               °F
//               </button>
//             </div>
//           </div>
//           <div className="params">
//             <span>Humidity: {report.humidity} </span>
//             <span>Wind speed: {report.windspeed} </span>
//           </div>
//         </div>
//         <div className="right">
//           <h3>Weather</h3>
//           <span>city: {report.city} </span>
//           <span>{report.main} </span>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { fetchWeatherReport, geoLocation } from "./report";

export const Fetch = () => {
  const [apistatus, setApistatus] = useState("init");
  const [report, setReport] = useState();

  useEffect(() => {
    (async function () {
      setApistatus("pending");
      const location = await geoLocation();
      const { success, data } = await fetchWeatherReport(location.coords);
      if (success) {
        setApistatus("success");
        setReport(data);
      } else {
        setApistatus("error");
      }
    })();
  }, []);

  if (apistatus === "init" || apistatus === "pending") {
    return <h1>Loading.... </h1>;
  }
  if (apistatus === "error") {
    return <button>Retry...</button>;
  }

  return (
    <div>
      <div className="App">
        <h2>{report.city} </h2>
        <div className="weather-report">
          <div className="left">
            <img src="cloud.png" alt="cloud" width="100px" height="100px" />
            <div className="temp">
              <h2>{report.temp} </h2>
              <div>
                <button>°C</button>
                <span>|</span>
                <button>°F</button>
              </div>
            </div>
            <div className="params">
              <span>Humidity: {report.humidity} </span>
              <span>Wind speed: {report.windspeed} </span>
            </div>
          </div>
          <div className="right">
            <h3>Weather</h3>
            <span>city: {report.city} </span>
            <span>{report.main} </span>
          </div>
        </div>
      </div>
    </div>
  );
};
