import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import { List } from "../List/index";

const StyledContainer = styled.section`
	background-color: #f1f1f1;
	min-height: 90vh;
	padding: 0px 15vw;
`;
const StyledContent = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Container = () => {
	return (
		<StyledContainer>
			<Title>Smart Bank</Title>
			<StyledContent>
				<Account />
				<List />
			</StyledContent>
		</StyledContainer>
	);
};

export default Container;
