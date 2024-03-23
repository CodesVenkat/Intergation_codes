// import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
// // ensures compatibility with the older versions of firebase
// import firebase from "firebase/compat/app";
// // imports pre-built UI for firebase authentication
// import * as firebaseui from "firebaseui";
// // imports the firebaseui styles using the CDN
// import "firebaseui/dist/firebaseui.css";
// import { app } from './Firebaseui'
// import { useEffect } from "react";

// export default function Logins() {
//   useEffect(() => {
//     const ui =
//       firebaseui.auth.AuthUI.getInstance() ||
//       // since Firebase v9 and above service are imported when needed instead of being a namespace
//       new firebaseui.auth.AuthUI(getAuth(app));

//     ui.start("#firebaseui-auth-container", {
//       signInSuccessUrl: "/LoginSuccess",
//       signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         {
//           provider: GoogleAuthProvider.PROVIDER_ID,
//           clientId:
//             "1006672558365-p6jpr3b7r76kng93j6mrirh9pua5k2at.apps.googleusercontent.com",
//         },
//         {
//           provider: EmailAuthProvider.PROVIDER_ID,
//         },
//         // leave for ANOTHER video
//         // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//       ],
//       // required to enable one-tap sign-up credential helper
//       credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
//     });
//   }, []);
//   return <div id="firebaseui-auth-container"></div>

// }

import React from "react";

import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
// ensures compatibility with the older versions of firebase
import firebase from "firebase/compat/app";
// imports pre-built UI for firebase authentication
import * as firebaseui from "firebaseui";
// imports the firebaseui styles using the CDN
import "firebaseui/dist/firebaseui.css";
import { app } from "./Firebaseui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logins = () => {
    const navi =useNavigate()
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      // since Firebase v9 and above service are imported when needed instead of being a namespace
      new firebaseui.auth.AuthUI(getAuth(app));

    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl:"/Login",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          clientId:
            "1006672558365-p6jpr3b7r76kng93j6mrirh9pua5k2at.apps.googleusercontent.com",

        },
        {
          provider: EmailAuthProvider.PROVIDER_ID,
        },
        // leave for ANOTHER video
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
      // required to enable one-tap sign-up credential helper
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    });
  }, []);
  return (
    <div>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default Logins;
