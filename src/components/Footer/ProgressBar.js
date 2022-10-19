import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { accentColor } from "../../constants/colors";

export default function ProgressBar({ percentage }) {
	return (
		<ProgressBarItem
			value={percentage}
			maxValue={1}
			text={`Hoje`}
			background
			backgroundPadding={6}
			styles={buildStyles({
				backgroundColor: `${accentColor}`,
				textColor: "#fff",
				pathColor: "#fff",
				trailColor: "transparent",
			})}
		/>
	);
}

const ProgressBarItem = styled(CircularProgressbar)`
	position: absolute;
	top: -25px;
`;
