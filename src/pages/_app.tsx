import "src/styles/global.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const App = (props: AppProps) => {
  return (
    <NextUIProvider>
      <props.Component {...props.pageProps} />
    </NextUIProvider>
  );
};

config.autoAddCss = false;

// eslint-disable-next-line import/no-default-export
// export default App;

export default dynamic(
  () => {
    return Promise.resolve(App);
  },
  {
    ssr: false,
  }
);
