import React from "react";
import "./previewcollection.scss";
import CollectionItem from "../collection-item/CollectionItem";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item, id, name, imageUrl) => (
            <CollectionItem
              key={id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
