import { useEffect, useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=43190718-77d40a6c82bd5b22cb69fed35&q=${term}&image_type=photo`).then((res) => res.json())
    .then((data) => {
       setImages(data.hits)
       setisLoading((prev)=>!prev)
       setisLoading(false);
    })
    .catch((err) => console.error(err));
  }, [term]); 
  return (
    <div className="container mx-auto">
      <ImageSearch searchTerm={(text)=>{setTerm(text)}} />
      {!isLoading && images.length===0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found !</h1> }
     { isLoading ?( <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>) :(<div className="grid grid-cols-3 gap-4">
        {images.map( (card)=>(

         <ImageCard key={card.id} src={card.webformatURL} user={card.user} views={card.views} downloads={card.downloads} likes={card.likes} tags={card.tags.split(',')} />
        ) )}

      </div>)}
    </div>
  );
}

export default App;
