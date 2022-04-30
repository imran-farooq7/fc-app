import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const navigate = useNavigate();
	useEffect(() => {
	  	
	}, [navigate])
	
	return (
		<div
			className={`menu-item ${size}`}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			onClick={() => navigate(linkUrl)}>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
export default MenuItem;
