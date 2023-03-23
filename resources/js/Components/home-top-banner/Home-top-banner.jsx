import topBanner from "../../../images/top-banner.png";

export default function HomeTopBanner() {
    return (
        <div className="p-0 mb-4">
            <div className="top-banner text-center">
                <img src={topBanner} alt="banner" className="img-fluid" />
            </div>
        </div>
    );
}

