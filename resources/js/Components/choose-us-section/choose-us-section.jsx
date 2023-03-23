
import chooseUsImg from '../../../images/choose-us-img.png';

import firstImg from '../../../images/choose-us-icons/first.svg';
import secondImg from '../../../images/choose-us-icons/second.svg';
import thirdImg from '../../../images/choose-us-icons/third.svg';
import fourthImg from '../../../images/choose-us-icons/fourth.svg';
import fifthImg from '../../../images/choose-us-icons/fifth.svg';
import sixthImg from '../../../images/choose-us-icons/sixth.svg';



function ChooseUsSection() {

    const advItems = [
        {img: firstImg, title: 'Лицензированное агенство', text: 'Мы обладаем большим опытом и хорошей репутацией на рынке.'},
        {img: secondImg, title: 'Большая база объектов', text: 'Наша база включается в себя более 3000 объектов под любой запрос.'},
        {img: thirdImg, title: 'Гарантия результата', text: 'Мы подбираем объекты, кот орые соответствуют требованиям и желаниям клиента. '},
        {img: fourthImg, title: 'Законность сделки', text: 'Все сделки мы проводим в соответствии с законодательством Турции.'},
        {img: fifthImg, title: 'Помощь в оформлении ВНЖ и граждансатва', text: 'Работаем с опытной правовой группой и помогаем с оформление ВНЖ и гражданства.'},
        {img: sixthImg, title: 'Послепродажный сервис', text: 'Мы на связи снашими клиентами 24/7 и помогает со всеми вопросами адаптации.'},
    ];

    const advArr = advItems.map( (item) => {
        return (
            <li className="d-flex" key={item.title}>
                <div className="row d-flex flex-nowrap gx-3">
                    <div className="col-auto">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="col d-flex flex-column pt-1">
                        <h5 className="content-title">
                            {item.title}
                        </h5>
                        <p className="text-wrap pe-lg-5">
                            {item.text}
                        </p>
                    </div>
                </div>
            </li>
    )})

    return(
        <section className="choose-us-section mb-lg-5 ">
            <div className="container">
                <h2 className="h2 section-title text-lg-center mb-lg-4">
                    Почему выбирают нас?
                </h2>
                <div className="row flex-nowrap justify-content-center gx-5">
                    <div className="col-4 d-flex align-items-stretch">
                        <ul className="list-unstyled d-flex flex-column justify-content-between">
                            {advArr.slice(0, 3)}
                        </ul>
                    </div>
                    <div className="col-auto text-center">
                        <img src={chooseUsImg} alt="build" className="img-fluid" />
                    </div>
                    <div className="col-4 d-flex align-items-stretch">
                        <ul className="list-unstyled d-flex flex-column justify-content-between">
                            {advArr.slice(3, 6)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseUsSection;
