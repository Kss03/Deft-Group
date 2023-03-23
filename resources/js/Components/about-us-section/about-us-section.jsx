import ChooseUsSection from "../choose-us-section/choose-us-section";

//companies img
import semray from "../../../images/group-company/semray.png";
import noxinn from "../../../images/group-company/noxinn.png";
import trollHome from "../../../images/group-company/troll-home.png";
import deftGroup from "../../../images/group-company/deft-group.png";

//documents img
import doc1 from "../../../images/about-documents-img/1.png"
import doc2 from "../../../images/about-documents-img/2.png"
import doc3 from "../../../images/about-documents-img/3.png"
import doc4 from "../../../images/about-documents-img/4.png"
import doc5 from "../../../images/about-documents-img/5.png"
import doc6 from "../../../images/about-documents-img/6.png"
import doc7 from "../../../images/about-documents-img/7.png"
import doc8 from "../../../images/about-documents-img/8.png"
import doc9 from "../../../images/about-documents-img/9.png"
import doc10 from "../../../images/about-documents-img/10.png"
import doc11 from "../../../images/about-documents-img/11.png"
import doc12 from "../../../images/about-documents-img/12.png"
import QuestionLeftSection from "../question-left-section/question-left-section";




export default function AboutUsSection() {

    const compImg = [semray, noxinn, trollHome, deftGroup];


    const docGenerateElem = () => {
        const docImg = [];
        for (let i=1; i < 13; i++) {
            docImg.push(eval(`doc${i}`))
        }
        return arrToElements(docImg);
    }

    // функция для генерации эл-ов с картинками
    function arrToElements(arr) {
        const arrItems = arr.map( (image, key) => {
            return (
                <div className="col" key={key}>
                    <img src={image} alt="images" />
                </div>
            )
        })
        return arrItems;
    }

    const companiesArr = arrToElements(compImg);
    const docsArr = docGenerateElem();

    return (
        <div className="about-us-section">
            <h2 className="section__title text-center mb-lg-4">
                О&nbsp;нас
            </h2>
            <div className="about-us__top mb-lg-5">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col col-lg-6 col-xl-7">
                            <p className="about-us__text">
                                Компания Deft Group&nbsp;&mdash; является сертифицированной строительной компанией и&nbsp;агенством недвижимости в&nbsp;Алании.
                            </p>
                            <p className="about-us__text">
                                Агентство недвижимости&nbsp;&mdash; это гарант законности сделки в&nbsp;Турции на&nbsp;государственном уровне. Мы, как эксперты владеем полной информацией о&nbsp;том, каким застройщикам стоит доверять и&nbsp;к&nbsp;каким районам лучше присмотреться. Мы&nbsp;являемся профессионалами с&nbsp;опытом работы и&nbsp;большим опытом инвестирования в&nbsp;турецкую недвижимость.
                            </p>
                            <p className="about-us__text">
                                Deft Group&nbsp;&mdash; это департаменты продаж, аренды, послепродажный сервис, подразделения финансов, дизайна и&nbsp;медиа-группа. Также с&nbsp;нами работает опытная правовая группа по&nbsp;оформлению ВНЖ и&nbsp;гражданства..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ChooseUsSection />

            <div className="container mb-lg-5">
                <h2 className="section__title text-center mb-lg-5">
                    Мы&nbsp;входим в&nbsp;группу компаний:
                </h2>

                <div className="row row-cols-lg-4 companies-list justify-content-around">
                    {companiesArr}
                </div>
            </div>

            <div className="container mb-lg-5">
                <h2 className="section__title text-center mb-lg-5">
                    Наши документы
                </h2>

                <div className="row row-cols-lg-4 docs-list justify-content-between gy-lg-5">
                    {docsArr}
                </div>
            </div>

            <QuestionLeftSection />
        </div>
    )
}
