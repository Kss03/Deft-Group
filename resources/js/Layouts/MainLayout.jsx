import { Link } from "@inertiajs/react";

import Header from "@/Components/header/Header";
import Footer from "@/Components/footer/Footer";
import HomeTopBanner from "@/Components/home-top-banner/home-top-banner";
import DropdownSearchBar from "@/Components/dropdownSearchBar/dropdownSeacrhBar";
import HomeSearchSection from "@/Components/home-search-section/home-search-section";
import PromoHomeSection from "@/Components/promo-home-section/promo-home-section";
import CategoriesBannerSection from "@/Components/categories-banner-section/categories-banner-section";
import LearnMoreSection from "@/Components/learn-more-section/learn-more-section";
import ChooseUsSection from "@/Components/choose-us-section/choose-us-section";
import QuestionLeftSection from "@/Components/question-left-section/question-left-section";


export default function MainLayout() {
    return (
        <>
            <Header />

                {/* баннер с поиском на главной странице */}
                <HomeTopBanner />
                <HomeSearchSection />
                {/* лучшие предложения на гл странице */}
                <PromoHomeSection />
                {/* недвижимость по категориям */}
                <CategoriesBannerSection />
                {/* Мечтаете купить квартиру в Турции? */}
                <LearnMoreSection />
                {/* Почему выбирают именно нас? */}
                <ChooseUsSection />
                {/* Остались вопросы? */}
                <QuestionLeftSection />

            <Footer/>
        </>
    )
}
