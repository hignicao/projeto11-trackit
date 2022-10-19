import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

export default function HabitsPage() {
	return (
		<HabitsPageContainer>
			<NavBar />
			<Footer />
		</HabitsPageContainer>
	);
}

const HabitsPageContainer = styled.div`
	height: 100vh;
	background-color: #f2f2f2;
`;
