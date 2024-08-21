import { Link } from 'react-router-dom'
import './Book.css';
function Book(props) {
    const { data } = props;
    return <Link to={'book/' + data.id} className="card" style={{ width: "" }}>
        <img src={data.images[0].base_url} className="card-img-top" alt="..." />
        <div className="card-body">
            <p className="card-text">
                {data.name}
            </p>


            <div className="d-flex m-1">
                {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} />
                ))}
            </div>


            <span className="quantity">
                {data.quantity_sold?.text}
            </span>


            <div className="price mt-1">
                <p><strong>{data.list_price}</strong><sup> <strong>đ</strong></sup></p>
            </div>
        </div>

        <hr />

        <div className="text-secondary text-center footer-card-text">
            <p>Giao siêu tốc 2h</p>
        </div>
    </Link>
}


function Star() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="yellow" />
        </svg>
    );
}
export default Book;