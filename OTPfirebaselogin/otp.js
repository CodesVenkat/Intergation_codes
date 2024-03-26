// functionality to use a firebase OTP login

import React, { useState } from 'react';
import { auth } from './Firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [Phonenum, setPhoneNum] = useState('');
    const [otp, setOtp] = useState('');
    const [user, setUser] = useState(null);
    const [verificationInProgress, setVerificationInProgress] = useState(false);
    const navi = useNavigate();

    const getOTP = async () => {
        try {
            let recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
            let confirmation = await signInWithPhoneNumber(auth, Phonenum, recaptchaVerifier);
            setUser(confirmation);
            setVerificationInProgress(true);
        } catch (error) {
            console.log(error);
        }
    };

    const verifyOTP = async () => {
        try {
            await user.confirm(otp);
            navi("/Login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='auth_login'>
            <div>
                <input
                    type="num"
                    placeholder='enter Number'
                    value={Phonenum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                />
                <button onClick={getOTP}>Sent OTP</button>
                <div id='recaptcha-container'></div>
            </div>

            {verificationInProgress ? (
                <div>
                    <input
                        type='text'
                        placeholder='enter OTP'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOTP}>Verify OTP</button>
                </div>
            ) : null}
        </div>
    );
};

export default Auth;


// firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFEmz3KAeVU8-Boc2Eta_81Yf_SXo76k0",
  authDomain: "otplogin-7c316.firebaseapp.com",
  projectId: "otplogin-7c316",
  storageBucket: "otplogin-7c316.appspot.com",
  messagingSenderId: "263333917545",
  appId: "1:263333917545:web:1dd44d466e74a51edfc3f8",
  measurementId: "G-MBFXF5P0X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
