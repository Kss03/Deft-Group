
import twoPeoples from '../../../images/two-peoples.png';

export default function NeedHelpSection() {

    return (
        <section className="need-help-section mb-lg-5 mb-3 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-xl-6 content-block">
                        <h2 className="h2 section-title mb-4">
                            Нужна помощь в&nbsp;подборе квартиры?
                        </h2>
                        <p className="section-text mb-lg-4 mb-xxl-5">
                            Наши менеджеры с&nbsp;радостью помогут вам найти самое лучшее предложение под ваш запрос
                        </p>

                        <form action="" className="d-flex flex-column align-items-center section-form">
                            <div className="form-group">
                                <input type="text" className="form-control mb-3 rounded-pill" id="nameInputModal" placeholder="Введите имя" />
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control mb-3 rounded-pill" id="nameInputModal" placeholder="Введите номер телефона" />
                            </div>

                            <button type="submit" className="btn btn-send rounded-pill px-lg-5 rounded-pill">Отправить</button>
                        </form>
                    </div>
                    <div className="col col-lg-6 col-xl-6 d-flex align-items-end">
                        <img src={twoPeoples} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

    )
}
