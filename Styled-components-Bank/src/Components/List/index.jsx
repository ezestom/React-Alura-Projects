import { Box, Btn } from "../../UI/index";
import styled from "styled-components";

import Card from "../Card/index.jsx";

import { lista } from "../../info";

const Box2 = styled(Box)`
	gap: 1rem;
	min-width: 350px;
`;

export const List = () => {
	return (
		<Box2>
			<h2>Historial de transacciones</h2>
			{lista.cargos.map((cargo, index) => {
				return <Card key={index} cargo={cargo} />;
			})}
			<Btn>Ver más</Btn>
		</Box2>
	);
};
