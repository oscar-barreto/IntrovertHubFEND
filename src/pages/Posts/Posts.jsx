import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { PostsBody } from "./PostsBody";


export function Posts(){
    return (
        <>
        <Navbar/>
        <PostsBody/>
       <Footer/>
        </>
    )
}