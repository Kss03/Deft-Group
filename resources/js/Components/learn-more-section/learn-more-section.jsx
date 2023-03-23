
import twoPeoples from '../../../images/two-peoples.png'

function LearnMoreSection() {
    return(
        <section className="learn-more-section mb-lg-5 mb-3">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-xl-6 content-block">
                        <h2 className="h2 section-title mb-4 mb-xxl-5">
                            Мечтаете купить квартиру в&nbsp;Турции?
                        </h2>
                        <p className="section-text pe-xxl-5 mb-xl-5 mb-xxl-5">
                            Команда профессионалов&nbsp;&mdash; наши сотрудники обладают высокими компетенциями в&nbsp;области инвестиций в&nbsp;турецкую недвижимость, смогут ответить на&nbsp;любой вопрос
                        </p>
                        <a href="" className="btn section-btn ps-4 pe-3 py-2">
                            <span>
                                Узнать&nbsp;больше
                            </span>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33463 16.525L15.5577 11.0166L9.33463 5.5083" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <div className="col col-lg-5 col-xl-6 d-flex align-items-end">
                        <img src={twoPeoples} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearnMoreSection;
