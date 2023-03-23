import 'bootstrap';

import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


function HeaderDropdown({items}) {

    const dropdownArray = items.dropdownMenuArr.map( (item) => {
        return(
            <DropdownItem href={item.link} key={items.id + item.name}>{item.name}</DropdownItem>
        )
    })

    return(
        <Dropdown className="text-center d-flex align-items-center">
            <Dropdown.Toggle id="dropdownServices" className="p-0 text-unstyled bg-transparent border-0">
                {items.title}
            </Dropdown.Toggle>
            <DropdownMenu>
                {dropdownArray}
            </DropdownMenu>
        </Dropdown>
    );
}

export default HeaderDropdown;











