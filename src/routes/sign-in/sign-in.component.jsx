import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);

    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
    </div>
  );
};

export default SignIn;
