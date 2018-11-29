import React from 'react';
import Struct from './Struct';

type CustomStructProps = {
  hidden: boolean,
  stylesheet: any,
  changedPage: any,
};

const CustomStruct = ({
  hidden,
  stylesheet,
  changedPage,
  ...rest
}: CustomStructProps) => {
  if (hidden) {
    return null;
  }
  return (
    <Struct
      {...{
        styles: stylesheet,
        changedPage,
        ...rest,
      }}
    />
  );
};

export default CustomStruct;
