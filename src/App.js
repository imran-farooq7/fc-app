import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./component/header/Header";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</div>
	);
}

export default App;
