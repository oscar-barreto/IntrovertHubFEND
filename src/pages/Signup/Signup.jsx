import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Login } from "../Login/Login";

// export function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [img, setImg] = useState("");

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleImage(e) {
//     setImg(e.target.files[0]);
//   }

//   async function handleUpload() {
//     try {
//       const uploadData = new FormData();
//       uploadData.append("picture", img);

//       const response = await api.post("/upload-image", uploadData);

//       return response.data.url;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const imgURL = await handleUpload();
//       await api.post("/user/signup", { ...form, img: imgURL });

//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="formName">Nome:</label>
//       <input
//         id="formName"
//         name="name"
//         type="text"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <label htmlFor="formImg">Sua foto de perfil:</label>
//       <input type="file" id="formImg" onChange={handleImage} />

//       <label htmlFor="formEmail">E-mail:</label>
//       <input
//         id="formEmail"
//         name="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <label htmlFor="formPassword">Senha:</label>
//       <input
//         id="formPassword"
//         name="password"
//         type="password"
//         value={form.password}
//         onChange={handleChange}
//       />
//       <label htmlFor="formConfirmPassword">Confirmação de senha</label>
//       <input
//         id="formConfirmPassword"
//         type="password"
//         name="confirmPassword"
//         value={form.confirmPassword}
//         onChange={handleChange}
//       />
//       <button
//         type="submit"
//         className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
//       text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
//       focus-visible:outline-2 focus-visible:outline-offset-2
//       focus-visible:outline-indigo-600"
//       >
//         Cadastrar
//       </button>
//     </form>
//   );
// }



export function Signup() {

  return (
  <div className="bg-slate-900">
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign up
                </h1>
                <form className="mt-6">

                <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="Location"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="Job"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Job
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="School"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            School
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
            
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Log In
                    </a>
                </p>
            </div>
        </div>
    </div>
  );
}
