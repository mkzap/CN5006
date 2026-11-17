import { useState, useEffect } from "react";
import rainy from "./rainy.png";
import Cloudy from "./Cloudy.png";
import sunny from "./sunny.png"; 

function WeatherCounter({ pic: selectedWeather }) {
 const [image, setImage] = useState(rainy);
 const [count, setCount] = useState(0);
 useEffect(() => {
 const emojiImages = {
 rainy,
 Cloudy,
 sunny,
 };
 setImage(emojiImages[selectedWeather] || rainy);
 }, [selectedWeather]);
 const handleClick = () => {
 setCount((prevCount) => prevCount + 1);
 };
 return (
 <div className="App">
 <p>
 {selectedWeather}
 <button type="button" onClick={handleClick}>
 {count}
 <img src={image} width={100} height={100} alt={selectedWeather} />
 </button>
 </p>
 <p>&nbsp;</p>
 </div>
 );
}
export default WeatherCounter;
