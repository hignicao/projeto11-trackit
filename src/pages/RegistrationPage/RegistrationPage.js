import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { accentColor } from "../../constants/colors";
import styled from "styled-components";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function RegistrationPage() {
	const navigate = useNavigate();
	const [registerForm, setResgisterForm] = useState({ email: "", name: "", image: "", password: "" });

	function register(e) {
		e.preventDefault();
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
					name="email"
					value={registerForm.email}
					type="email"
					placeholder="Email"
					onChange={changeFormData}
				/>

				<input
					required
					name="password"
					value={registerForm.password}
					type="password"
					placeholder="Senha"
					onChange={changeFormData}
				/>

				<input
					required
					name="name"
					value={registerForm.name}
					type="text"
					placeholder="Nome"
					onChange={changeFormData}
				/>

				<input
					required
					name="image"
					value={registerForm.image}
					type="url"
					placeholder="Foto"
					onChange={changeFormData}
				/>

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
