import { AppProps } from "next/app";
import React, { FC } from "react";
import "styles/reset.scss";
import "styles/theme.scss";
import Head from "next/head";
import GoogleFonts from "next-google-fonts";

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      {/*<Header
            logo={{ title: "Home", subtitle: "Hi", url: "#", src: "logosource", alt: "Alt Text" }}
            nav={[
              { title: "About", subtitle: "More about me", url: "#" },
              { title: "Blog", subtitle: "Mostly about web development", url: "#" },
            ]}
            theme={{theme}}
        
        
        />*/}
      <Component {...pageProps} />
    </>
  );
};

export default _App;
