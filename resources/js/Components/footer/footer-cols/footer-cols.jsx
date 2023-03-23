

export default function FooterCols({items}) {

    const liArray = items.dropdownMenuArr.map( (item) => {
        return(
            <li className="mb-2" key={items.id + item.name}>
                <a href={item.link} className="text-decoration-none">
                    {item.name}
                </a>
            </li>
        )
    })

    return (
        <div>
            <h4 className="h4 mb-3">
                {items.title}
            </h4>
            <ul className="list-unstyled">
                {liArray}
            </ul>
        </div>
    )
}
