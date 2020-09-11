import { AppProps } from "next/app";
import React, { FC } from "react";
import "styles/reset.scss";
import "styles/theme.scss";

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
      <>
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