import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Link } from "react-router-dom";

//   const [img, setImg] = useState("");


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

    const navigate = useNavigate();
    const [form, setForm] = useState({
      name: "",
      location:"",
      job:"",
      school:"",
      email: "",
      password: "",
      confirmPassword: "",
    });

    function handleChange(e) {
        setForm((currentState)=>{
            return {...currentState, [e.target.name]: e.target.value}
        })
    };

    async function handleSubmit(e){
        try {

            e.preventDefault()
            const response = await api.post("/api/user/signup", form);
            console.log(response.data);
            navigate("/login")
        } catch (error) {
            
        }
    }

  return (
  <div className="bg-slate-900">
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign up
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">

                <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                            Name
                        </label>
                        <input type="text" name="name" required='true' onChange={handleChange} value={form.name} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="Location" className="block text-sm font-semibold text-gray-800">
                            Location
                        </label>
                        <input type="text" name="location" required='true' onChange={handleChange} value={form.location} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="Job" className="block text-sm font-semibold text-gray-800">
                            Job
                        </label>
                        <input type="text" name="job" required='true' onChange={handleChange} value={form.job} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="School" className="block text-sm font-semibold text-gray-800">
                            School
                        </label>
                        <input type="text" name='school' required='true' onChange={handleChange} value={form.school} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email" name="email" required='true' onChange={handleChange} value={form.email} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input type="password" name="password" required='true' onChange={handleChange} value={form.password} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
            
                    <div className="mt-6">
                        <button onSubmit={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link className="text-purple-700" to="/login" >Log In</Link>
                </p>
            </div>
        </div>
    </div>
  );
}
