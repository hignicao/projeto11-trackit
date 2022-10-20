import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { baseColor } from "../../constants/colors";

export default function TodayPage() {
	return (
		<TodayPageContainer>
			<NavBar />
			<p>Segunda, 17/05</p>
			<Footer />
		</TodayPageContainer>
	);
}

const TodayPageContainer = styled.div`
	padding: 105px 20px;
	height: 100vh;
	background-color: #f2f2f2;
	p {
		color: ${baseColor};
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
		margin-bottom: 20px;
	}
`;
