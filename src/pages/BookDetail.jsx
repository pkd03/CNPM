import { useParams } from 'react-router-dom';
import { books } from '../../data.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
function Bookdetail() {
    const { id } = useParams();
    const book = books.find(item => item.id === id);


    // tăng giảm số lượng sp
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <Navbar />


            <div className="container  mt-4 mb-5 p-2">
                <div className="row">

                    {/* ảnh sách */}
                    <div className=" col-md-3 " style={{ top: 0 }}>
                        <div className="card">
                            <img src={book.images[0].base_url} className="card-img-top" alt="..." />
                            <hr />
                            <div className="row text-nowrap">
                                <div className=" col-md-3">
                                    <span className="d-flex">
                                        <img
                                            src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
                                            style={{ height: 30 }}
                                            alt=""
                                        />
                                        <p style={{ fontSize: 14 }}>Xem thêm</p>
                                    </span>
                                </div>
                                <div className=" col-12 col-lg-8">
                                    <span className="d-flex justify-content-between">
                                        <p style={{ fontSize: 14 }}>Tóm tắt nội dung sách</p>
                                        <img
                                            src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png"
                                            style={{ height: 20 }}
                                            alt=""
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* thông tin */}
                    <div className=" col-md-6 bg-white p-2">
                        <div className="container-fluid bg-white ">
                            <div className="column">
                                <div className="col-12">


                                    <p className="name-authors" style={{ fontSize: 16 }}>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                            style={{ height: 20 }}
                                            alt=""
                                        />
                                        <span className="ml-3">
                                            Tác giả: {book.authors && <span className="text-primary">{book.authors[0]?.name}</span>}
                                        </span>
                                    </p>
                                    <h4 className="name-book">{book.name}</h4>

                                    <div className="d-flex ">
                                        <div className="">
                                            {book.rating_average}
                                        </div>

                                        <div className="d-flex mt-1 mx-2">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <Star key={index} />
                                            ))}
                                        </div>


                                        <div className="">
                                            <span>{book.quantity_sold?.text}</span>
                                        </div>
                                    </div>

                                    <div className="col-12 m-2">
                                        <strong style={{ fontSize: '30px' }} > {book.list_price} < sup > đ</sup></strong>
                                    </div>



                                    <div className="col-12 ">
                                        <div className=" bg-white p-2 ps-3">
                                            <h5>Mô tả sản phẩm</h5>
                                            <table className="table">
                                                <tbody>
                                                    {book.specifications.map((spec, index) => (
                                                        <React.Fragment key={index}>
                                                            {spec.attributes.map((attr, attrIndex) => (
                                                                <tr key={attrIndex}>
                                                                    <td>{attr.name}</td>
                                                                    <td>{attr.value}</td>
                                                                </tr>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fuild bg-white info-2">
                                <h5>Mô tả sản phẩm</h5>
                                <img src={book.images[0].large_url} className="w-100" alt="" />
                                <div dangerouslySetInnerHTML={{ __html: book.description }} />
                            </div>
                        </div>
                    </div>


                    {/* tính tiền */}
                    <div className="col-md-2 bg-white mx-3" >
                        <div className='d-flex row p-3'>
                            <div className=" fw-bold">Số lượng</div>
                            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <button onClick={decrement} className="btn " style={{ border: '1px solid black' }}>-</button>
                                <div className="mx-2">{count}</div>
                                <button onClick={increment} className="btn " style={{ border: '1px solid black' }}>+</button>
                            </div>
                            <h5>Tạm tính:</h5>
                            <div className="col-12 m-2">
                                <strong style={{ fontSize: '30px' }}>{book.list_price}<sup>đ</sup></strong>
                            </div>
                            <button class="btn btn-danger m-1">Mua ngay</button>
                            <button class="btn btn-primary m-1">Thêm vào giỏ</button>
                            <button class="btn btn-secondary m-1">Mua trước trả sau</button>
                        </div>
                    </div>


                </div >
            </div >


            <Footer />
        </>
    );
}

function Star() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="yellow" />
        </svg>
    );
}

export default Bookdetail;
