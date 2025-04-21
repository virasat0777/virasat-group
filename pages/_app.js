import SmoothScroll from "@/common/SmoothScroller";
import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import { store } from "@/redux/store";
import Providers from "@/redux/provider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Providers store={store}>
      <SmoothScroll>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SmoothScroll>
    </Providers>
  );
};

export default MyApp;
