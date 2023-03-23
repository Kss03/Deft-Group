import ReviewVacancyCard from '../review-vacancy-card/review-vacancy-card';


export default function RevVacSection(props) {

    const items = props.items;


    return (
        <section className="reviews-card-section section">
            <div className="container">
                <h2 className="section__title text-center mb-4">
                    {props.secTitle}
                </h2>

                <ReviewVacancyCard
                    img={items.img}
                    title={items.title}
                    text={items.text}
                />

            </div>
        </section>
    );
}
