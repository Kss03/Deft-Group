import DropdownSearchBar from "../dropdownSearchBar/dropdownSeacrhBar";

function HomeSearchSection() {

    const dropdownExamples = {
        "тип недвижимости": {title: "Тип недвижимости", defaultValue: "Все", dropdownMenuArr: ["Аланья Центр", "Авсаллар", "Оба", "Тосмур", "Махмутлар"], id: 0},
        'недвижимость': {title: "Недвижимость", defaultValue: "Все районы", dropdownMenuArr: ["Ознакомительный тур", "Онлайн-подбор", "Продать недвижимость", "Послепродажный сервис"], id: 1},
        'район': {title: "Район", defaultValue: "Все районы", dropdownMenuArr: ["Аланья Центр", "Авсаллар", "Оба", "Тосмур", "Махмутлар"], id: 2},
        'планировка': {title: "Планировка", defaultValue: "Любая", dropdownMenuArr: ["О нас", "Наша команда", "Вакансии"], id: 3},
    }


    return (
        <section className="home-search-section">
            <div className="container">
                <div className="search-bar pt-4 px-4 pb-3 shadow">
                    <form className="form search-form" id='home-search-form'>
                        <div className="row flex-nowrap justify-content gx-lg-2 gx-xl-4 mb-3">
                            <div className="w-16 col col-lg d-flex flex-column align-items-center align-items-center">
                                <DropdownSearchBar
                                    title={dropdownExamples['тип недвижимости'].title}
                                    dropdownMenuArr={dropdownExamples['тип недвижимости'].dropdownMenuArr}
                                    id={dropdownExamples['тип недвижимости'].id}
                                    key={dropdownExamples['тип недвижимости'].id}
                                    defaultValue={dropdownExamples['тип недвижимости'].defaultValue}
                                />
                            </div>
                            <div className="w-16 col col-lg d-flex flex-column align-items-center">

                                <DropdownSearchBar
                                    title={dropdownExamples['район'].title}
                                    dropdownMenuArr={dropdownExamples['район'].dropdownMenuArr}
                                    id={dropdownExamples['район'].id}
                                    key={dropdownExamples['район'].id}
                                    defaultValue={dropdownExamples['район'].defaultValue}
                                />
                            </div>
                            <div className="w-16 col col-lg d-flex flex-column align-items-center">
                                <DropdownSearchBar
                                    title={dropdownExamples['планировка'].title}
                                    dropdownMenuArr={dropdownExamples['планировка'].dropdownMenuArr}
                                    id={dropdownExamples['планировка'].id}
                                    key={dropdownExamples['планировка'].id}
                                    defaultValue={dropdownExamples['планировка'].defaultValue}
                                />
                            </div>
                            <div className="col col-lg-4 d-flex flex-column align-items-center">
                                <p className="mb-3 input-title">
                                    Ценовой диапазон, &euro;
                                </p>
                                <div className="price-inputs d-flex flex-nowrap">
                                    <div className="input-group me-lg-2 me-xl-3 me-xxl-4">
                                        <span className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                            от
                                        </span>
                                        <input type="number" min={0} className="form-control border-0 py-2 rounded-pill rounded-start" id="nameInputModal" />
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                            до
                                        </span>
                                        <input type="number" min={0} className="form-control border-0 py-2 rounded-pill rounded-start" id="nameInputModal" />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-auto d-flex flex-column align-items-center">
                                <p className="mb-3 input-title w-50">
                                    ID
                                </p>
                                <input type="text" className="id-input form-control rounded-pill py-2" id="nameInputModal" />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-end">
                            <a className="col col-lg-auto adv-opt d-inline-block text-decoration-none me-3" href="/search">Расширенные параметры</a>
                            <button className="btn col col-lg-auto btn-reset-filters my-2 mx-4" type="reset">Сбросить фильтр</button>
                            <button className="col col-lg-auto btn btn-search py-3 rounded-pill" type="submit" >Поиск</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default HomeSearchSection;
