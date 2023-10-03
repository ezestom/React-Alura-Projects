import { useParams } from "react-router-dom";
import { ListPosts } from "../components/ListPosts";

export function SubCategoria() {
	const { subcategoria } = useParams();
	return <ListPosts url={`/posts?subcategoria=${subcategoria}`} />;
}
