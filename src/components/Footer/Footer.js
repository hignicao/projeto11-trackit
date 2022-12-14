import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";

import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "./ProgressBar";
import { useContext } from "react";
import { UserContext } from "../../providers/UserData";

export default function Footer() {
	const { userProgress } = useContext(UserContext);

	return (
		<FooterContainer>
			<LinkText data-identifier="habit-page-action" to={"/habitos"}>Hábitos</LinkText>
			<LinkProgressBar to={"/hoje"}>
				<ProgressBar userProgress={userProgress} />
			</LinkProgressBar>
			<LinkText data-identifier="historic-page-action" to={"/historico"}>Histórico</LinkText>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 70px;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
`;

const LinkText = styled(Link)`
	font-size: 17.976px;
	line-height: 22px;
	color: ${accentColor};
	text-decoration: none;
`;

const LinkProgressBar = styled(Link)`
	position: relative;
	height: 80px;
	width: 80px;
`;
