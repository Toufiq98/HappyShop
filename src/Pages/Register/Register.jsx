import Lottie from "lottie-react";
import React, { use } from "react";
import register from "../../assets/Lotties/Register.json";
import { AuthContext } from "../../Contexts/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {


    const {createUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        createUser(email, password)
            .then((result) => {
                console.log(result.user);
               
            })
            .catch(error =>{
                console.error(error);
            })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="text-center lg:text-left">
          <Lottie style={{width: '350px'}} animationData={register} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-semibold mb-10">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <div className="mx-auto">
                <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
