import 'bootstrap';

import HeaderDropdown from "./header-dropdown/header-dropdown";
import ModalContactUs from '../modal-contact-us/modal-contact-us';
import { Link } from "@inertiajs/react";

import whatsappImg from '../../../images/whatapp.svg';
import telegramImg from "../../../images/telegram.svg";
import viberImg from "../../../images/viber.svg";
import emailImg from "../../../images/email.svg"
import headerLogoImg from "../../../images/header-logo.png";

export default  function Header() {

    const dropdownExamples = {
        district: {
            title: "Недвижимость",
            dropdownMenuArr: [
                {name: "Аланья Центр", link: "/search"},
                {name: "Авсаллар", link: "/search" },
                {name: "Оба",link: "/search" },
                {name: "Тосмур", link: "/search" },
                {name:'Махмутлар' ,link: "/search" }
            ],
            id: 1},

        services: {
            title: "Услуги",
            dropdownMenuArr: [
                {name: 'Ознакомительный тур', link: "/intro-tour" },
                {name: 'Онлайн-подбор', link: "/online-selection-info" },
                {name: 'Продать недвижимость', link: "/sell-apart" },
                {name: 'Послепродажный сервис', link: "/after-sales-service" }],
            id: 2},

        about: {
            title: "О компании",
            dropdownMenuArr: [
                {name: "О нас", link: "/about"},
                {name: "Наша команда", link: "/our-team"},
                {name: "Вакансии", link: '/vacancies'}],
            id: 3},

        helpful: {
            title: "Полезное",
            dropdownMenuArr: [
                {name: "Полезное",link: "/helpful"},
                {name: "Новости",link: "/news"}],
            id: 4},
    }


    return (
        <div>
            <header className="header">

                <section className="header-section mb-2" id="header-section">

                    <div className="header-top">
                        <div className="container">
                            <div className="row justify-content-end align-content-center pt-2 pb-2">
                                <div className="col-lg-auto header__social-links row gx-1 me-3">
                                    <a href="#" className="col text-decoration-none d-inline-block">
                                        <img src={whatsappImg} alt="whatsapp" />
                                    </a>
                                    <a href="#" className="col text-decoration-none d-inline-block">
                                        <img src={telegramImg} alt="telegram" />
                                    </a>
                                    <a href="#" className="col text-decoration-none d-inline-block">
                                        <img src={viberImg} alt="viber" />
                                    </a>
                                </div>
                                <div className="col-lg-auto d-flex h6 fw-normal me-3 mb-0">
                                    <a href="tel:+905077060007" className="align-self-center">+90&nbsp;507&nbsp;706&nbsp;00&nbsp;07</a>
                                </div>
                                <div className="col-lg-auto d-flex gx-2 h6 fw-normal align-items-center mb-0">
                                    <img src={emailImg} alt="email:" className="me-2" />
                                    <a href="mailto:info@citydeft.com">
                                        info@citydeft.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-middle">
                        <div className="container">
                            <div className="row pt-3 pb-3 flex-nowrap justify-content-between">
                                <div className="col-lg-auto me-xl-3 me-lg-0 gx-xl-0">
                                    <Link href="/" className="d-inline-block">
                                        <img src={headerLogoImg} alt="logo" height="80px" />
                                    </Link>
                                </div>
                                <div className="col-lg-auto align-items-center d-flex me-xl-3 me-lg-0 list-links">
                                    <div className="row flex-nowrap gx-xxl-4 gx-xl-3 gx-lg-2">
                                        <div className="col-lg-auto">
                                            {/* недвижимость */}
                                            <HeaderDropdown
                                                items={dropdownExamples.district}
                                            />
                                        </div>
                                        <div className="col-lg-auto">
                                            {/* услуги */}
                                            <HeaderDropdown
                                                items={dropdownExamples.services}
                                            />
                                        </div>
                                        <div className="col-lg-auto">
                                            {/* О&nbsp;компании */}
                                            <HeaderDropdown
                                                items={dropdownExamples.about}
                                            />
                                        </div>

                                        <div className="col-lg-auto">
                                            <Link
                                                href={'/reviews'}
                                                className="text-decoration-none"
                                            >
                                                Отзывы
                                            </Link>
                                        </div>

                                        <div className="col-lg-auto">
                                            {/* полезное */}
                                            <HeaderDropdown
                                                items={dropdownExamples.helpful}
                                            />
                                        </div>

                                        <div className="col-lg-auto">
                                            <Link
                                                href={'/contacts'}
                                                className="text-decoration-none"
                                            >
                                                Контакты
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-auto flex-nowrap row d-flex align-items-center">

                                    <div className="col-lg-auto">
                                        <ModalContactUs />
                                    </div>


                                    <button type="button" className="btn like-btn p-0 col-lg-auto">
                                        <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.5124 4.97634C12.3905 -4.47986 0 0.671573 0 10.9725C0 18.7078 16.9867 30.8078 18.5124 32.3811C20.0486 30.8078 36.1905 18.7078 36.1905 10.9725C36.1905 0.749668 24.6457 -4.47986 18.5124 4.97634Z" fill="#F5E084"/>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </header>
        </div>

    )

}
