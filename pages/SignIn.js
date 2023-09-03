"use client";
import React from "react";
import Image from "next/image";
import Script from "next/script";

import leftSide from "../public/Left-side.png";
import Github from "../public/icons/github.png";
import Discord from "../public/icons/discord.png";
import Linkedin from "../public/icons/linkedin.png";
import Twitter from "../public/icons/twitter.png";
import Google from "../public/icons/google-icon.svg";
import Apple from "../public/icons/apple-icon.svg";

export default function SignIn() {

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }

    const init = function () {
        google.accounts.id.initialize({
            client_id: '1070463417158-i6pjltaqiti28f3on6bhl8qhhuklgqqk.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" } // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    };

    init

    return (
        <>
            <Script src="https://accounts.google.com/gsi/client" async />

            <section className=" flex-row justify-start overflow-hidden " >
                <div className=" w-[50%] h-[100vh]  ">
                    <div className="trapezium"></div>

                    <p className="logo mt-[60px] ml-[72px]">LOGO</p>

                    <p className="name ml-[171px] absolute top-[45vh]">Board.</p>

                    <div className="socials absolute bottom-[10px] flex justify-center items-center w-fit gap-[38px] ml-[145px] mb-[67px]">
                        <Image src={Github} width={44} height={44} />
                        <Image src={Twitter} width={44} height={44} />
                        <Image src={Linkedin} width={44} height={44} />
                        <Image src={Discord} width={44} height={44} />
                    </div>
                </div>

                <div className="login-in-section ml-[92px]">

                    <div className="sigin-section">
                        <p className="text-[36px] ">Sign In</p>
                        <p className="text-[16px] font-normal mt-[6px]">Sign in to your account</p>

                        <div className="signInContainer flex flex-row justify-center items-center gap-[28px] mt-[28px]">

                            <div className="google w-[182px] h-[40px] overflow-hidden ">

                                <div className="google-block absolute z-10 bg-[#fff] flex justify-center items-center pointer-events-none gap-[10px] text-[12px] font-primary text-[#858585] px-[20px] py-[8px] rounded-[10px]">

                                    <Image src={Google} width={15} height={15} />
                                    <p> Sign in with Google </p>

                                </div>

                                <div className="signin-btns z-0 opacity-0">


                                    <div
                                        id="g_id_onload"
                                        data-client_id="1070463417158-i6pjltaqiti28f3on6bhl8qhhuklgqqk.apps.googleusercontent.com"
                                        data-login_uri="http://localhost:3000/"
                                        data-auto_prompt="false"
                                    ></div>
                                    <div
                                        className="g_id_signin"
                                        data-type="standard"
                                        data-size="large"
                                        data-text="sign_in_with"
                                        data-shape="rectangular"
                                        data-logo_alignment="left"
                                        data-auto_select="false"
                                    ></div>
                                </div>

                            </div>

                            <div className="apple h-[40px] overflow-hidden" >

                                <div className="applr-block   bg-[#fff] flex justify-center items-center pointer-events-none gap-[10px] text-[12px] font-primary text-[#858585] px-[20px] py-[8px] rounded-[10px]">

                                    <Image src={Apple} width={15} height={15} />
                                    <p> Sign in with Apple </p>

                                </div>
                            </div>


                        </div>

                        <div className="signbox flex justify-center items-start flex-col bg-[#fff] p-[32px] rounded-[20px] gap-[20px] mt-[28px]">

                            <div className="email w-[100%]">

                                <p className=" font-secondary text-[16px] mb-[10px]" >Email Address</p>
                                <input className="input-box font-secondary text-[16px] pl-[16px] py-[11px] w-[100%] rounded-[10px]" type="text" />

                            </div>

                            <div className="password w-[100%] ">


                                <p className=" font-secondary text-[16px] mb-[10px]" >Password</p>
                                <input className="input-box font-secondary text-[16px] pl-[16px] py-[11px] w-[100%] rounded-[10px]" type="password" />

                            </div>

                            <a href="#" className=" text-[#346BD4] underline">Forget password?</a>

                            <div className="sigin-btn w-[100%] bg-[#4285F4] text-[#fff] text-center py-[10px] rounded-[10px] font-primary font-bold text-[16px]">Sign In</div>

                        </div>

                        <p className=" text-center text-[#858585] font-secondary text-[16px]">Don't have an account? <span className="text-[#346BD4]"> Register here </span> </p>


                    </div>


                </div>
            </section>
        </>
    );
}
