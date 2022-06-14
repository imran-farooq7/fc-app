import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./component/header/Header";
import SigninSignup from "./pages/SigninSignout/SigninSignup";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	let unsubscribeUserAuth = null;
	useEffect(() => {
		unsubscribeUserAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});
		return () => {
			unsubscribeUserAuth();
		};
	}, []);

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
