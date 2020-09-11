import { AppProps } from "next/app";
import React, { FC } from "react";
import 'styles/reset.scss';
import 'styles/theme.scss';



export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
      <>
        <header className="header">
        
        </header>
        <Component {...pageProps} />
      </>
  );
};


export default _App;