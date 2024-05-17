import React from 'react';
import * as C from './styles';

const Table = ({ title, cols, data }) => {
  return (
    <>
      <C.Title>{title}</C.Title>
      <C.Table  columns={cols}
                data={data}
                pagination
                selectableRows/>
    </>
  )
}

export default Table;