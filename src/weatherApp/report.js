// const apikey = "c8f60b1e3034540d1b158cb27d6f08a8";

// export function getLocation() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
// export async function fetchWeatherReport({ latitude, longitude }) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
//     );
//     const weatherReport = await response.json();
//     const FilterReport = {
//       temp: weatherReport.main.temp,
//       main: weatherReport.weather.main,
//       decription: weatherReport.weather.decription,
//       city: weatherReport.name,
//       humidity: weatherReport.main.humidity,
//       windspeed: weatherReport.wind.speed,
//     };
//     return { success: true, data: FilterReport };
//   } catch (error) {
//     alert("failed to fetch data");
//     return { success: false }
//   }
// }

// const dummy = [
//   {
//     coord: {
//       lon: 78.463,
//       lat: 17.4162,
//     },
//     weather: [
//       {
//         id: 802,
//         main: "Clouds",
//         description: "scattered clouds",
//         icon: "03d",
//       },
//     ],
//     base: "stations",
//     main: {
//       temp: 306.25,
//       feels_like: 309.35,
//       temp_min: 303.75,
//       temp_max: 306.25,
//       pressure: 1008,
//       humidity: 49,
//     },
//     visibility: 6000,
//     wind: {
//       speed: 1.54,
//       deg: 290,
//     },
//     clouds: {
//       all: 40,
//     },
//     dt: 1717666255,
//     sys: {
//       type: 1,
//       id: 9214,
//       country: "IN",
//       sunrise: 1717632664,
//       sunset: 1717679936,
//     },
//     timezone: 19800,
//     id: 1269843,
//     name: "Hyderabad",
//     cod: 200,
//   },
// ];

const apikey = "c8f60b1e3034540d1b158cb27d6f08a8";

export const geoLocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};
export const fetchWeatherReport = async ({ latitude, longitude }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
    );
    const weatherReport = await response.json();
    const FilterReport = {
      temp: weatherReport.main.temp,
      main: weatherReport.weather[0].main,
      decription: weatherReport.weather[0].decription,
      city: weatherReport.name,
      humidity: weatherReport.main.humidity,
      windspeed: weatherReport.wind.speed,
    };
    return { success: true, data: FilterReport };
  } catch (error) {
    alert("failed to fetch data");
    return { success: false };
  }
};
