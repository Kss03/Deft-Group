import MediaQuery from "react-responsive";

import topBanner from "../../../images/top-banner.png";
import topBannerMobile from "../../../images/top-banner-mobile.png";

export default function HomeTopBanner() {



    return (
        <div className="p-0">
            <div className="top-banner text-center">
                <MediaQuery minWidth={575.98}>
                    <img src={topBanner} alt="banner" className="img-fluid" />
                </MediaQuery>
                <MediaQuery maxWidth={575.98}>
                    <img src={topBannerMobile} alt="banner" className="img-fluid" />
                </MediaQuery>
            </div>
        </div>
    );
}

