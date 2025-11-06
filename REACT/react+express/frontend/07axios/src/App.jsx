import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/app")
      .then((res) => {
  
        setDogUrl(res.data.message);

      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {dogUrl ? (
        <img src={dogUrl} alt="Random Dog" className=" h-90 w-90 rounded-lg" />
      ) : (
        <p className="text-emerald-50">Loading...</p>
      )}
    </div>
  );
}

export default App;
