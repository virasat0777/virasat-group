import SmoothScroll from "@/common/SmoothScroller";
import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SmoothScroll>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SmoothScroll>
  );
};

export default MyApp;
