import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseColor } from "../../constants/colors";
import { UserContext } from "../../providers/UserData";

export default function NavBar() {
	const { userData, setUserData, userOptions, setUserOptions } = useContext(UserContext);
	const navigate = useNavigate();

	function handleLogout() {
		localStorage.removeItem("userData")
		setUserData(undefined)
		setUserOptions(false)
		navigate("/")
	}

	return (
		<NavContainer>
			<h2>TrackIt</h2>
			<UserOptionsContainer>
				<img onClick={() => setUserOptions(!userOptions)} src={userData.image} alt="Usuário" />
				{userOptions && (
					<>
						<span>Olá {userData.name}!</span>
						<button onClick={handleLogout}>LogOut</button>
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
	justify-content: flex-end;
	gap: 10px;
	span {
		color: white;
		@media (max-width: 768px) {
			max-width: 80px;
		}
	}
	button {
		padding: 5px 10px;
	}
`;
