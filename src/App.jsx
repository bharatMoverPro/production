import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Hero from "./Pages/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faq from "./Pages/FAQ/Faq";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Help from "./Pages/Help/Help";
import Error from "./Pages/Error/Error";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/help' element={<Help />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/faq' element={<Faq />} />
				<Route path='/login' element={<Login />} />
				<Route path='/Signup' element={<SignUp />} />
				<Route path='/error' element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
