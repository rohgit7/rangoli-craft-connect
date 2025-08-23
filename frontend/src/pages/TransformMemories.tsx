import React, { useState } from "react";

const TransformMemories = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [artform, setArtform] = useState("");
  const [artist, setArtist] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("digital");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Photo submitted with:\nArtform: ${artform}\nArtist: ${artist}\nDelivery: ${deliveryOption}`
    );
  };

  const artists = [
    {
      name: "Anjali Verma",
      artform: "Madhubani",
      img: "https://i.ibb.co/tpW3xLs/madhubani.jpg",
      desc: "Anjali specializes in vibrant Madhubani paintings inspired by mythology and nature.",
    },
    {
      name: "Ramesh Kumar",
      artform: "Warli",
      img: "https://i.ibb.co/f0Kz4Nt/warli.jpg",
      desc: "Ramesh brings simplicity and rhythm to life with traditional Warli art.",
    },
    {
      name: "Kavita Sharma",
      artform: "Gond",
      img: "https://i.ibb.co/F4mRyD6/gond.jpg",
      desc: "Kavita’s Gond art blends tribal stories with modern interpretations.",
    },
    {
      name: "Harish Chauhan",
      artform: "Pithora",
      img: "https://i.ibb.co/6yFM7f0/pithora.jpg",
      desc: "Harish creates detailed Pithora ritual paintings to celebrate traditions.",
    },

  {
    name: "Anjali Verma",
    artform: "Madhubani",
    img: "https://i.ibb.co/tpW3xLs/madhubani.jpg",
    desc: "Anjali specializes in vibrant Madhubani paintings inspired by mythology and nature.",
  },
  {
    name: "Ramesh Kumar",
    artform: "Warli",
    img: "https://i.ibb.co/f0Kz4Nt/warli.jpg",
    desc: "Ramesh brings simplicity and rhythm to life with traditional Warli art.",
  },
  {
    name: "Kavita Sharma",
    artform: "Gond",
    img: "https://i.ibb.co/F4mRyD6/gond.jpg",
    desc: "Kavita’s Gond art blends tribal stories with modern interpretations.",
  },
  {
    name: "Harish Chauhan",
    artform: "Pithora",
    img: "https://i.ibb.co/6yFM7f0/pithora.jpg",
    desc: "Harish creates detailed Pithora ritual paintings to celebrate traditions.",
  },
  {
    name: "Anjali Verma",
    artform: "Madhubani",
    img: "https://i.ibb.co/tpW3xLs/madhubani.jpg",
    desc: "Anjali specializes in vibrant Madhubani paintings inspired by mythology and nature.",
  },
  {
    name: "Ramesh Kumar",
    artform: "Warli",
    img: "https://i.ibb.co/f0Kz4Nt/warli.jpg",
    desc: "Ramesh brings simplicity and rhythm to life with traditional Warli art.",
  },
  {
    name: "Kavita Sharma",
    artform: "Gond",
    img: "https://i.ibb.co/F4mRyD6/gond.jpg",
    desc: "Kavita’s Gond art blends tribal stories with modern interpretations.",
  },
  {
    name: "Harish Chauhan",
    artform: "Pithora",
    img: "https://i.ibb.co/6yFM7f0/pithora.jpg",
    desc: "Harish creates detailed Pithora ritual paintings to celebrate traditions.",
  },
  {
    name: "Anjali Verma",
    artform: "Madhubani",
    img: "https://i.ibb.co/tpW3xLs/madhubani.jpg",
    desc: "Anjali specializes in vibrant Madhubani paintings inspired by mythology and nature.",
  },
  {
    name: "Ramesh Kumar",
    artform: "Warli",
    img: "https://i.ibb.co/f0Kz4Nt/warli.jpg",
    desc: "Ramesh brings simplicity and rhythm to life with traditional Warli art.",
  },
  {
    name: "Kavita Sharma",
    artform: "Gond",
    img: "https://i.ibb.co/F4mRyD6/gond.jpg",
    desc: "Kavita’s Gond art blends tribal stories with modern interpretations.",
  },
  {
    name: "Harish Chauhan",
    artform: "Pithora",
    img: "https://i.ibb.co/6yFM7f0/pithora.jpg",
    desc: "Harish creates detailed Pithora ritual paintings to celebrate traditions.",
  },


  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-amber-800 mb-6">
        Transform Memories into Folk Art
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Upload your cherished photo, select an artform & artist, and receive a
        personalized folk artwork as a digital copy or framed delivery.
      </p>

      {/* Upload + Selection Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        {/* Upload Photo */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Upload Your Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border-2 border-dashed border-amber-400 rounded-lg p-3 cursor-pointer bg-amber-50 hover:bg-amber-100"
          />
          {photo && (
            <p className="text-sm text-green-700 mt-2">
              Selected: {photo.name}
            </p>
          )}
        </div>

        {/* Choose Artform */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Choose Folk Artform
          </label>
          <select
            value={artform}
            onChange={(e) => setArtform(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-400"
          >
            <option value="">-- Select Artform --</option>
            <option value="Madhubani">Madhubani</option>
            <option value="Warli">Warli</option>
            <option value="Gond">Gond</option>
            <option value="Pithora">Pithora</option>
          </select>
        </div>

        {/* Choose Artist */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Choose Artist
          </label>
          <select
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-400"
          >
            <option value="">-- Select Artist --</option>
            {artists.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name} ({a.artform})
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Option */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Delivery Option
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="digital"
                checked={deliveryOption === "digital"}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              Digital Copy
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="framed"
                checked={deliveryOption === "framed"}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              Framed Delivery
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-600 text-white font-semibold py-3 rounded-xl hover:bg-amber-700 transition"
        >
          Submit Request
        </button>
      </form>

      {/* Meet Our Artists Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">
          Meet Our Artists
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={artist.img}
                alt={artist.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-amber-700">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{artist.artform}</p>
                <p className="text-gray-700">{artist.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TransformMemories;
