import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection} from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = () => {
  let { categoryId } = useParams();
  const collection = useSelector(selectCollection(categoryId));
  const {title, items} = collection;

  return (
    <>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
          }
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state,ownProps) => {
//   console.log(categoryId,2)
//   return {
//     collection: selectCollection(ownProps.categoryId)(state),
//   };
// };

export default CollectionPage;
