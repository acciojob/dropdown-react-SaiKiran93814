import React, { useState } from "react";
import "../styles/App.css"; 
// Optional styling file

const App = () => {
  const data = [
    {
      name: "Madhya Pradesh",
      description: "Heart of India, known for its heritage sites.",
      cities: [
        {
          name: "Bhopal",
          description: "The capital city of Madhya Pradesh.",
          landmarks: [
            {
              name: "Upper Lake",
              description: "A large lake known for its scenic beauty.",
            },
            {
              name: "Van Vihar",
              description: "A national park located in Bhopal.",
            },
          ],
        },
        {
          name: "Indore",
          description: "Commercial capital of the state.",
          landmarks: [
            {
              name: "Rajwada Palace",
              description: "Historic palace of the Holkars.",
            },
          ],
        },
      ],
    },
    {
      name: "Maharashtra",
      description: "Known for Mumbai and Bollywood.",
      cities: [
        {
          name: "Mumbai",
          description: "The financial capital of India.",
          landmarks: [
            {
              name: "Gateway of India",
              description: "Iconic arch-monument built during the 20th century.",
            },
          ],
        },
      ],
    },
  ];

  // State hooks
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const handleStateChange = (e) => {
    const newStateIndex = Number(e.target.value);
    setStateIndex(newStateIndex);
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  const handleCityChange = (e) => {
    const newCityIndex = Number(e.target.value);
    setCityIndex(newCityIndex);
    setLandmarkIndex(0);
  };

  const handleLandmarkChange = (e) => {
    setLandmarkIndex(Number(e.target.value));
  };

  const currentState = data[stateIndex];
  const currentCity = currentState.cities[cityIndex];
  const currentLandmark = currentCity.landmarks[landmarkIndex];

  return (
    <div className="App">
      {/* Dropdowns */}
      <select id="state" value={stateIndex} onChange={handleStateChange}>
        {data.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      <select id="city" value={cityIndex} onChange={handleCityChange}>
        {currentState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      <select id="landmark" value={landmarkIndex} onChange={handleLandmarkChange}>
        {currentCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      {/* Selected Details */}
      <div>
        <h2 id="state-name">{currentState.name}</h2>
        <p id="state-description">{currentState.description}</p>

        <h2 id="city-name">{currentCity.name}</h2>
        <p id="city-description">{currentCity.description}</p>

        <h2 id="landmark-name">{currentLandmark.name}</h2>
        <p id="landmark-description">{currentLandmark.description}</p>
      </div>
    </div>
  );
};

export default App;
