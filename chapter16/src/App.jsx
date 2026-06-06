import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  const handleBtnClick = async () => {
    setIsLoading(true);
    setLoadedImagesCount(0);
    try {
      const res = await axios.get("https://picsum.photos/v2/list", {
        params: {
          page: page,
          limit: 10,
        },
      });
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleBtnClick();
  }, [page]);

  const handleImageLoad = () => {
    setLoadedImagesCount((prev) => prev + 1);
  };

  const showLoading = isLoading || data.length === 0 || loadedImagesCount < data.length;

  return (
    <div className="min-h-screen relative">
      {/* Loading Screen */}
      {showLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
          <div className="text-3xl text-pink-500 font-bold animate-pulse">Loading Images...</div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`px-5 transition-opacity duration-500 ${
          showLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-purple-900 shadow-lg rounded-xl overflow-hidden flex flex-col"
            >
              <img
                className="w-full h-64 object-cover"
                src={item.download_url}
                alt={item.author}
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
              <div className="p-5 flex-grow flex items-center justify-center">
                <h2 className="text-center font-bold text-xl text-white">
                  {item.author}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 my-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="cursor-pointer bg-pink-500 hover:bg-pink-600 transition-all duration-300 ease-in-out text-white font-bold rounded-xl px-6 py-3 min-w-[100px]"
          >
            Prev
          </button>
          <span className="text-white font-bold text-xl">{page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="cursor-pointer bg-pink-500 hover:bg-pink-600 transition-all duration-300 ease-in-out text-white font-bold rounded-xl px-6 py-3 min-w-[100px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
