// import React from "react";
// import { useRef } from "react";

// //In two-way binding using useState, React re-renders the component whenever the input value changes because the state is updated. If we don't need re-renders for every keystroke and only need the value later (for example, on form submission), we can use useRef, which stores the value without causing re-renders. However, useState should still be preferred when the UI needs to react to input changes.

// const App = () => {
//   console.log("app rendering");

//   const inputRef = useRef({});

//   console.log(inputRef);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current.name.value);
//     console.log(inputRef.current.email.value);
//     console.log(inputRef.current.phone.value);
//     console.log(inputRef.current.message.value);
//     // console.log(inputRef1.current.value);
//     // console.log(inputRef2.current.value);
//     // console.log(inputRef3.current.value);
//     // console.log(inputRef4.current.value);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
//       <div className="bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-md p-8">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
//           <p className="text-neutral-400 text-sm">
//             Fill in the details below to get started
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           {/* Full Name */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-neutral-300 text-sm font-medium">
//               Full Name
//             </label>
//             <input
//               // ref={inputRef1}
//               ref={(e) => (inputRef.current.name = e)}
//               type="text"
//               placeholder="John Doe"
//               className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-neutral-300 text-sm font-medium">
//               Email Address
//             </label>
//             <input
//               // // ref={inputRef2}
//               ref={(e) => (inputRef.current.email = e)}
//               type="email"
//               placeholder="john@example.com"
//               className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
//             />
//           </div>

//           {/* Phone */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-neutral-300 text-sm font-medium">
//               Phone Number
//             </label>
//             <input
//               // // ref={inputRef3}
//               ref={(e) => (inputRef.current.phone = e)}
//               type="tel"
//               placeholder="+91 98765 43210"
//               className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
//             />
//           </div>

//           {/* Message */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-neutral-300 text-sm font-medium">
//               Message
//             </label>
//             <textarea
//               // // ref={inputRef4}
//               ref={(e) => (inputRef.current.message = e)}
//               placeholder="Write your message here..."
//               rows={4}
//               className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200 resize-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-2 bg-blue-600 hover:bg-blue-500 glow-btn active:scale-95 text-white font-semibold rounded-lg px-4 py-3 cursor-pointer transition-all duration-200"
//           >
//             Create Account
//           </button>

//           {/* Login link */}
//           <p className="text-center text-neutral-500 text-sm">
//             Already have an account?{" "}
//             <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200">
//               Sign in
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  
  console.log("App rendering");
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
        <div className="bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-md p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-neutral-400 text-sm">
              Fill in the details below to get started
            </p>
          </div>

          <form
            onSubmit={handleSubmit((e) => console.log(e))}
            className="flex flex-col gap-5"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="John Doe"
                className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="john@example.com"
                className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+91 98765 43210"
                className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 text-sm font-medium">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Write your message here..."
                rows={4}
                className="bg-neutral-700 text-white placeholder-neutral-500 rounded-lg px-4 py-3 outline-none border border-neutral-600 focus:border-blue-500 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-500 glow-btn active:scale-95 text-white font-semibold rounded-lg px-4 py-3 cursor-pointer transition-all duration-200"
            >
              Create Account
            </button>

            {/* Login link */}
            <p className="text-center text-neutral-500 text-sm">
              Already have an account?{" "}
              <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
