import store from "@/redux/store";
import "@/styles/globals.css";
import { LoadScript } from "@react-google-maps/api";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const CustomLoadingElement = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <span className="loading loading-bars loading-lg"></span>
  </div>
);

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Eastern Bank Limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={poppins.className}>
        <Provider store={store}>
          {getLayout(
            <LoadScript
              googleMapsApiKey="your api key"
              loadingElement={<CustomLoadingElement />}
            >
              <Component {...pageProps} />
            </LoadScript>
          )}

          <Toaster />
        </Provider>
      </div>
    </>
  );
}

