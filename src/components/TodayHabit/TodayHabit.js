import styled from "styled-components";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { doneColor, textColor } from "../../constants/colors";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserData";
import { BASE_URL } from "../../constants/urls";
import { toast } from "react-toastify";
import axios from "axios";

export default function TodayHabit({ habit, reloadList, setReloadList }) {
	const { userData } = useContext(UserContext);
	const { id, name, done, currentSequence, highestSequence } = habit;
	const record = done && currentSequence === highestSequence ? true : false;

	function checkHabit() {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		axios
			.post(`${BASE_URL}/habits/${id}/${done ? "uncheck" : "check"}`, id, config)
			.then((res) => {
				setReloadList(!reloadList);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Erro ao checar hábito, tente novamente!", {
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
		<TodayHabitContainer data-identifier="today-infos">
			<NameSequence>
				<h3>{name}</h3>
				<p>
					Sequência atual: <SequenceSpan done={done}>{currentSequence} dias</SequenceSpan>
				</p>
				<p>
					Seu recorde: <SequenceSpan done={record}>{highestSequence} dias</SequenceSpan>
				</p>
			</NameSequence>
			<IconContainer done={done}>
				<BsFillCalendarCheckFill data-identifier="done-habit-btn" onClick={checkHabit} />
			</IconContainer>
		</TodayHabitContainer>
	);
}

const TodayHabitContainer = styled.div`
	background: #ffffff;
	border-radius: 5px;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NameSequence = styled.div`
	h3 {
		font-size: 19.976px;
		line-height: 25px;
		margin-bottom: 10px;
	}
	p {
		font-size: 12.976px;
		line-height: 16px;
	}
`;

const SequenceSpan = styled.span`
	color: ${(props) => (props.done ? doneColor : textColor)};
`;

const IconContainer = styled.div`
	color: ${(props) => (props.done ? doneColor : "#BABABA")};
	font-size: 65px;
	display: flex;
`;
