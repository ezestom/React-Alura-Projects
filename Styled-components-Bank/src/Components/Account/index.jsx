import React, { useState } from "react";
import { Icon, Box, Detalle, Saldo, Btn } from "../../UI/index";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import styled from "styled-components";

const IconMargin = styled(Icon)`
	margin-top: 2px;
`;

const Account = () => {
	const [toggleState, untoggle] = useState(true);

	const toggleHandler = () => {
		untoggle((toggleState) => !toggleState);
	};

	return (
		<Box>
			<h2>Cuenta</h2>
			<div style={{ fontSize: "26px", padding: "20px 0" }}>
				Saldo disponible
				<Detalle>
					<Icon src={dinero} />
				</Detalle>
				{toggleState ? (
					<div className="saldo">
						<span className="detalle">$</span> 8,621.50
					</div>
				) : null}
			</div>

			<Btn onClick={toggleHandler}>
				<IconMargin
					src={toggleState ? privado : ojo}
					alt="Privacidad de saldo"
				/>
			</Btn>
		</Box>
	);
};

export default Account;
