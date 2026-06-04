import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  console.log("App Rendering");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-neutral-400 text-sm">
            Fill in the details below to get started
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-neutral-300 text-sm font-medium">
              Full Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be at most 20 characters long",
                },
              })}
              type="text"
              placeholder="John Doe"
              className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-neutral-300 text-sm font-medium">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email",
                },
                minLength: {
                  value: 5,
                  message: "Email must be at least 5 characters long",
                },
              })}
              
              placeholder="john@example.com"
              className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-neutral-300 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              // {...register("phone", {required: true})}
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits long",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be at most 10 digits long",
                },
              })}
              placeholder="+91 98765 43210"
              className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-neutral-300 text-sm font-medium">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
              placeholder="Write your message here..."
              rows={4}
              className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold rounded-lg px-4 py-3 cursor-pointer transition-all duration-200"
          >
            Create Account
          </button>

          <p className="text-center text-neutral-500 text-sm">
            Already have an account?{" "}
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
