import React from "react";

function Product(props) {
  const handleupVote = () => props.onVote(props.id);

  return (
    <div className="item">
      <div className="image">
        <img src={props.productImageUrl} alt="" />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={handleupVote}>
            <i className="large caret up icon" />
          </a>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by</span>
          <img
            className="ui avatar image"
            src={props.submitterAvatarUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Product;