import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProfileBody from './ProfileBody';

export function Profile(){

    const { loggedInUser } = useContext(AuthContext);

    useEffect(() => {
        async function fetchPosts() {
          try {
            const response = await api.get("/post/my-posts");
            setPosts([...response.data]);
          } catch (e) {
            console.log(e);
          }
        }
        fetchPosts();
      }, []);
    
      console.log(loggedInUser);


    return (
        <>
            <Navbar/>
            <ProfileBody/>
            <Footer/>
        </>
    )
}