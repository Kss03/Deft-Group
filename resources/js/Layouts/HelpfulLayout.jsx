import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import HelpfulSection from "@/Components/helpful-section/helpful-section";

export default function HelpfulLayout() {
    return (
        <>
            <Header />
                <HelpfulSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
