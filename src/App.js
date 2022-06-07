import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./component/header/Header";
import SigninSignup from "./pages/SigninSignout/SigninSignup";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/signin" element={<SigninSignup />} />
			</Routes>
		</div>
	);
}

export default App;
