import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postData, setPostData] = useState(
    JSON.parse(localStorage.getItem("FormData")) || [],
  );
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("FormData", JSON.stringify(postData));
  }, [postData]);

  const deletePost = (index) => {
    const copyArr = [...postData];
    copyArr.splice(index, 1);
    setPostData(copyArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit !== null) {
      const copyArr = [...postData];
      const copyEdit = { ...copyArr[edit] };
      copyEdit.title = title;
      copyEdit.description = description;
      copyArr[edit] = copyEdit;
      setPostData(copyArr);
      setEdit(null);
    } else {
      const copyArr = [...postData];
      copyArr.push({ title, description });
      setPostData(copyArr);
    }

    setTitle("");
    setDescription("");
  
  };

  return (
    <div className="bg-neutral-800 w-full h-screen flex items-center justify-center gap-6 p-6">
      <form onSubmit={handleSubmit} className="bg-zinc-700 p-6 rounded-md w-96 shrink-0">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
          placeholder="Enter your post title"
          className="p-2 rounded-md mb-4 w-full bg-amber-50 text-black border-none outline-none"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your post description"
          className="p-2 rounded-md mb-4 w-full bg-amber-50 text-black border-none outline-none"
        />
        <button
          type="submit"
          className={`${edit !== null ? "bg-yellow-500" : "bg-blue-500"} text-white px-8 py-2 rounded-md italic block mx-auto mt-2 cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out`}
        >
          {edit !== null ? "Update Post" : "Create Post"}
        </button>
      </form>
      <div className="w-96 max-h-[80vh] overflow-y-auto scrollbar-hide">
        <Card
          posts={postData}
          deleteHandler={deletePost}
          setEdit={setEdit}
          setTitle={setTitle}
          setDescription={setDescription}
        />
      </div>
    </div>
  );
};

export default App;
