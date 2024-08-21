

function MainContent() {
  return (
    <>
      <div className="col-lg-2 d-none d-lg-block">

        <h5>Danh Mục Sản Phẩm</h5>
        <ul className="">
          <li className="">English Books</li>
          <li className="">Sách tiếng Việt</li>
          <li className="">Văn phòng phẩm</li>
          <li className="">Quà lưu niệm</li>
        </ul>

        <h5 className="mt-4">Nhà cung cấp</h5>
        <ul className="">
          <li className="">Nhà Sách Fahasa</li>
          <li className="">Bamboo Books</li>
          <li className="">Times Books</li>
        </ul>

        <h5 className="mt-4">Đánh giá</h5>
        <div className="d-flex ">
          <div className="mx-2">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} />
            ))}
          </div>
          <div>từ 5 sao</div>
        </div>

        <div className="d-flex ">
          <div className="mx-2">
            {Array.from({ length: 4 }, (_, index) => (
              <Star key={index} />
            ))}

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          <div>từ 4 sao</div>
        </div>

        <div className="d-flex ">
          <div className="mx-2">
            {Array.from({ length: 3 }, (_, index) => (
              <Star key={index} />
            ))}

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          <div>từ 3 sao</div>
        </div>


      </div>


    </>
  )
}


function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="yellow" />
    </svg>
  );
}
export default MainContent;
