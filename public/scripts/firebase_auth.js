import {app} from "./firestore_connect.js";


const provider = new GoogleAuthProvider(app);
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const auth = getAuth(app);



 signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info
    window.location.replace("./recharge.html");
   //window.location = "./recharge.html";
    const user = result.user;
    alert("Logged in");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  var c=document.getElementById("GoogleSignIn");
  c.addEventListener('click',function(){signInWithPopup(auth,provider)});

function signoutSite()
{
  signOut(auth).then(() => {
  window.location.replace("./signin.html");
}).catch((error) => {
 alert("error");
});
}

var c2=document.getElementById("");
c2.addEventListener('click',signoutSite);