import { ConsumerLayout } from "@components";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-center pt-32 pb-12 px-6 border-b space-y-6">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black">
          Seeing Through
          <br /> the <span className="text-chaos-gradient">Chaos</span>
        </h1>
        <p className="text-xl">
          Read articles on fantasy football, video games, cooking, and more.
        </p>
        <button className="btn">Start Browsing</button>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ConsumerLayout
      title="Signal Focused - Home"
      description="See through the chaos with Signal Focus. Find articles on gaming, fantasy football, coding, cooking, and more here."
    >
      {page}
    </ConsumerLayout>
  );
};

export default Home;
