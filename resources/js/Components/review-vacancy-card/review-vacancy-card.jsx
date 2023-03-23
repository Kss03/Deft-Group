


export default function ReviewVacancyCard({img, text,title}) {

    return (
        <div class="review-card position-relative mb-3">
            <div class="review-card__avatar rounded-circle d-flex overflow-hidden position-absolute p-0">
                <img class="img-fluid" src={img} alt="avatar"/>
            </div>

            <div class="review-card__content ">
                <h5 class="pb-3 mb-4">
                    {title}
                </h5>
                <p>
                    {text}
                </p>
            </div>


        </div>
    );
}
