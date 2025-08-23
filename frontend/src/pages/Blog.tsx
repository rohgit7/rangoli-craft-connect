import React, { useState } from "react";

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "The Story Behind Warli Art",
      author: "Ananya Sharma",
      category: "Warli",
      date: "Aug 10, 2025",
      image: "https://source.unsplash.com/800x400/?tribal,art",
      excerpt:
        "Warli paintings, a tribal art form from Maharashtra, depict social life and harmony with nature...",
    },
    {
      id: 2,
      title: "Madhubani: Colors of Mithila",
      author: "Rajeev Kumar",
      category: "Madhubani",
      date: "Aug 15, 2025",
      image: "https://source.unsplash.com/800x400/?folk,painting",
      excerpt:
        "Madhubani art uses fingers, twigs, and matchsticks to create intricate patterns of deities, flora, and fauna...",
    },
        {
      id: 1,
      title: "The Story Behind Warli Art",
      author: "Ananya Sharma",
      category: "Warli",
      date: "Aug 10, 2025",
      image: "https://source.unsplash.com/800x400/?tribal,art",
      excerpt:
        "Warli paintings, a tribal art form from Maharashtra, depict social life and harmony with nature...",
    },
    {
      id: 3,
      title: "Pithora Paintings: Spirit & Rituals",
      author: "Meena Patel",
      category: "Pithora",
      date: "Aug 18, 2025",
      image: "https://source.unsplash.com/800x400/?abstract,art",
      excerpt:
        "Pithora paintings, often performed as rituals, are created on walls to honor deities and spirits...",
    },
        {
      id: 1,
      title: "The Story Behind Warli Art",
      author: "Ananya Sharma",
      category: "Warli",
      date: "Aug 10, 2025",
      image: "https://source.unsplash.com/800x400/?tribal,art",
      excerpt:
        "Warli paintings, a tribal art form from Maharashtra, depict social life and harmony with nature...",
    },
    {
      id: 3,
      title: "Pithora Paintings: Spirit & Rituals",
      author: "Meena Patel",
      category: "Pithora",
      date: "Aug 18, 2025",
      image: "https://source.unsplash.com/800x400/?abstract,art",
      excerpt:
        "Pithora paintings, often performed as rituals, are created on walls to honor deities and spirits...",
    },
  ];

  const categories = ["All", "Warli", "Madhubani", "Pithora"];

  const filteredBlogs = blogs.filter(
    (blog) =>
      (category === "All" || blog.category === category) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Folk Art Blog 
        </h1>
        <p className="text-gray-500 mt-2">
          Discover stories, traditions, and the beauty of Indian folk arts.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 p-2 border rounded-lg shadow-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg shadow-sm"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
