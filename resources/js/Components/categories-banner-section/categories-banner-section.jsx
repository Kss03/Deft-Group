
import exclusiveOffers from '../../../images/exclusive-offers.png';
import newBuilding from '../../../images/new-building.jpg';
import byTheSea from '../../../images/by-the-sea.jpg';
import secondaryHousing from '../../../images/secondary-housing.jpg';
import forCitizenship from '../../../images/for-citizenship.jpg';


function CategoriesBannerSection() {
    return (
        <section className="categories-banner-section mb-lg-5 mb-3">
            <div className="container">
                <div className="banner-titles ps-2 mb-4 title d-flex flex-column align-items-lg-center">
                    <h2 className="ps-2 mb-2 title">Недвижимость по категориям</h2>
                    <p className="sub-title">Подробка недвижимости в&nbsp;Турции</p>
                </div>
                <div className="row row-cols-3 banner-categories flex-nowrap g-0">
                    <div className="col-lg cat-big-block">
                        <a href="#" className="d-flex position-relative cat-link">
                            <img src={exclusiveOffers} alt="exclusive-offers" className="img-fluid" />
                            <p className="position-absolute cat-titles cat-big-pic d-flex justify-content-center align-items-center text-center">Эксклюзивные<br />предложения</p>
                        </a>
                    </div>
                    <div className="col-lg d-flex flex-column cat-big-block justify-content-between">
                        <div className="cat-small-blocks">
                            <a href="" className="d-flex position-relative cat-link">
                                <img src={newBuilding} alt="exclusive-offers" className="img-fluid" />
                                <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">Новостройка</p>
                            </a>
                        </div>
                        <div className="cat-small-blocks">
                            <a href="" className="d-flex position-relative cat-link">
                                <img src={byTheSea} alt="exclusive-offers" className="img-fluid" />
                                <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">На&nbsp;берегу моря</p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg d-flex flex-column cat-big-block justify-content-between">
                        <div className="cat-small-blocks">
                            <a href="" className="d-flex position-relative cat-link">
                                <img src={secondaryHousing} alt="exclusive-offers" className="img-fluid" />
                                <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">Вторичное<br />жильё</p>
                            </a>
                        </div>
                        <div className="cat-small-blocks">
                            <a href="" className="d-flex position-relative cat-link">
                                <img src={forCitizenship} alt="exclusive-offers" className="img-fluid" />
                                <p className="position-absolute cat-titles cat-small-pic d-flex justify-content-center align-items-center text-center">Для гражданства</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriesBannerSection;
