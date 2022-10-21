import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { accentColor } from "../../constants/colors";
import Logo from "../../assets/images/logo.svg";
import { BASE_URL } from "../../constants/urls";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../providers/UserData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function LoginPage() {
	const [loginForm, setLoginForm] = useState({ email: "", password: "" });
	const { setUserData } = useContext(UserContext);
	const navigate = useNavigate();

	function login(e) {
		e.preventDefault();

		axios
			.post(`${BASE_URL}/auth/login`, loginForm)
			.then((res) => {
				setUserData(res.data);
				navigate("/habitos");
			})
			.catch((err) => {
				toast.error("Erro ao fazer login, confira os dados e tente novamente!", {
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

	function changeFormData(e) {
		const { name, value } = e.target;
		setLoginForm({ ...loginForm, [name]: value });
	}

	return (
		<LoginPageContainer>
			<img src={Logo} alt="Logo do Site TrackIt" />
			<Form onSubmit={login}>
				<input
					required
					name="email"
					value={loginForm.email}
					type="email"
					placeholder="Email"
					onChange={changeFormData}
				/>

				<input
					required
					name="password"
					value={loginForm.password}
					type="password"
					placeholder="Senha"
					onChange={changeFormData}
				/>

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
