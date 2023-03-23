import { v4 } from "uuid";

export default function StaticPagesTopBanner({title, text}) {



    const parArr = text.map( (item, index) => {
        const key = v4();
        return (
            <p className="paragraph__text" key={key+index}>
                {item}
            </p>
        )
    })

    return(
        <div className="static-pages-top-banner mb-lg-5">
            <div className="container">
                <div className="row h-100">
                    <h2 className="static-pages-top-banner__title col-lg-8 col-xl-8">
                        <span>{title}</span>
                    </h2>
                    <div className="col-lg-6 ps-4 static-pages-top-banner__paragraph">
                        {parArr}
                    </div>
                </div>
            </div>
        </div>
    )
}
