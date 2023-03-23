
import NewsCard from './news-card/news-card';
import passportImg from '../../../images/news-card-img/passport.png'

export default function NewsPageSection() {

    const exampleItem = {
        img: passportImg,
        title: 'Сейчас всё чаще звучит шопот бессменных лидеров',
        text: 'Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.'
    }


    return(
        <section class="news-page-section">
        <div class="container">
            <h2 class="section__title text-center mb-5">
                Новости
            </h2>

            <div class="row row-cols-2 row-cols-lg-3 g-lg-4 mb-5">
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
