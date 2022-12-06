import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CREATE_NOTE } from "../graphql/Mutation";
import { useNavigate } from "react-router-dom";

const Form = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [date, setDate] = useState("");
	const [author, setAuthor] = useState("");

	const [createNote] = useMutation(CREATE_NOTE, {});

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				await createNote({
					variables: { title, content, date, author },
				});

				navigate("/");
			}}
		>
			<div className="mb-6">
				<label
					for="title"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Title
				</label>
				<input
					type="text"
					id="title"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div className="mb-6">
				<label
					for="content"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Content
				</label>
				<input
					type="textarea"
					id="content"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
			</div>
			<div className="mb-6">
				<label
					for="date"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Date
				</label>
				<input
					type="date"
					id="date"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</div>
			<div className="mb-6">
				<label
					for="author"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Author
				</label>
				<input
					type="text"
					id="author"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				/>
			</div>
			<div className="flex items-start mb-6"></div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Save
			</button>
		</form>
	);
};

export default Form;
