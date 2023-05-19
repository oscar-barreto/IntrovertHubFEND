import { Link } from "react-router-dom";
import { api } from "../../api/api";
import alelindo from "../../assets/images/alelindo.jpeg"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContext, useState } from "react";
import { PostDetails } from "../PostsDetails/PostsDetails";



export function Posts(){
        const [form, setForm] = useState({
          title: "",
          postBody: "",
        });

    function handleChange(e) {
        setForm((currentState) => {
          return { ...currentState, [e.target.name]: e.target.value };
        });
      }

      async function handleSubmit(e) {
        try {
          e.preventDefault();
          await api.post("/api/post", form);
        } catch (e) {
          console.log(e);
        }
      }


    return (
        <>
        <Navbar/>
        <form className="m-3 p-2" style={{height:"300px"}} onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={form.title}
      />
      <label>Body:</label>
      <input
        type="text"
        name="postBody"
        onChange={handleChange}
        value={form.postBody}
      />
      <button onSubmit={handleSubmit} className="bg-purple-700 text-white p-1 m-1"> Send</button>
    </form>
       <PostDetails/>
       <Footer/>
        </>
    )
}