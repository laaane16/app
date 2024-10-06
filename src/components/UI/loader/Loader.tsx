import cl from './Loader.module.scss';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className={cl.container}>
        <div className={cl.loader}></div>
    </div>
  )
};

export default Loader;
