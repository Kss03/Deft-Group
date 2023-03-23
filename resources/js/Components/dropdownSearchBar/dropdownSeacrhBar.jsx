


export default function DropdownSearchBar({title, dropdownMenuArr, id, defaultValue}) {

    let options = [];

    options.push(<option defaultValue={defaultValue + id} key={defaultValue + id}>{defaultValue}</option>);
    options.push(dropdownMenuArr.map( (option) => {
        return(
            <option value={option + id} key={option + id}>{option}</option>
        )
    }));

    return(
        <div key={id} className="w-100">
            <p className="mb-3 input-title text-center">
                {title}
            </p>
            <select defaultValue={'all'} className="form-select rounded-pill py-2" aria-label="Default select search-form">
                {options}
            </select>
        </div>
    )
}
