import React from "react";
import styled from "styled-components";

export default function Day({ children, selectedDays, index, setSelectedDays, disabled }) {

  function selectDay(index) {
		if (selectedDays.some((day) => day === index)) {
			const filteredDays = selectedDays.filter((day) => day !== index);
			setSelectedDays([...filteredDays]);
		} else {
			setSelectedDays([...selectedDays, index]);
		}
	}

	return (
		<DayElement
			data-identifier="week-day-btn"
			disabled={disabled}
			onClick={() => selectDay(index)}
			color={selectedDays.indexOf(index) !== -1 ? "white" : "#CFCFCF"}
			background={selectedDays.indexOf(index) !== -1 ? "#CFCFCF" : "white"}
		>
			{children}
		</DayElement>
	);
}

const DayElement = styled.button`
	height: 30px;
	width: 30px;
	font-size: 20px;
	line-height: 25px;
	color: ${({ color }) => color};
	background-color: ${({ background }) => background};
	border: 1px solid #cfcfcf;
	border-radius: 5px;
`;
