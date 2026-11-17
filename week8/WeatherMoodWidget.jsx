import { useState, useEffect } from "react";
import rainy from "./rainy.png";
import Cloudy from "./Cloudy.png";
import sunny from "./sunny.png"; 

function WeatherCounter({ pic: selectedEmoji }) {
 const [image, setImage] = useState(rainy);
 const [count, setCount] = useState(0);
 useEffect(() => {
 const emojiImages = {
 rainy,
 Cloudy,
 sunny,
 };
 setImage(emojiImages[selectedEmoji] || rainy);
 }, [selectedEmoji]);
 const handleClick = () => {
 setCount((prevCount) => prevCount + 1);
 };
 return (
 <div className="App">
 <p>
 {selectedEmoji}
 <button type="button" onClick={handleClick}>
 {count}
 <img src={image} width={100} height={100} alt={selectedEmoji} />
 </button>
 </p>
 <p>&nbsp;</p>
 </div>
 );
}
export default WeatherCounter;