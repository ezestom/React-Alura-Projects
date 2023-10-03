import styled from "styled-components";
import { lista } from "../../info";
import imageFilter from "../imageFilter";

const Card = styled.div`
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	padding: 1rem;
	min-width: 300px;
`;
const Info = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default ({ cargo }) => {
	const { type, value, from, date } = cargo;
	return (
		<Card>			
			<Info>
				{imageFilter(type)}
				<span>{type}</span>
				<span>{from}</span>
				<span>{value}</span>
				<span>{date}</span>
			</Info>
		</Card>
	);
};
