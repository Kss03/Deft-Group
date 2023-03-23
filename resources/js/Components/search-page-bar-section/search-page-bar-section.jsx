
import DropdownSearchBar from "../dropdownSearchBar/dropdownSeacrhBar"

export default function SearchPageBarSection() {

    const dropdownExamples = {
        "тип недвижимости": {
            title: "Тип недвижимости",
            defaultValue: "Все",
            dropdownMenuArr: [
                "Аланья Центр",
                "Авсаллар",
                "Оба",
                "Тосмур",
                "Махмутлар"
                ],
            id: 0},
        'недвижимость': {title: "Недвижимость", defaultValue: "Все районы", dropdownMenuArr: ["Ознакомительный тур", "Онлайн-подбор", "Продать недвижимость", "Послепродажный сервис"], id: 1},
        'район': {title: "Район", defaultValue: "Все районы", dropdownMenuArr: ["Аланья Центр", "Авсаллар", "Оба", "Тосмур", "Махмутлар"], id: 2},
        'планировка': {title: "Планировка", defaultValue: "Любая", dropdownMenuArr: ["О нас", "Наша команда", "Вакансии"], id: 3},
        'расстояние до моря': {title: "Расстояние до моря", defaultValue: "Любое", dropdownMenuArr: ["до 500м", "до 2км", "до 1000км"], id: 4},
        'площадь': {title: "Площадь", defaultValue: "Любая", dropdownMenuArr: ["5 кв.м", "50 кв.м", "500 кв.м", '5000 кв.м'], id: 5},
        'преимущества': {title: "Преимущества", defaultValue: "Любые", dropdownMenuArr: ["Балкон", "Чайник", "Крыша"], id: 6},
        'год постройки': {title: "Год постройки", defaultValue: "Неважно", dropdownMenuArr: ["100 год до н.э", "1950г.", "2024г."], id: 7},
        'инфраструктура': {title: "Инфаструктура", defaultValue: "Выбрать...", dropdownMenuArr: ["Школа", "Парковка", "Личный аэропорт"], id: 8},
    }

    return (
        <section className="search-page-bar-section">
        <div className="container">
            <div className="search-bar pt-4 px-4 pb-3 shadow mb-5">
                <form className="form search-form" id="search-page-form">
                    <div className="row row-cols-2 gx-lg-2 gx-xl-4">
                        <div className="col col-lg-9">
                            <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-4">
                                <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['тип недвижимости'].title}
                                        dropdownMenuArr={dropdownExamples['тип недвижимости'].dropdownMenuArr}
                                        id={dropdownExamples['тип недвижимости'].id}
                                        defaultValue={dropdownExamples['тип недвижимости'].defaultValue}
                                    />
                                </div>
                                <div className="w-16 col col-lg d-flex flex-column align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['район'].title}
                                        dropdownMenuArr={dropdownExamples['район'].dropdownMenuArr}
                                        id={dropdownExamples['район'].id}
                                        defaultValue={dropdownExamples['район'].defaultValue}
                                    />
                                </div>
                                <div className="col col-lg-6 d-flex flex-column align-items-center">
                                    <p className="mb-3 input-title">
                                        Ценовой диапазон, &euro;
                                    </p>
                                    <div className="price-inputs d-flex flex-nowrap">
                                        <div className="input-group me-lg-2 me-xl-3 me-xxl-4">
                                            <span className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                                от
                                            </span>
                                            <input type="number" className="form-control border-0 py-2 rounded-pill rounded-start" id="nameInputModal" />
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                                до
                                            </span>
                                            <input type="number" className="form-control border-0 py-2 rounded-pill rounded-start" id="nameInputModal" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-4">
                                <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['расстояние до моря'].title}
                                        dropdownMenuArr={dropdownExamples['расстояние до моря'].dropdownMenuArr}
                                        key={dropdownExamples['расстояние до моря'].id}
                                        id={dropdownExamples['расстояние до моря'].id}
                                        defaultValue={dropdownExamples['расстояние до моря'].defaultValue}
                                    />
                                </div>
                                <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['площадь'].title}
                                        dropdownMenuArr={dropdownExamples['площадь'].dropdownMenuArr}
                                        id={dropdownExamples['площадь'].id}
                                        key={dropdownExamples['площадь'].id}
                                        defaultValue={dropdownExamples['площадь'].defaultValue}
                                    />
                                </div>
                                <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['преимущества'].title}
                                        dropdownMenuArr={dropdownExamples['преимущества'].dropdownMenuArr}
                                        id={dropdownExamples['преимущества'].id}
                                        key={dropdownExamples['преимущества'].id}
                                        defaultValue={dropdownExamples['преимущества'].defaultValue}
                                    />
                                </div>
                                <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['год постройки'].title}
                                        dropdownMenuArr={dropdownExamples['год постройки'].dropdownMenuArr}
                                        id={dropdownExamples['год постройки'].id}
                                        key={dropdownExamples['год постройки'].id}
                                        defaultValue={dropdownExamples['год постройки'].defaultValue}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3">
                            <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-4">
                                <div className="w-16 col col-lg-7 d-flex flex-column align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['планировка'].title}
                                        dropdownMenuArr={dropdownExamples['планировка'].dropdownMenuArr}
                                        id={dropdownExamples['планировка'].id}
                                        defaultValue={dropdownExamples['планировка'].defaultValue}
                                    />
                                </div>
                                <div className="col col-lg-5 d-flex flex-column align-items-center">
                                    <p className="mb-3 input-title w-50">
                                        ID
                                    </p>
                                    <input type="text" className="id-input form-control rounded-pill py-2" id="nameInputModal" />
                                </div>
                            </div>
                            <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-4">
                                <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['инфраструктура'].title}
                                        dropdownMenuArr={dropdownExamples['инфраструктура'].dropdownMenuArr}
                                        id={dropdownExamples['инфраструктура'].id}
                                        defaultValue={dropdownExamples['инфраструктура'].defaultValue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex align-items-center justify-content-end">
                        <button className="btn col col-lg-auto btn-reset-filters my-2 mx-4" type="reset">Сбросить фильтр</button>
                        <button className="col col-lg-auto btn btn-search py-3 rounded-pill" type="submit">Поиск</button>
                    </div>

                </form>
            </div>
        </div>
    </section>
    )
}
