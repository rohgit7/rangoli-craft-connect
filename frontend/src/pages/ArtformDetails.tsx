import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ArtformDetails() {
  const { id } = useParams<{ id: string }>(); 
  const [artform, setArtform] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/artforms/byid/${id}`) 
      .then((res) => res.json())
      .then((data) => setArtform(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!artform) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-amber-800 mb-4">{artform.name}</h1>
      <p className="text-gray-600 italic mb-6">Origin: {artform.origin}</p>
      <img
        src={artform.img}
        alt={artform.name}
        className="rounded-lg shadow-md w-full max-h-96 object-cover mb-6"
      />
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">Overview</h2>
        <p>{artform.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">History</h2>
        <p>{artform.history}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">Techniques</h2>
        <p>{artform.techniques}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">Cultural Significance</h2>
        <p>{artform.significance}</p>
      </section>
      <div className="mt-8 flex justify-center">
        <button className="bg-amber-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-800 transition">
          Book Workshop
        </button>
      </div>
    </div>
  );
}

export default ArtformDetails;
