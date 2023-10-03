import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../Server/Api";
import "../assets/css/blog.css";

export const ListCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		get(`/categorias`, setCategories);
	}, []);

	return (
		<ul className="category-list container flex">
			{categories.map((category) => (
				<Link to={`/categoria/${category.id}`} key={category.id}>
					<li
						className={`category-list__category category-list__category--${category.id}`}>
						{category.nombre}
					</li>
				</Link>
			))}
		</ul>
	);
};


