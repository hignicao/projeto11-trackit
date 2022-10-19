import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { accentColor } from "../../constants/colors";
import styled from "styled-components";

export default function RegistrationPage() {
	const navigate = useNavigate();

	function register(e) {
		e.preventDefault();
		navigate("/habitos");
	}

	return (
		<RegistrationPageContainer>
			<img src={Logo} alt="Logo do Site TrackIt" />
			<Form onSubmit={register}>
				<label htmlFor="email" />
				<input id="email" type="email" placeholder="Email" />

				<label htmlFor="password" />
				<input id="password" type="password" placeholder="Senha" />

				<label htmlFor="name" />
				<input id="name" type="text" placeholder="Nome" />

				<label htmlFor="photo" />
				<input id="photo" type="url" placeholder="Foto" />

				<button type="submit">Cadastrar</button>
			</Form>
			<LinkText to={"/"}>Já tem uma conta? Faça login!</LinkText>
		</RegistrationPageContainer>
	);
}

const RegistrationPageContainer = styled.div`
	margin: 80px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	img {
		width: 180px;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
	button {
		height: 45px;
		font-size: 20px;
		line-height: 26px;
	}
`;

const LinkText = styled(Link)`
	font-size: 13.976px;
	line-height: 17px;
	color: ${accentColor};
`;
