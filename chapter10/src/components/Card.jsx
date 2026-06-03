const Card = ({ posts, deleteHandler, setEdit, setTitle, setDescription }) => {
  return (
    <div className="w-full max-w-md bg-zinc-700 p-6 rounded-md">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div
            key={index}
            className="relative mb-4 rounded-md border border-neutral-600 bg-neutral-800 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-white text-lg font-semibold">
                {index + 1}. {post.title}
              </h2>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => deleteHandler(index)}
                  aria-label="Delete post"
                  title="Delete post"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-red-500 text-white cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setTitle(post.title);
                    setDescription(post.description);
                    setEdit(index);
                  }}
                  type="button"
                  aria-label="Edit post"
                  title="Edit post"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-yellow-500 text-white cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="mt-2 text-neutral-200">{post.description}</p>
          </div>
        ))
      ) : (
        <p className="text-neutral-300">
          No posts yet. Add a post using the form above.
        </p>
      )}
    </div>
  );
};

export default Card;
