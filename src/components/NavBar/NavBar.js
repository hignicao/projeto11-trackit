import styled from "styled-components";
import { baseColor } from "../../constants/colors";

export default function NavBar() {
	return (
		<NavContainer>
			<h2>TrackIt</h2>
			<img src="https://dummyimage.com/51x51/fff/000" alt="Imagem de perfil do usuário" />
		</NavContainer>
	);
}

const NavContainer = styled.div`
	position: fixed;
	top: 0;
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
		width: 51px;
		border-radius: 50%;
	}
`;
