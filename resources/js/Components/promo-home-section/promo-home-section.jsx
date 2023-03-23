
import ProductCard from "../product-card/product-card";

function PromoHomeSection() {

    //пример для карточки (пропс)
    const data = {
        name: 'Квартира в Алании',
        picture: 'https://picsum.photos/1920/1080',
        location: 'Махмутлар',
        price: '150 000',
        specifications: [
            {spec: '6', img: 'room'},
            {spec: '2', img: 'kitchen'},
            {spec: '3', img: 'bathroom'},
        ],
        cardLink: '/product'
    }


    return(
        <section className="promo-home-section mb-lg-5 mt-lg-5">
            <div className="container">
                <div className="section-title d-flex justify-content-between align-items-center">
                    <h2 className="ps-2 mb-4 title">
                        Лучшие предложения
                    </h2>
                    <a href="#" className="see-all-link h4 text-decoration-none">
                        Смотреть все
                    </a>
                </div>

                {/* карточки товаров */}
                <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 gy-5 gx-xxl-5">
                    <div className="col">
                        <ProductCard
                            data={data}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoHomeSection;
