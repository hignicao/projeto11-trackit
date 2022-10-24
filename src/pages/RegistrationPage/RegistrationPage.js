import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { accentColor } from "../../constants/colors";
import styled from "styled-components";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { ThreeDots } from  'react-loader-spinner'

export default function RegistrationPage() {
	const [registerForm, setResgisterForm] = useState({ email: "", name: "", image: "", password: "" });
	const [disabled, setDisabled] = useState(false)
	const navigate = useNavigate();
	const loader =
	<ThreeDots
		type="Puff"
		color="#FFFFFF"
		height={70}
		width={70}
		timeout={2000}
	/>

	function register(e) {
		e.preventDefault();

		setDisabled(true)

		axios
			.post(`${BASE_URL}/auth/sign-up`, registerForm)
			.then((res) => {
				toast.success(`Cadastro criado com sucesso!`, {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				navigate("/");
			})
			.catch((err) => {
				toast.error('Erro ao cadastrar, tente novamente!', {
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
		setResgisterForm({ ...registerForm, [name]: value });
	}

	return (
		<RegistrationPageContainer>
			<img src={Logo} alt="Logo do Site TrackIt" />
			<Form onSubmit={register}>
				<input
					required
					disabled={disabled}
					name="email"
					value={registerForm.email}
					type="email"
					placeholder="Email"
					onChange={changeFormData}
					data-identifier="input-email"
				/>

				<input
					required
					disabled={disabled}
					name="password"
					value={registerForm.password}
					type="password"
					placeholder="Senha"
					onChange={changeFormData}
					data-identifier="input-password"
				/>

				<input
					required
					disabled={disabled}
					name="name"
					value={registerForm.name}
					type="text"
					placeholder="Nome"
					onChange={changeFormData}
					data-identifier="input-name"
				/>

				<input
					required
					disabled={disabled}
					name="image"
					value={registerForm.image}
					type="url"
					placeholder="Foto"
					onChange={changeFormData}
					data-identifier="input-photo"
				/>

				<ButtonItem disabled={disabled} type="submit">{(disabled ? loader : "Cadastrar")}</ButtonItem>
			</Form>
			<LinkText data-identifier="back-to-login-action" to={"/"}>Já tem uma conta? Faça login!</LinkText>
		</RegistrationPageContainer>
	);
}

const RegistrationPageContainer = styled.div`
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
	button {
		height: 45px;
		font-size: 20px;
		line-height: 26px;
	}
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
