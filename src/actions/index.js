import { auth, provider, storage } from "../firebase";
import db from "../firebase";

export const setUser = (payload) => ({
  type: "SET_USER",
  user: payload,
});

export const getArticles = (paylaod) => ({
    type: "GET_ARTICLE",
    paylaod: paylaod,
  });

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((paylaod) => {
        console.log(paylaod.user);
        dispatch(setUser(paylaod.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(setUser(null)).catch((error) => {
        // console.log(error.message);
      });
    });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}



export function postArticleAPI(paylaod) {
  return (dispatch) => {
    if (paylaod.image != "") {
      const upload = storage
        .ref(`images/${paylaod.image.name}`)
        .put(paylaod.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`progress:${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            sharedImg: downloadURL,
            comments: 0,
            description: paylaod.description,
          });
        }
      );
    }
  };
}


export function getArticlesAPI() {
    return (dispatch) => {
      let payload;
  
      db.collection('articles')
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload))
      })
    }
  }