import React from "react";
import { useParams } from "react-router";

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-screen bg-neutral-800 flex flex-col items-center justify-center gap-3">
      <h1 className="text-5xl font-bold text-white">Course Details Page</h1>
      <h2 className="text-2xl font-bold text-orange-500">{id}</h2>
    </div>
  );
};

export default CourseDetails;
