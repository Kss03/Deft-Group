import MediaQuery from "react-responsive";

import ProductCard from "../product-card/product-card";

import room from '../../../images/card-img/card-specs/room.svg';
import kitchen from '../../../images/card-img/card-specs/kitchen.svg';
import bathroom from '../../../images/card-img/card-specs/bathroom.svg';

function PromoHomeSection() {

    //пример для карточки (пропс)

    const data = {
        name: 'Квартира в Алании',
        picture: 'https://picsum.photos/1920/1080',
        location: 'Махмутлар',
        price: '1234567',
        specifications: [
            {spec: '6', img: room},
            {spec: '2', img: kitchen},
            {spec: '3', img: bathroom},
        ],
        cardLink: '/product'
    }


    return(
        <section className="promo-home-section mb-4 mb-lg-5 mt-lg-5">
            <div className="container">
                <div className="section-title d-flex justify-content-between align-items-center">
                    <MediaQuery minWidth={991.98} >
                        <h2 className="ps-2 mb-4 title">
                            Лучшие предложения
                        </h2>
                        <a href="#" className="see-all-link h4 text-decoration-none">
                            Смотреть все
                        </a>
                    </MediaQuery>
                    <MediaQuery maxWidth={991.98} >
                        <h2 className="ps-2 mb-4 title text-center w-100">
                            Лучшие предложения
                        </h2>
                    </MediaQuery>
                </div>

                {/* карточки товаров */}
                <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5 mb-4 mb-lg-0">
                    <div className="col">
                        <ProductCard
                            data={data}/>
                    </div>
                </div>

                <MediaQuery maxWidth={991.98} >
                    <div className="d-flex justify-content-center">
                        <a href="#" className="see-all-link h4 text-decoration-none">
                            Смотреть все
                        </a>
                    </div>
                </MediaQuery>
            </div>
        </section>
    );
}

export default PromoHomeSection;
