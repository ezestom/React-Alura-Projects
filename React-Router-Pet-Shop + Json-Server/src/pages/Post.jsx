import { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "../Server/Api";
const Post = ({ url }) => {
	const [post, setPost] = useState({});

	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		get(`/posts/${id}`, setPost).catch(() => {
         navigate("/404");
			alert("Ocurrio un error al cargar el post");
		});
	}, [id, navigate]);

	return (
		<main className="container flex flex--center">
			<article className="card post">
				<h2 className="post-card__title">{post.title}</h2>
				<p className="text__card">{post.body}</p>
			</article>
		</main>
	);
};

export default Post;
