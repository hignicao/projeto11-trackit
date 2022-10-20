import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/urls';

export default function Forms({children, loginForm, setLoginForm}) {

  const navigate = useNavigate();


  function login(e) {
		e.preventDefault();

		axios.post(`${BASE_URL}/auth/login`, loginForm)
			.then((res) =>	{
				console.log(res.data)
				// navigate("/habitos");
			})
			.catch((err) => console.log(err.response.data));

	}

	function changeFormData(e) {
    console.log("oi")
		const { name, value } = e.target;
		setLoginForm({ ...loginForm, [name]: value });
	}

  return (
    <Form onSubmit={login}>
      {children}
		</Form>
  )
}

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

