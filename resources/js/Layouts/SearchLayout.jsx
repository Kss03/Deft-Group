import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import NeedHelpSection from "@/Components/need-help-section/need-help-section";
import ProductPageSection from "@/Components/product-page-section/product-page-section";
import SearchPageBarSection from "@/Components/search-page-bar-section/search-page-bar-section";
import SearchPageResultSection from "@/Components/search-page-result-section/search-page-result-section";


export default function SearchLayout() {
    return (
        <>
            <Header />
                <SearchPageBarSection />
                <SearchPageResultSection />
                <NeedHelpSection />
            <Footer />
        </>
    )
}
