
import ProductCard from "../product-card/product-card";

import room from '../../../images/card-img/card-specs/room.svg';
import kitchen from '../../../images/card-img/card-specs/kitchen.svg';
import bathroom from '../../../images/card-img/card-specs/bathroom.svg';

export default function SearchPageResultSection() {
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
        <section className="search-page-result-section">
        <div className="container">
            <div className="search-results mb-5">
                <h2 className="search__title ps-2 mb-4">
                    Результаты поиска
                </h2>

                {/* <!-- результаты  --> */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5">
                    <div className="col">
                        <ProductCard
                            data={data}/>
                    </div>
                </div>

                </div>
            </div>
    </section>
    );
}
