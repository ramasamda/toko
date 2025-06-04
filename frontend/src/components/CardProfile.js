import { useState, useEffect } from "react";
import { getProfile, profileId } from "../fetch/user";
import { getUser } from "../fetch/user";
import { Link, useNavigate, useParams } from "react-router-dom";

const CardProfile = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    profileId(id, (data) => {
      setCard(data);
    });
  }, [id]);

  useEffect(() => {
    console.log(card);
  }, [card]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("harus login terlebih dahulu");
      navigate("/login");
      return;
    }
    console.log("mengambil data user");
    getUser((data) => {
      setUser(data);
    }, []);
  }, []);

  const submitUpdateImage = ()=>{
    navigate(`/user/${card.id}`)
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      {/* navbar */}
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="">
              <Link to="/profile" className="text-white text-decoration-none">
                <h3 className="me-2 mb-0">Tokopedia</h3>
              </Link>
            </div>
            <p className="text-white mb-0 ms-5">Kategori</p>
            <form className="">
              <input
                className="form-control  ms-5"
                style={{ width: "200%" }}
                type="search"
                placeholder="cari di tokopedia"
                aria-label="search"
              ></input>
            </form>
          </div>
        </div>
        <div className="d-flex">
          <p className="text-white mb-0 ms-5">keranjang</p>
          <p className="text-white mb-0 ms-3">notifikasi</p>
          <p className="text-white mb-0 ms-3">chat</p>
          <p className="text-white mb-0 ms-3">toko</p>
        </div>
        <div className="me-5">
          {user.map((users) => {
            return (
              <>
                <div>
                  <p className="text-white mb-0 ms-5">{users.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Card profile */}
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex flex-column">
            <img
              src={`http://localhost:3000/uploads/${card.image}`}
              alt="gambar produk"
              className="w-75 ms-3 ms-4 mt-4 mt-5"
            />
            <button className = "mt-3 ms-5 align-items-center btn btn-success w-50 mt-3" onClick={submitUpdateImage}>Update Photo</button>
          </div>
          <div className="col-4">
            <div className="">
              <h4 className="fw-semibold  mt-4 mt-5">{card.name}</h4>
              <div className="d-flex">
                <p className="text-muted mb-1 fs-6">Terjual 30+</p>
                <p className="mb-2 fs-6 text-warning bi bi-star-fill">
                  <strong className="text-dark ms-3">5 (11 rating)</strong>
                </p>
              </div>
              <h3 className="fw-bold mt-3">Rp {card.price}</h3>
            </div>
            <div className="d-flex fw-bold justify-content-between align-items-center mt-4 px-2 w-100 mt-5">
              <a
                href="#"
                className="text-secondary text-decoration-underline pb-1"
              >
                <u className="text-success">Detail</u>
              </a>
              <a
                href="#"
                className="text-secondary fw-bold text-decoration-none hover-effect"
              >
                <u className="text-success">Spesifikasi</u>
              </a>
              <a
                href="#"
                className="text-secondary fw-bold text-decoration-none hover-effect"
              >
                <u className="text-success">Info Penting</u>
              </a>
            </div>
            {/*  */}
            <div className="mt-4 ms-2">
              <div className="d-flex">
                <p className="text-secondary">Kondisi:</p>
                <p className="fw-bold ms-3">Baru</p>
              </div>
              <div className="d-flex">
                <p className="text-secondary">Min. Pemesanan:</p>
                <p className="fw-bold ms-3">1 buah</p>
              </div>
              <div className="d-flex">
                <p className="text-secondary">Etalase:</p>
                <p className=" text-success ms-3 fw-bold">Semua Etalase</p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="">
              <p>
                o) READY STOCK
                <br />
                Silahkan diorder Bisa langsung dikirim hari ini juga
                <br />
                o) GARANSI UANG KEMBALI
                <br />
                Jika terbukti barang palsu
                <br />
                o) PRODUK DI JAMIN ORIGINAL
                <br />
              </p>
              <div className="mb-2">
                <a href="#" className="mt-5 pe-auto text-success fw-bold">
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
            {/*  */}
            <div className="d-flex align-items-center">
              <img
                src={`http://localhost:3000/uploads/${card.image}`}
                alt="gambar produk"
                className="w-25 rounded-circle"
              />
              <div className="d-flex flex-column ms-3">
                <h5 className="text-dark fw-bold">{card.name}</h5>
              </div>
            </div>
            <div className="ms-5 mb-3">
              <button className="text-success fw-bold btn btn-outline-success w-75 ms-5">
                Follow
              </button>
            </div>
          </div>

          {/* card beli */}
          <div className="col-4">
            <div className="card border border-dark mt-4 mt-5 ">
              <p className="fw-bold mt-3 ms-2">Atur jumlah dan catatan</p>
              <div className="d-flex align-items-center">
                <div className="ms-2 mb-3 w-50 py-1">
                  <div className="card border border-dark h-100">
                    <div className="d-flex align-items-center justify-content-between px-3 short-height">
                      <p>+</p>
                      <p className="fw-bold">1</p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
                <div className="ms-3">
                  <p>Stock Total : {card.stock}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between  ms-2">
                <p>Sub Total</p>
                <p className="fw-bold me-3">Rp {card.price}</p>
              </div>
              {/*  */}
              <div className="d-flex ms-3 mb-3">
                <button className="btn btn-light btn-outline-success fw-bold">
                  Beli Langsung
                </button>
                <button className="btn btn-success fw-bold ms-3">
                  +Keranjang
                </button>
              </div>
              {/*  */}
              <div className="container mt-2">
                <div className="row">
                  <div className="d-flex col-4">
                    <button class="btn btn-outline-dark d-flex align-items-center mb-3">
                      <i class="bi bi-chat-dots-fill me-2 fs-5"></i>
                      Chat
                    </button>
                    <button class="btn btn-outline-dark d-flex align-items-center mb-3 ms-4">
                      <i class="bi bi-heart me-2"></i>
                      Wishlist
                    </button>
                    <button class="btn btn-outline-dark d-flex align-items-center mb-3 ms-4">
                      <i class="bi bi-share me-2 fs-5"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="fw-bold">Ulasan Pembeli</h4>
          </div>
        </div>
        <div className = "row">
          <div className = "col-8">
            <div className = "card border-dark">
                <h1>rama</h1>
            </div>
          </div>
          </div>
      </div>
      {/*  */}
    </>
  );
};
export default CardProfile;
