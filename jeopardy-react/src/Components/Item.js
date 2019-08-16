import React from 'react';

function Item(props) {
  const {item, index} = props;
  return (
    <div key={index}>
      {item.p}
    </div>
  );
}

export default Item;
