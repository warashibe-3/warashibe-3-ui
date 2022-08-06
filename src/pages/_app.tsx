import "src/styles/global.scss";
import { NextUIProvider } from '@nextui-org/react';

import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return (
    <NextUIProvider>
      <props.Component {...props.pageProps} />
    </NextUIProvider>
  )
};

// eslint-disable-next-line import/no-default-export
export default App;
