import './Navbar.css';
function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-mobile-blue">
        <div className="container-fluid">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left d-lg-none d-block" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>

          <div className=" d-flex flex-column logo-tiki d-none d-md-flex">
            <img
              src="src\img\com\com_tam.jpg"
              alt=""
              width={96}
              height={40}
            />
            <span clasName = "totnhanh">Ngon &amp; Nhanh</span>
          </div>


          <div className="d-flex  flex-grow-1 form-container">
            <form className="d-flex justify-content-center align-items-centerd-flex justify-content-center align-items-center search-form w-75">
              <input
                className="form-control search-bar"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <button className="btn btn-outline-success search-button" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>


          <div className="navbar-nav ms-auto navbar-mobile">
            <div className="nav-item mx-3">
              <img
                src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                alt=""
                width={24}
                height={24}
              />
              <span>Trang chủ</span>
            </div>

            <div className="nav-item mx-3">
              <img
                src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                alt=""
                width={24}
                height={24}
              />
              <span>Tài khoản</span>
            </div>
          </div>

          <img
            className='gio-hang'
            src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
            alt=""
            width={24}
            height={24}
          />
          {/* <span>0</span> */}

        </div>
      </nav>
    </>

  )
}

export default Navbar;