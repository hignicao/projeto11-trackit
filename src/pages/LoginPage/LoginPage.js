import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { accentColor } from "../../constants/colors";
import Logo from "../../assets/images/logo.svg";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../providers/UserData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThreeDots } from  'react-loader-spinner'

export default function LoginPage() {
	const { setUserData } = useContext(UserContext);
	const [loginForm, setLoginForm] = useState({ email: "", password: "" });
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const loader =
	<ThreeDots
		type="Puff"
		color="#FFFFFF"
		height={70}
		width={70}
		timeout={2000}
  />

	useEffect(() => {
		const userStorage = localStorage.getItem("userData");

    if(userStorage) {
      setUserData(JSON.parse(userStorage))
			navigate("/hoje")
    } else {
      setUserData(undefined)
    }

	} , [])

	function login(e) {
		e.preventDefault();

		setDisabled(true)

		axios
			.post(`${BASE_URL}/auth/login`, loginForm)
			.then((res) => {
				localStorage.setItem("userData", JSON.stringify(res.data));
				setUserData(res.data);
				navigate("/hoje");
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
				setDisabled(false)
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
					disabled={disabled}
					name="email"
					value={loginForm.email}
					type="email"
					placeholder="Email"
					onChange={changeFormData}
					data-identifier="input-email"
				/>

				<input
					required
					disabled={disabled}
					name="password"
					value={loginForm.password}
					type="password"
					placeholder="Senha"
					onChange={changeFormData}
					data-identifier="input-password"
				/>

				<ButtonItem data-identifier="login-btn" disabled={disabled} type="submit">{(disabled ? loader : "Login")}</ButtonItem>
			</Form>
			<LinkText data-identifier="sign-up-action" to={"/cadastro"}>Não tem uma conta? Cadastre-se!</LinkText>
		</LoginPageContainer>
	);
}

const LoginPageContainer = styled.div`
	height: 100vh;
	background-color: #ffffff;
	padding: 80px 30px;
	display: flex;
	flex-direction: column;
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
`;

const ButtonItem = styled.button`
	height: 45px;
  width: 100%;
  background-color: ${({disabled}) => disabled ? "#95D9FF" : "#52B6FF"};
  font-size: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const LinkText = styled(Link)`
	font-size: 13.976px;
	line-height: 17px;
	color: ${accentColor};
`;
