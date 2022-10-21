import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseColor } from "../../constants/colors";
import { UserContext } from "../../providers/UserData";

export default function NavBar() {
	const { userData } = useContext(UserContext);
	const [userOptions, setUserOptions] = useState(false);
	const navigate = useNavigate();

	return (
		<NavContainer>
			<h2>TrackIt</h2>
			<UserOptionsContainer>
				<img onClick={() => setUserOptions(!userOptions)} src={userData.image} alt="Usuário" />
				{userOptions && (
					<>
						<p>Olá {userData.name}!</p>
						<button onClick={() => navigate("/")}>LogOut</button>
					</>
				)}
			</UserOptionsContainer>
		</NavContainer>
	);
}

const NavContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 70px;
	background-color: ${baseColor};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 18px;
	img {
		height: 51px;
		width: 51px;
		object-fit: cover;
		border-radius: 50%;
	}
`;

const UserOptionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	p {
		color: white;
	}
	button {
		padding: 5px 10px;
	}
`;
