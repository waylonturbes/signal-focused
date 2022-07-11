import { ConsumerLayout } from "@components";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-center py-32 px-6 border-b bg-slate-200 dark:bg-slate-900 bg-gradient-to-b from-slate-50 dark:from-slate-800">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
          Seeing Through
          <br /> the <span className="text-chaos-gradient">Chaos</span>
        </h1>
        <p className="text-xl sm:px-40 md:px-48 px-6 mb-10">
          Read articles on fantasy football, video games, cooking, and more.
        </p>
        <Link href="/articles" passHref>
          <button className="btn btn-lg btn-primary btn-with-icon mx-auto px-6">
            Start Browsing
            <ChevronRightIcon className="left-btn-icon" />
          </button>
        </Link>
      </div>
      <div className="text-center py-32 px-6 border-b bg-slate-200 dark:bg-slate-900 bg-gradient-to-t from-slate-50 dark:from-slate-800"></div>
      <div className="text-center py-32 px-6 border-b bg-slate-200 dark:bg-slate-900 bg-gradient-to-b from-slate-50 dark:from-slate-800"></div>
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
