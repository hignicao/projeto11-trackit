import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { accentColor, textColor } from "../../constants/colors";
import Day from "../Day/Day";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function Habit({ habit, reloadList, setReloadList }) {
	const { userData } = useContext(UserContext);
	const daysList = ["D", "S", "T", "Q", "Q", "S", "S"];
	const [deleteOptions, setDeleteOptions] = useState(false);

	function deleteHabit() {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		axios
			.delete(`${BASE_URL}/habits/${habit.id}`, config)
			.then((res) => {
				toast.info(`Hábito ${habit.name} deletado com sucesso!`, {
					position: "top-center",
					autoClose: 1000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setReloadList(!reloadList);
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
			});
	}

	return (
		<HabitContainer>
			<NameDelete>
				<p>{habit.name}</p>
				{deleteOptions ? (
					<DeleteOptionsContainer>
						<button onClick={() => setDeleteOptions(false)}>Cancelar</button>
						<button onClick={deleteHabit}>Confirmar</button>
					</DeleteOptionsContainer>
				) : (
					<button onClick={() => setDeleteOptions(true)}>
						<HiOutlineTrash />
					</button>
				)}
			</NameDelete>
			<DaysContainer>
				{daysList.map((day, i) => (
					<Day disabled={true} key={i} selectedDays={habit.days} index={i}>
						{day}
					</Day>
				))}
			</DaysContainer>
		</HabitContainer>
	);
}

const HabitContainer = styled.div`
	background: #ffffff;
	border-radius: 5px;
	padding: 15px 10px 15px 15px;
`;

const DaysContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const NameDelete = styled.div`
	height: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	p {
		font-size: 20px;
		line-height: 25px;
	}
	> button {
		color: ${textColor};
		background: none;
		border: none;
		font-size: 20px;
	}
`;

const DeleteOptionsContainer = styled.div`
	display: flex;
	gap: 5px;
	button:nth-child(1) {
		border: none;
		background: none;
		color: ${accentColor};
		font-size: 13px;
	}
	button:nth-child(2) {
		font-size: 13px;
		height: 24px;
	}
`;
