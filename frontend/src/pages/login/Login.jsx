import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs.username, inputs.password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-transparent">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-teal-500 ml-2">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-teal-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="btn btn-block bg-teal-500 text-white border-none btn-sm mt-4"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin text-white" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR LOGIN COMPONENT

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-transparent">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-teal-500 ml-2">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-teal-600 mt-2 inline-block"
//           >
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block bg-teal-500 text-white border-none btn-sm mt-4">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
