import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { baseColor } from "../../constants/colors";

export default function HistoryPage() {
	return (
		<HistoryPageContainer>
			<NavBar />
			<p>Histórico</p>
			<span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
			<Footer />
		</HistoryPageContainer>
	);
}

const HistoryPageContainer = styled.div`
	padding: 103px 20px 130px 20px;
	height: 100vh;
	background-color: #f2f2f2;
	p {
		color: ${baseColor};
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
		margin-bottom: 35px;
	}
	span {
		font-size: 17.976px;
		line-height: 22px;
	}
`;
