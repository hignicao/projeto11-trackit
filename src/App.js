import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { UserProvider } from "./providers/UserData";
import { ToastContainer } from "react-toastify";

export default function App() {
	return (
		<UserProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<RegistrationPage />} />
					<Route path="/habitos" element={<HabitsPage />} />
					<Route path="/hoje" element={<TodayPage />} />
					<Route path="/historico" element={<HistoryPage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</UserProvider>
	);
}
