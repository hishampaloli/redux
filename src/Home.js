import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signOutAPI } from "./actions";
import { useNavigate } from "react-router-dom";
import { postArticleAPI, getArticlesAPI } from "./actions";
import db from "./firebase";

function Home() {


  useEffect(() => {
   dispatch(getArticlesAPI())
  }, []);

  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articleState.articles);
  const user = useSelector((state) => state.userState.user);

  console.log('art =>>>>', articles);

  const handleOut = () => {
    dispatch(signOutAPI());
  };

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setImage(image);
  };

  const postArticle = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: image,
      description: text,
    };
    dispatch(postArticleAPI(payload));
    console.log(payload);
  };

  return (
    <div>
{!user && navigate('/')}
      <button onClick={handleOut}>sign Out</button>
      <input
        type="file"
        accept="image/gif, image/jpeg, image/png"
        id="file"
        name="image"
        style={{ display: "none" }}
        onChange={handleChange}
      />

      <label htmlFor="file">imag</label>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button onClick={postArticle}>save</button>
{articles.map(i => {
  return <div>
    <h1>{i.description}</h1>
    <img src={i.sharedImg} alt="" />
  </div>
})}
    </div>
  );
}

export default Home;
