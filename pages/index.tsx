import { ConsumerLayout } from "@components/index";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <ConsumerLayout>{page}</ConsumerLayout>;
};

export default Home;
