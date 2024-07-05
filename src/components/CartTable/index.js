import React from 'react';
import * as C from './styles';

const CartTable = ({ title, cols, data }) => {
  return (
    <>
      <C.Title>{title}</C.Title>
      <C.Table
        columns={cols}
        data={data}
        selectableRows
      />
    </>
  );
};

export default CartTable;