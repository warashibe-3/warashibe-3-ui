import "src/styles/global.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return (
    <NextUIProvider>
      <props.Component {...props.pageProps} />
    </NextUIProvider>
  );
};

config.autoAddCss = false;

// eslint-disable-next-line import/no-default-export
export default App;
