import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api";
import { ButtonWithConfirmation } from "../../components/ButtonWithConfirmation";
import { AuthContext } from "../../contexts/authContext";

export function PostDetails() {
  const params = useParams();
  const { loggedInUser } = useContext(AuthContext);
  const [post, setPost] = useState({
    comments: [],
  });

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`api/post/${params.id}`);
        setPost({ ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, []);

  async function handleDelete(commentId, currentIndex) {
    try {
      await api.delete(`/comment/${commentId}`);
      setPost((currentState) => {
        currentState.comments.splice(currentIndex, 1);
        return { ...currentState };
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
    <div style={{height:"500px"}}>
      {/* <h1>{post.title}</h1>
      <p>{post.postBody}</p>
      <Link to={`/comentar/${params.id}`}>
        {/* <button>Comentar</button> */}
      {/* </Link> */}

      {/* <h2>Comentarios</h2> */}

      {/* {post.comments.length ? (
        <ul>
          {post.comments.map((currentComment, currentIndex) => {
            return (
              <>
                <li>{currentComment.text}</li>

                {currentComment.creator === loggedInUser.user._id ||
                post.creator === loggedInUser.user._id ? (
                  <ButtonWithConfirmation
                    confirmationText="Tem certeza que deseja deletar o comentario?"
                    functionForExecution={() => {
                      handleDelete(currentComment._id, currentIndex);
                    }}
                  >
                    Deletar
                  </ButtonWithConfirmation>
                ) : null}
              </>
            );
          })}
        </ul>
      ) : (
        // <p>Essa publicação não tem nenhum comentario! Seja o primeiro!</p>
    //   )} */} 
    </div>
    </>
  );
}