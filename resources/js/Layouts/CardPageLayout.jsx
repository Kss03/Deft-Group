import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import ProductPageSection from "@/Components/product-page-section/product-page-section";


export default function CardPageLayout() {
    return (
        <>
            <Header />
                <ProductPageSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
