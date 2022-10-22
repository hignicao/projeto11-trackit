import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserData";
import { format } from "date-fns";
import Footer from "../../components/Footer/Footer";
import TodayHabit from "../../components/TodayHabit/TodayHabit";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import axios from "axios";
import ptBR from "date-fns/locale/pt-BR";
import { accentColor, baseColor, doneColor } from "../../constants/colors";
import { BASE_URL } from "../../constants/urls";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

export default function TodayPage() {
	const { userData, userProgress, setUserProgress } = useContext(UserContext);
	const now = format(new Date(), "EEEE, dd/MM", { locale: ptBR });
	const date = now.charAt(0).toUpperCase() + now.slice(1);
	const [todayHabits, setTodayHabits] = useState(undefined);
	const [percentDone, setPercentDone] = useState(0);
	const [reloadList, setReloadList] = useState(false);

	function updateTasks(data) {
		const todayHabitsDone = data.filter((hab) => hab.done === true).length;
		const todayHabitsTotal = data.length === 0 ? 1 : data.length;

		setPercentDone(((100 * todayHabitsDone) / todayHabitsTotal).toFixed(0));
		setUserProgress({ ...userProgress, habitsDone: todayHabitsDone, habitsTotal: todayHabitsTotal });
	}

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		axios
			.get(`${BASE_URL}/habits/today`, config)
			.then((res) => {
				setTodayHabits(res.data);
				updateTasks(res.data);
			})
			.catch((err) => {
				toast.error("Erro ao carregar hábitos, tente novamente!", {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			});
	}, [reloadList, userData.token]);

	return (
		<TodayPageContainer>
			<NavBar />
			<p>{date}</p>
			{percentDone == 0 ?
				<Subtitle>Nenhum hábito concluído ainda</Subtitle> :
				<Subtitle green>{percentDone}% dos hábitos concluídos</Subtitle>
			}
			{todayHabits === undefined ? (
				<TodayHabitsList>
					<LoadingContainer>
						<ColorRing
							visible={true}
							height="150"
							width="150"
							ariaLabel="blocks-loading"
							wrapperStyle={{}}
							wrapperClass="blocks-wrapper"
							colors={[accentColor, baseColor, accentColor, baseColor, accentColor]}
						/>
						<p>Carregando...</p>
					</LoadingContainer>
				</TodayHabitsList>
			) : (
				<TodayHabitsList>
					{todayHabits.map((hab) => (
						<TodayHabit key={hab.id} habit={hab} reloadList={reloadList} setReloadList={setReloadList} />
					))}
				</TodayHabitsList>
			)}
			<Footer />
		</TodayPageContainer>
	);
}

const TodayPageContainer = styled.div`
	padding: 103px 20px 130px 20px;
	height: 100vh;
	background-color: #f2f2f2;
	> p {
		color: ${baseColor};
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
	}
	> span {
		font-size: 17.976px;
		line-height: 22px;
	}
`;

const Subtitle = styled.span`
	font-size: 18px;
	line-height: 22px;
	color: ${(props) => (props.green ? doneColor : "#BABABA")};
	margin-bottom: 15px;
`;

const TodayHabitsList = styled.div`
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const LoadingContainer = styled.div`
	margin-top: 51px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p {
		color: ${baseColor};
	}
`;
