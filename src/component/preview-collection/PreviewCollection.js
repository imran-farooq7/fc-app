import CollectionItem from "../collection-item/CollectionItem";
import "./PreviewCollection.scss";
const PreviewCollection = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.filter((item,idx) => idx < 4).map((item) => {
					return <CollectionItem key={item.id} imageUrl={item.imageUrl} price={item.price} name={item.name}>;{item.name}</CollectionItem>;
				})}
			</div>
		</div>
	);
};
export default PreviewCollection;
