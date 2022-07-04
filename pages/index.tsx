import { ConsumerLayout } from "@components";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
    return (
        <>
            <h1 className="text-center text-6xl sm:text-7xl lg:text-8xl font-black pt-32 pb-12 px-6">
                Seeing Through
                <br /> the <span className="text-chaos-gradient">Chaos</span>
            </h1>
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
