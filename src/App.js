import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./component/header/Header";
import SigninSignup from "./pages/SigninSignout/SigninSignup";
import { auth, createUserDocumentFromAuth } from "./firebase";
import { useEffect, useState } from "react";
import { getDoc, onSnapshot } from "firebase/firestore";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	let unsubscribeUserAuth = null;
	useEffect(() => {
		unsubscribeUserAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userDocRef = await createUserDocumentFromAuth(userAuth);
				const snapShot = await getDoc(userDocRef);
				setCurrentUser({
					id: snapShot.id,
					...snapShot.data(),
				});
			} else {
				setCurrentUser({
					userAuth,
				});
			}
			// setCurrentUser(user);
			// createUserDocumentFromAuth(user);
			// console.log(user);
		});
		return () => {
			unsubscribeUserAuth();
		};
	}, [currentUser]);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<HomePage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="signin" element={<SigninSignup />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
