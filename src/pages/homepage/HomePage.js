import { Outlet } from "react-router-dom";
import Directory from "../../component/directory/Directory";
import "./HomePage.scss";

const HomePage = () => {
	return (
		<div className="homepage">
			<Outlet />
			<Directory />
		</div>
	);
};
export default HomePage;
