import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from '../Constants';

import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';


//const SIGNUP_MUTATION = gql`
//mutation SignupMutation(
//  $email: String!
//  $password: String!
//  $username: String!
//) {
//  createUser(
//    email: $email
//    password: $password
//    username: $username
//  ) {
//   user{
//    id
//    email
//    password
//    username
//  }
//  }
//  tokenAuth(username: $username,password: $password){
//  token
//  }
//}
//`;


const LOGIN_MUTATION = gql`
  mutation TokenAuth(
    $username: String!
    $password: String!
  ) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const Login = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        login: true,
        username: '',
        email: '',
        password: '',
        //name: ''
        //emmail
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            username: formState.email,
            password: formState.password
        },
        onCompleted: ({ tokenAuth }) => {
            console.log(tokenAuth);
            localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
            navigate('/dashboard');

        }
    });


    function refreshPage() {
        window.location.reload(true);
    }

    //const [signup] = useMutation(SIGNUP_MUTATION, {
    //  variables: {
    //    username: formState.name,
    //    email: formState.email,
    //    password: formState.password
    //  },
    //  onCompleted: ({ tokenAuth }) => {
    //    localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
    //    history.push('/');
    //  }
    //});



    return (
        <div>
            <section className=" text-center text-lg-start">

                <div className="card mb-3">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-lg-4 d-none d-lg-flex">
                            <img src="http://placeimg.com/700/1200/tech" alt="Random Images"
                                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                        </div>
                        <div className="col-lg-8">
                            <div className="card-body py-5 px-md-5">
                                <div className="col d-flex justify-content-center">
                                    <h1><b>Login</b></h1>
                                </div>

                                <form>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form2Example1">Email address</label>
                                        <br />
                                        <input type="email"
                                            id="form2Example1"
                                            className="form-control"
                                            placeholder='User o email'
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    email: e.target.value
                                                })
                                            } />

                                    </div>


                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form2Example2">Password</label>
                                        <br />
                                        <input type="password"
                                        id="form2Example2" 
                                        className="form-control" 
                                        placeholder='********' 
                                        value={formState.password}
                                        onChange={(e) =>
                                            setFormState({
                                                ...formState,
                                                password: e.target.value
                                            })
                                        }
                                        />
                                    </div>


                                    <div className="row mb-4">


                                        <div className="col">

                                        </div>
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary" type="button"
                                            onClick={() => {
                                                //formState.login ? login : signup ()
                                                console.log(formState.login);
                                                console.log(formState.email);
                                                console.log(formState.password);
                                                if (formState.login) {
                                                    login(formState.username, formState.password).then(() => {
                                                        window.location.reload()
                                                    })
                                                } 
                                                //else {
                                                //  signup(formState.name, formState.password)
                                                //}
                                                }}
                                            >{formState.login ? 'Sign in' : 'create account'}</button>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

           </div>
    );
};

export default Login;