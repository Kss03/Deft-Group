import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import AfterSaleServiceSection from "@/Components/after-sale-service-section/after-sale-service-section";

export default function AfterSaleServiceLayout() {
    return (
        <>
            <Header />
                <AfterSaleServiceSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
