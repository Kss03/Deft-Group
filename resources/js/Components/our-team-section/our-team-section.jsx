import ourTeamOne from '../../../images/our-team-bg/one.png'

export default function OurTeamSection() {

    return (
        <div className="our-team-section pt-lg-4">
            <h1 className='our-team__title text-center mb-5'>Наша команда</h1>
            <div className="our-team__one">
                <img src={ourTeamOne} alt="our team" width='100%' height='auto'/>
            </div>

            <div className="our-team__blocks our-team__two mb-lg-5">
                <div className="container h-100">
                    <div className="row h-100 justify-content-start">
                        <div className="col-lg-5 ps-4 our-team__paragraph d-flex flex-column justify-content-center">
                            <p className="paragraph__text">
                                Компания DEFT GROUP закрытого цикла услуг по&nbsp;аналогии с&nbsp;системой &laquo;All inclusive&raquo;.
                            </p>
                            <p className="paragraph__text">
                                Компания DEFT GROUP приглашает вас в&nbsp;бесплатный информационный тур в&nbsp;Аланию для подбора недвижимости.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-team__blocks our-team__three mb-lg-5">
                <div className="container h-100">
                    <div className="row h-100 justify-content-end">
                        <div className="col-lg-5 ps-4 our-team__paragraph d-flex flex-column justify-content-center">
                            <p className="paragraph__text">
                                Мы&nbsp;возмем на&nbsp;себя полное сопровождение сделки и&nbsp;решим любые возникающие задачи.
                            </p>
                            <p className="paragraph__text">
                                Готовы прийти к&nbsp;вам на&nbsp;помощь 24/7 и&nbsp;ответить на&nbsp;любые вопросы, касающиеся подбора, обустройства, переезда, адаптации и&nbsp;даже бизнеса в&nbsp;рамках послепродажного сервиса.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-team__blocks our-team__four mb-lg-5">
                <div className="container h-100">
                    <div className="row h-100 justify-content-start">
                        <div className="col-lg-5 ps-4 our-team__paragraph d-flex flex-column justify-content-center">
                            <p className="paragraph__text">
                                Наши сотрудники подберут для вас лучший вариант жилья, земли или коммерской недвижимости, в&nbsp;соответствии с&nbsp;вашими пожеланиями и&nbsp;критериями.
                            </p>
                            <p className="paragraph__text">
                                Мы&nbsp;команда экспертов, в&nbsp;области инвестиций в&nbsp;турецкую недвижимость и&nbsp;предалагаем, самые выгодные инвестиционные проекты.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
