import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // your main css (if any)

function Cat() {
  const [image, setImage] = useState("https://cataas.com/cat?position=center");

  // Function to fetch a new random dog image
  const fetchImage = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImage(res.data.message);
    } catch (err) {
      console.error("Error fetching image:", err);
    }
  };

  // Initial image fetch on mount
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="cat-container">
      <h1>Random Images</h1>
      <img src={image} alt="Random Animal" className="cat-image" />
      <button onClick={fetchImage} className="change-btn">
        Change Image
      </button>
    </div>
  );
}

export default Cat;
