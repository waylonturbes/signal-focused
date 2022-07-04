import { ConsumerLayout } from "@components";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
    return (
        <div>
            <h1 className="text-center text-8xl font-black">
                Seeing Through
                <br /> the <span className="text-chaos-gradient">Chaos</span>
            </h1>
        </div>
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
