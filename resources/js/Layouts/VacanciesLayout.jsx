import {useMediaQuery} from 'react-responsive';

import Header from '@/Components/header/Header';

import RevVacSection from '@/Components/rev-vac-section/rev-vac-section';
import Footer from "@/Components/footer/Footer";

//удалить pikachu
import pikachu from '../../images/review-avatar-img/pikachu.jpg';


export default function VacanciesLayout() {

    const exampleItem = {
        img: pikachu,
        title: 'Клиент Ирина стала собственником квартиры на берегу моря в районе Махмутлар с целью инвестирования.',
        text: 'Менеджер Александра сделала онлайн подбор квартир по желанию клиента, после чего был организован инфо-тур с проживанием в отеле и трансфер. Ирина выбрала вариант с шикарной локацией в 300 метрах от моря вблизи с городской инфраструктурой. Мы оперативно подготовили все необходимые документы для заключения сделки и оформления ТАПУ. Сейчас квартира находится в рамках нашего послепродажного сервиса и подготавливается для сдачи в аренду.'
    }

    const pStyle = {};

    if (useMediaQuery({query: '(max-width: 991.98px)'})) {
        pStyle.fontSize = "13px";
    } else {
        pStyle.fontSize = "22px";
    }

    return (
        <>
            <Header />

                {/* Для отзывов и вакансий одни и теже компоненты  */}
                <RevVacSection
                    items={exampleItem}
                    secTitle='Вакансии'/>
                <p className='text-center pt-lg-4' style={pStyle}>Присылайте свое резюме на почту <a href="mailto:info@citydeft.com" className='text-dark'>info@citydeft.com</a> или на любой мессенджер <a href="tel:+905077060007" className='text-dark text-nowrap'>+90 507 706 00 07</a></p>
            <Footer />
        </>

    )
}
