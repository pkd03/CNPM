

import './Pagination.css';
function Pagination() {
    return (
        <>
            {/* <nav > */}
            <ul className="pagination justify-content-center">

                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        4
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        5
                    </a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">
                        ...
                    </a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">
                        50
                    </a>
                </li>

            </ul>
            {/* </nav> */}
        </>
    )
}

export default Pagination;