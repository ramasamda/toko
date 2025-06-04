import React, { useEffect, useState } from "react";
import { deleteUser, getUser, getProfile, profileId } from "../fetch/user.js";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [dataa,setDataa] = useState([])

  const navigate = useNavigate();

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

    getProfile((data) => {
      setProfile(data);
    }, []);
  },[]);

  const submitHandler=(id)=>{
   profileId(id,(data)=>{
      console.log(data)
   })
   navigate(`/cardProfile/${id}`)
  }

  return (
    <>
      {/* navbar */}
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link to="/login" className="text-white text-decoration-none">
                <h3 className="me-2 mb-0">Tokopedia</h3>
              </Link>
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

      {/* Kategori pilihan */}
      <div className="container card border border-secondary mt-5">
        <div className="row ">
          <div className="col-6">
            <h3 className="fw-bold mt-4">Kategori Pilihan</h3>
            <div className="row">
              {profile.map((profiles) => {
                return (
                  <>
                    <div className="col-4">
                      <a
                        href = ""
                        className="text-decoration-none text-dark"
                        onClick={((e)=>{
                          e.preventDefault()
                          submitHandler(profiles.id)
                        })}
                      >
                        <div className="card border border-dark my-3 p-3 my-2 d-inline-block w-100">
                          <img
                            src={`http://localhost:3000/uploads/${profiles.image}`}
                            alt="gambar card"
                            style={{
                              width: "90px",
                              height: "85px",
                            }}
                          />
                          <p className="card-title fs-7 text-truncate mt-3">
                            {profiles.name}
                          </p>
                           <h5 className="fw-bold fs-5">
                        <span className="text-muted small align-top">Rp. </span>{" "}
                        {profiles.price}
                      </h5>
                      <p className="fw-bold sf-5">Stock : {profiles.stock}</p>
                        </div>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* Top Up & Tagihan */}

          <div className="col-6">
            <div className="d-flex mt-4 align-items-baseline">
              <h3 className="fw-bold mb-0">Top Up & Tagihan</h3>
              <Link className="ms-2 ">Lihat semua</Link>
            </div>

            <div className="row mt-4">
              <div className="col-3">
                <h5 className="">Pulsa </h5>
              </div>
              <div className="col-3">
                <h5 className="">Paket Data </h5>
              </div>
              <div className="col-3">
                <h5 className="">Listrik PLN</h5>
              </div>
              <div className="col-3">
                <h5 className="">Roaming </h5>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <form>
                  <p className="fw-bold mt-3">Nomor Telepon</p>
                  <div className="form-floating mt-2">
                    <input
                      type="text"
                      className="form-control"
                      name="nomor"
                      placeholder="Masukkan Nomor"
                    />
                    <label htmlFor="floatingName">Masukkan Nomor</label>
                  </div>
                </form>
              </div>
              <div className="col-6">
                <form>
                  <p className="fw-bold mt-3">Nominal</p>
                  <div className="form-floating mt-2">
                    <input
                      type="text"
                      className="form-control"
                      name="nomor"
                      placeholder="Masukkan Nomor"
                    />
                    <label htmlFor="floatingName">Masukkan Nomor</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="container">
                <div className="row">
                  <div className="col-6 col-md-6 mx-auto mt-2 mb-2">
                    <button className="btn btn-danger w-100 mt-2 mb-2 me-1">
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berdasarkan pencarianmu */}
      <div className="container card border border-secondary mt-5 mb-5">
        <div className="d-flex mt-4 align-items-baseline">
          <h3 className="fw-bold mb-0">Berdasarkan Pencarianmu</h3>
          <Link className="ms-2 ">Lihat semua</Link>
        </div>
        <div className="row">
          {profile.map((profiles) => {
            return (
              <>
                <div className="col-2">
                  <a href="/produk/123" className="text-decoration-none text-dark">
                    <div className="card border border-dark my-3 p-3 my-2 d-inline-block w-100">
                      <img
                        src={`http://localhost:3000/uploads/${profiles.image}`}
                        alt="gambar pencarian"
                        className="w-100"
                        style={{
                          width: "150px",
                          height: "130px",
                        }}
                      />
                      <p className="card-title fs-7 text-truncate ">{profiles.name}</p>
                      <h5 className="fw-bold fs-5">
                        <span className="text-muted small align-top">Rp</span>{" "}
                        {profiles.price}
                      </h5>
                      <p className="fw-bold sf-5">Stock : {profiles.stock}</p>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* List Product */}

      <div className="container card border border-secondary mt-5 mb-2">
        <div className="d-flex mt-4 align-items-baseline">
          <h3 className="fw-bold mb-0">List Product</h3>
          {/* <Link className="ms-2 ">Lihat semua</Link> */}
        </div>
        <div className="row">
          {profile.map((profiles) => {
            return (
              <>
                <div className="col-2">
                  <a href="/produk/123" className="text-decoration-none text-dark">
                    <div className="card border border-dark my-3 p-3 my-2 d-inline-block">
                      <img
                        src={`http://localhost:3000/uploads/${profiles.image}`}
                        // {`http://localhost:3000/uploads/${profiles.image}`}
                        alt="gambar pencarian"
                        className="w-100"
                        style={{
                          width: "150px",
                          height: "130px",
                        }}
                      />
                      <p>{profiles.name}</p>
                      <h5 className="fw-bold fs-5">
                        <span className="text-muted small align-top">Rp</span>{" "}
                        {profiles.price}
                      </h5>
                      <p className="fw-bold sf-5">Stock : {profiles.stock}</p>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
