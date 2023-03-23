

export default function NewsCard({img, text, title}) {

    return (
        <div className="card news-card shadow border-0 overflow-hidden">
            <img src={img} alt="" />
            <div className="card-body p-4">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn card-btn w-100">Читать полностью</a>
            </div>
        </div>
    )
}
