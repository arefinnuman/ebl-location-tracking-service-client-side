import store from "@/redux/store";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Eastern Bank Limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={roboto.className}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </div>
    </>
  );
}

