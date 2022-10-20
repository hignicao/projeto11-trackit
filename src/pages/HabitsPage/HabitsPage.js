import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import { baseColor } from "../../constants/colors";

export default function HabitsPage() {
	return (
		<HabitsPageContainer>
			<NavBar />
			<MyHabitsContainer>
				<MyHabitsNewHabit>
					<p>Meus hábitos</p>
					<button>
						<BsPlusLg />
					</button>
				</MyHabitsNewHabit>
				<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
			</MyHabitsContainer>
			<Footer />
		</HabitsPageContainer>
	);
}

const HabitsPageContainer = styled.div`
	padding: 100px 20px;
	height: 100vh;
	background-color: #f2f2f2;
`;

const MyHabitsContainer = styled.div`
	> p {
		font-size: 17.976px;
		line-height: 22px;
	}
`;

const MyHabitsNewHabit = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	p {
		color: ${baseColor};
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
	}
	button {
		font-size: 16px;
		padding: 11px 12px 8px 12px;
	}
`;
