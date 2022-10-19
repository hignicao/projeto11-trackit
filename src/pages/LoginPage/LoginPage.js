import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { accentColor } from "../../constants/colors";
import Logo from "../../assets/images/logo.svg";

export default function LoginPage() {
	const navigate = useNavigate();

	function login(e) {
		e.preventDefault();
		navigate("/habitos");
	}

	return (
		<LoginPageContainer>
			<img src={Logo} alt="Logo do Site TrackIt" />
			<Form onSubmit={login}>
				<label htmlFor="email" />
				<input type="email" placeholder="Email" />

				<label htmlFor="password" />
				<input type="password" placeholder="Senha" />

				<button type="submit">Entrar</button>
			</Form>
			<LinkText to={"/cadastro"}>Não tem uma conta? Cadastre-se!</LinkText>
		</LoginPageContainer>
	);
}

const LoginPageContainer = styled.div`
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
