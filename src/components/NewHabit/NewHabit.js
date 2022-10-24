import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserData";
import styled from "styled-components";
import axios from "axios";
import Day from "../Day/Day";
import { accentColor } from "../../constants/colors";
import { BASE_URL } from "../../constants/urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThreeDots } from "react-loader-spinner";

export default function NewHabit({ setShowNewHabit, selectedDays, setSelectedDays, habitName, setHabitName }) {
	const { userData } = useContext(UserContext);
	const daysList = ["D", "S", "T", "Q", "Q", "S", "S"];
	const [disabled, setDisabled] = useState(false);
	const loader = <ThreeDots type="Puff" color="#FFFFFF" height={50} width={50} timeout={2000} />;

	function createHabit() {
		setDisabled(true);

		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		const body = {
			name: habitName,
			days: selectedDays,
		};

		axios
			.post(`${BASE_URL}/habits`, body, config)
			.then((res) => {
				toast.success(`Hábito ${habitName} criado com sucesso!`, {
					position: "top-center",
					autoClose: 1000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setShowNewHabit(false);
				setSelectedDays([]);
				setHabitName("");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Erro ao salvar hábito, tente novamente!", {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setDisabled(false);
			});
	}

	return (
		<NewHabitContainer>
			<input
				disabled={disabled}
				required
				name="email"
				value={habitName}
				type="text"
				placeholder="Nome do hábito"
				onChange={(e) => setHabitName(e.target.value)}
				data-identifier="input-habit-name"
			/>
			<DaysList>
				{daysList.map((day, i) => (
					<Day disabled={disabled} key={i} selectedDays={selectedDays} index={i} setSelectedDays={setSelectedDays}>
						{day}
					</Day>
				))}
			</DaysList>
			<CancelConfirm>
				<button data-identifier="cancel-habit-create-btn" disabled={disabled} onClick={() => setShowNewHabit(false)}>
					Cancelar
				</button>
				<ButtonItem data-identifier="save-habit-create-btn" disabled={disabled} onClick={() => createHabit()}>
					{disabled ? loader : "Salvar"}
				</ButtonItem>
			</CancelConfirm>
		</NewHabitContainer>
	);
}

const NewHabitContainer = styled.div`
	padding: 15px;
	margin-bottom: 20px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	input {
		width: 100%;
	}
`;

const CancelConfirm = styled.div`
	margin-top: 10px;
	align-self: flex-end;
	display: flex;
	gap: 10px;
	button:nth-child(1) {
		font-size: 16px;
		border: none;
		background: none;
		color: ${accentColor};
	}
	button:nth-child(2) {
		font-size: 16px;
		width: 84px;
		height: 35px;
	}
`;

const ButtonItem = styled.button`
	height: 45px;
	width: 100%;
	background-color: ${({ disabled }) => (disabled ? "#95D9FF" : "#52B6FF")};
	font-size: 21px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const DaysList = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;
