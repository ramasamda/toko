 <div class="d-flex">
        <div
          class="bg-dark text-white p-3"
          style={{ width: "250px", height: "100vh" }}
        >
          <h4>Menu</h4>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-grow-1 p-3">
          <h4>Catalog Product</h4>
          <div className="d-flex justify-content-center">
            {profile.length > 0 ? (
              profile.map((profiles, index) => {
                const { id, name, image } = profiles;
                return (
                  <div
                    key={index}
                    className="card border border-dark my-3 p-3 my-2 d-inline-block ms-3"
                  >
                    <img
                      src={`http://localhost:3000/uploads/${image}`} // Gambar profile
                      alt="Foto Profile"
                      className="d-flex mx-auto"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <h3 className="card-title text-center fw-bold">{name}</h3>
                    <div className="justify-content-center mt-4">
                      <Link
                        to={`/profile/update/${id}`}
                        className="btn btn-primary btn-sm "
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/updateImage/${id}`}
                        className="btn btn-sm btn-info ms-1"
                      >
                        Edit Image
                      </Link>
                      <button className="btn btn-primary btn-sm ms-1">
                        DELETE
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              // Jika data profile kosong, tampilkan pesan
              <p>Data profile kosong. Coba login terlebih dahulu.</p>
            )}
          </div>
        </div>
      </div>