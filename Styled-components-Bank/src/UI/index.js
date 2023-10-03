import styled from "styled-components";

export const Icon = styled.img`
	height: 25px;
	width: 25px;
`;
export const Btn = styled.button`
	margin: 15px auto 0px auto;
	display: block;
	border-radius: 20px;
	background-color: #41d3be;
	border: none;
	color: white;
	font-weight: 600;
	font-size: 14px;
	padding: 8px 20px;
	cursor: pointer;
	transition: 0.3s ease all;
	&:hover {
		box-shadow: 3px 3px 12px #41d3be;
	}
`;
export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	border-radius: 5px;
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
	padding: 20px;
	width: 48%;
	height: auto;
	margin: 20px 0;
	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const Saldo = styled.div`
	font-weight: 700;
	font-size: 32px;
`;

export const Detalle = styled.span`
	color: #41d3be;
	font-size: 24px;
`;
