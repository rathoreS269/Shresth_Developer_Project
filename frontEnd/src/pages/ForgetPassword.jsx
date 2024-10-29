import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //console.log('email is',email)
  // console.log(message)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      toast.success(data, { autoClose: 5000 });
    } catch (error) {
      toast.error("Something went wrong", { autoClose: 5000 });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-200">
          Send Reset Link
        </button>
      </form>
      {/* {message && (
        <div className="mt-4 p-2 text-green-800">
          {message}
        </div>
      )} */}
    </div>
  );
}
