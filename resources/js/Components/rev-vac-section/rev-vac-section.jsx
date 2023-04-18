


export default function RevVacSection(props) {

    const items = props.items;


    return (
        <section className="reviews-card-section section">
            <div className="container">
                <h2 className="section__title text-center pt-3 mb-4">
                    {props.secTitle}
                </h2>

                <ReviewVacancyCard
                    img={items.img}
                    title={items.title}
                    text={items.text}
                />
                <ReviewVacancyCard
                    img={items.img}
                    title={items.title}
                    text={items.text}
                />

            </div>
        </section>
    );
}

function ReviewVacancyCard({img, text,title}) {

    return (
        <div class="review-card position-relative mb-4 mb-lg-4">
            <div class="review-card__avatar rounded-circle d-flex overflow-hidden position-absolute p-0">
                <img class="img-fluid" src={img} alt="avatar"/>
            </div>

            <div class="review-card__content ">
                <h5 class="pb-3">
                    {title}
                </h5>
                <p>
                    {text}
                </p>
            </div>


        </div>
    );
}

