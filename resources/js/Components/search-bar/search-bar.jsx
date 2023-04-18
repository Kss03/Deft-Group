import React, { useState, useEffect } from 'react';
import { Collapse, Button, Dropdown, Form } from 'react-bootstrap';

export default function SearchBar() {

    const [open, setOpen] = useState(false);

    const [clickReset, setClickReset] = useState(false);

    const onClickResetTrue = () => {
        setClickReset(true);
    }

    const onClickResetFalse = () => {
        setClickReset(false);
    }

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
        'инфраструктура': {title: "Инфаструктура", defaultValue: "Выбрать...", dropdownMenuArr: ["Школа", "Парковка", "Личный аэропорт", "Шаверма"], id: 8},
    }



    return (
        <section className="search-bar mt-4">
        <div className="container">
            <div className="search-bar-content pt-4 px-4 pb-3 shadow mb-5">
                <form className="form search-form" id="search-page-form">
                    <div className="row row-cols-lg-2 gx-lg-2 gx-xl-4">
                        <div className="col-12 col-lg-9">
                            <div className="row gx-lg-2 gx-xl-4 mb-lg-4">
                                <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['тип недвижимости'].title}
                                        dropdownMenuArr={dropdownExamples['тип недвижимости'].dropdownMenuArr}
                                        id={dropdownExamples['тип недвижимости'].id}
                                        defaultValue={dropdownExamples['тип недвижимости'].defaultValue}
                                    />
                                </div>
                                <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center">
                                    <DropdownSearchBar
                                        title={dropdownExamples['район'].title}
                                        dropdownMenuArr={dropdownExamples['район'].dropdownMenuArr}
                                        id={dropdownExamples['район'].id}
                                        defaultValue={dropdownExamples['район'].defaultValue}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3 mb-lg-0 align-items-center">
                                    <p className="mb-3 input-title text-center">
                                        Ценовой диапазон, &euro;
                                    </p>

                                    <div className=" price-inputs d-flex flex-nowrap">
                                        <div className="input-group me-4 me-lg-2 me-xl-3 me-xxl-4 form-inputs">
                                            <span className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                                от
                                            </span>
                                            <input type="number" min={0} className="form-control border-0 py-2 rounded-pill rounded-start" id="nameInputModal" />
                                        </div>
                                        <div className="input-group form-inputs">
                                            <span className="input-group-text border-0 py-2 rounded-pill rounded-end bg-white">
                                                до
                                            </span>
                                            <input type="number" min={0} className="form-control border-0 py-2 rounded-pill rounded-start" id="nameInputModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
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
                                    <input type="text" className=" form-inputs id-input form-control rounded-pill py-2" id="nameInputModal" placeholder='  _'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Collapse in={open}>
                        <div id="adv-options" className="row row-cols-2 gx-lg-2 gx-xl-4">
                            <div className="col-12 col-lg-9">
                                    <div className="row gx-lg-2 gx-xl-4 mb-4">
                                        <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center align-items-center">
                                            <DropdownSearchBar
                                                title={dropdownExamples['расстояние до моря'].title}
                                                dropdownMenuArr={dropdownExamples['расстояние до моря'].dropdownMenuArr}
                                                key={dropdownExamples['расстояние до моря'].id}
                                                id={dropdownExamples['расстояние до моря'].id}
                                                defaultValue={dropdownExamples['расстояние до моря'].defaultValue}
                                            />
                                        </div>
                                        <div className="w-16 col-6 col-lg mb-3 mb-lg-0 d-flex flex-column align-items-center align-items-center">
                                            <DropdownSearchBar
                                                title={dropdownExamples['площадь'].title}
                                                dropdownMenuArr={dropdownExamples['площадь'].dropdownMenuArr}
                                                id={dropdownExamples['площадь'].id}
                                                key={dropdownExamples['площадь'].id}
                                                defaultValue={dropdownExamples['площадь'].defaultValue}
                                            />
                                        </div>
                                        <div className="w-16 col-6 col-lg d-flex flex-column align-items-center align-items-center">
                                            <DropdownSearchBar
                                                title={dropdownExamples['преимущества'].title}
                                                dropdownMenuArr={dropdownExamples['преимущества'].dropdownMenuArr}
                                                id={dropdownExamples['преимущества'].id}
                                                key={dropdownExamples['преимущества'].id}
                                                defaultValue={dropdownExamples['преимущества'].defaultValue}
                                            />
                                        </div>
                                        <div className="w-16 col-6 col-lg d-flex flex-column align-items-center align-items-center">
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
                            <div className="col-12 col-lg-3">
                                    <div className="row flex-nowrap gx-lg-2 gx-xl-4 mb-2 mb-lg-4">
                                    <div className="w-16 col-12 col-lg d-flex flex-column align-items-center align-items-center">
                                            <DropdownRadiosSearchBar
                                                item={dropdownExamples['инфраструктура']}
                                                resetState={clickReset}
                                                onClickResetFalse={onClickResetFalse}
                                            />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Collapse>


                    <div className="row align-items-center justify-content-end">

                        <div className='col-12 col-md-auto col-lg-auto mb-3 mb-md-0 justify-content-center d-flex'>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="adv-options"
                                aria-expanded={open}
                                className="adv-opt text-decoration-none me-3"
                                variant="link">
                                    Расширенные параметры
                            </Button>
                        </div>

                        <div className="col-6 col-md-auto col-lg-auto justify-content-center d-flex">
                            <button className="btn btn-reset-filters my-2 mx-4"
                                type="reset"
                                onClick={() => onClickResetTrue()}>
                                    Сбросить фильтр</button>
                        </div>
                        <div className="col-6 col-md-auto col-lg-auto justify-content-center d-flex">
                            <button className=" btn btn-search py-3 py-lg-3 rounded-pill" type="submit">Поиск</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
    )
}

function DropdownSearchBar({title, dropdownMenuArr, id, defaultValue}) {

    let options = [];

    options.push(<option defaultValue={defaultValue + id} key={defaultValue + id}>{defaultValue}</option>);
    options.push(dropdownMenuArr.map( (option) => {
        return(
            <option value={option + id} key={option + id}>{option}</option>
        )
    }));

    return(
        <div key={id} className="w-100 h-100 d-flex flex-column justify-content-between">
            <p className="mb-3 input-title text-center">
                {title}
            </p>
            <select defaultValue={'all'} className="form-select form-inputs rounded-pill py-2" aria-label="Default select search-form">
                {options}
            </select>
        </div>
    )
}


function DropdownRadiosSearchBar({item, resetState, onClickResetFalse}) {

    const [selected, setSelected] = useState({});

    const [selectString, setSelectString] = useState('')

    const {title, dropdownMenuArr, defaultValue} = item;



    useEffect(() => {
        onMount(dropdownMenuArr);
        onToggle();
    }, [])

    useEffect(() => {
        onToggle();
    }, [selected])

    useEffect(() => {
        onReset();
    }, [resetState])

    const onMount = (items) => {
        let obj = {}
        items.map(item => {
            obj[item] = false;
        })
        return obj;
    }

    const onSelected = (e) => {
        const newState = {}
        newState[e.value] = e.checked;
        const newSelected = {...selected, ...newState};
        setSelected(newSelected);
        onToggle();
    }

    const onToggle = () => {
        const selectSum = [];
        Object.keys(selected).map( (item) => {
            if (selected[item]) {
                selectSum.push(item)
            }

        })
        if (selectSum.length < 1) {
            selectSum.push('Выбрать...')
        }
        setSelectString(selectSum.join(', '));
    }

    const onReset = () => {
        if (resetState) {
            setSelected({});
            onClickResetFalse();
        }
    }

    return(
        <div className="w-100 h-100 d-flex flex-column justify-content-between">
            <p className="mb-3 input-title text-center">
                {title}
            </p>

            <Dropdown className="">
                <Dropdown.Toggle as='p' variant="none" id="dropdown-basic" className='form-inputs rounded-pill d-flex justify-content-between align-items-center bg-white w-100 d-block py-2 px-3 m-0 overflow-hidden'>
                    {selectString}
                </Dropdown.Toggle>

                <Dropdown.Menu menuRole="menu">
                    {
                        dropdownMenuArr.map((item, i) => {
                            return (
                                <Form.Check
                                    type='checkbox'
                                    id={`checkbox-${i}`}
                                    key={`checkbox-${i}`}
                                    label={item}
                                    value={item}
                                    className='mx-2'
                                    onClick={(event) => {
                                        onSelected(event.currentTarget)
                                    }}
                                />
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
