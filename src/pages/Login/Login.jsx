import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";


export function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const {setLoggedInUser} = useContext(AuthContext);


  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("api/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div className="bg-slate-900">
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email"
                            required={true}
                            name="email"
                            onChange={handleChange}
                            value={form.email} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800" pattern="/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm">
                            Password
                        </label>
                        <input type="password"
                            name="password"
                            onChange={handleChange}
                            value={form.password}
                            required={true} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mt-6">
                        <button onSubmit={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link className="text-purple-700" to="/signup" >Sign</Link>
                </p>
            </div>
        </div>
    </div>









    // <form onSubmit={handleSubmit}>
    //   <label>Email:</label>
    //   <input


    //     type="email"
    //     name="email"
    //     value={form.email}
    //     onChange={handleChange}
    //   />
    //   <label>Senha:</label>
    //   <input
    //     type="password"
    //     name="password"
    //     value={form.password}
    //     onChange={handleChange}
    //   />

    //   <button
    //     type="submit"
    //     className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
    //   text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
    //   focus-visible:outline-2 focus-visible:outline-offset-2
    //   focus-visible:outline-indigo-600"
    //   >
    //     Entrar!
    //   </button>
    // </form>
  );
}
