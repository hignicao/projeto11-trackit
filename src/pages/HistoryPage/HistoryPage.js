import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";

export default function HistoryPage() {
	return (
		<HistoryPageContainer>
			<NavBar />
			<Footer />
		</HistoryPageContainer>
	);
}

const HistoryPageContainer = styled.div`
	height: 100vh;
	background-color: #f2f2f2;
`;
