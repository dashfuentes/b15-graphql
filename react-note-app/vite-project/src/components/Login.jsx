import React, { useState } from "react";
import { LOGIN } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isInValid, setisInValid] = useState("");

	const [login, { data, error }] = useLazyQuery(LOGIN, {
		variables: { email, password },
	});

	if (data) {
		console.log(data);
		//if(!data.login.length) return setisInValid(true)
	}

	return (
		<form
			onSubmit={async (e) => {
                e.preventDefault();
                
				await login().then(function (response) {
					console.log(response);
					var data = response.data.login;
					if (!data.length) {
						setisInValid("Invalid Credentials!!");
					} else {
						console.log("redirecting...");
						navigate("/home");
					}
                } ).catch( function ( err ) {
                    console.log( "Something went wrong!!", err)
                } )
			}}
		>
			<div className="mb-6">
				<label
					for="email"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your email
				</label>
				<input
					type="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div className="mb-6">
				<label
					for="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your password
				</label>
				<input
					type="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					id="password"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>
			<div className="mb-6">
				{isInValid && (
					<p className="mt-2 text-sm text-red-600 dark:text-red-500">
						<span className="font-medium">{isInValid}</span>
					</p>
				)}
			</div>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
};

export default Login;
