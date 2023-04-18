
import passportImg from '../../../images/news-card-img/passport.png'

export default function NewsPageSection() {

    const exampleItem = {
        img: passportImg,
        title: 'Сейчас всё чаще звучит шeпот бессменных лидеров',
        text: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.'
    }


    return(
        <section class="news-page-section">
        <div class="container">
            <h2 class="section__title text-center pt-3 mb-3 mb-lg-5">
                Статьи
            </h2>

            <div class="row-cols-1 row-cols-md-2 row-cols-lg-3 g-lg-4 mb-5">
                <div class="col">
                    <NewsCard
                    img={exampleItem.img}
                    title={exampleItem.title}
                    text={exampleItem.text}
                    />
                </div>
            </div>
        </div>
    </section>
    )
}


function NewsCard({img, text, title}) {

    return (
        <div className="card news-card shadow border-0 overflow-hidden">
            <img src={img} alt="" />
            <div className="card-body p-4">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn card-btn w-100">Читать полностью</a>
            </div>
        </div>
    )
}
