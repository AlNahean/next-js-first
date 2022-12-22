// import '../styles/globals.css'
import { GlobalProvider } from "../Context/GlobalContext.jsx";
import { SessionProvider } from "next-auth/react";

import "../styles/Test/Test.scss";
import "../styles/index.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </SessionProvider>
    </>
  );
}
