import { useState } from "react";
import PreviewCollection from "../../component/preview-collection/PreviewCollection";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA
	);
	return (
		<div>
			{collections.map(({ id, ...otherCollectionsProps }) => {
				return <PreviewCollection {...otherCollectionsProps} key={id} />;
			})}
		</div>
	);
};
export default ShopPage;
