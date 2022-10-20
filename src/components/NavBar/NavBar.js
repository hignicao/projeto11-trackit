import { useContext } from "react";
import styled from "styled-components";
import { baseColor } from "../../constants/colors";
import { UserContext } from "../../providers/UserData";

export default function NavBar() {
	const { userData } = useContext(UserContext);

	return (
		<NavContainer>
			<h2>TrackIt</h2>
			<img src={userData.image} alt="Imagem de perfil do usuário" />
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
