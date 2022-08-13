import React, { useEffect, useState } from "react";
import { getPets } from "../services";

export function Pets() {
  const [pets, setPets] = useState([]);

  console.log("pets", pets);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getPets();
      setPets(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <div className="text-center-my-3">
          <h1 className="text-center">
            <b> Pets List</b>
          </h1>
        </div>

        <div className="row">
          {pets.map((pets) => {
            return (
              <div
                className="card-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                key={pets._id}
              >
                <div className="card my-3">
                  <img
                    src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    className=" img-rounded rounded float-left card-img-top img-thumbnail img-fluid"
                    alt="..."
                  />
                  <h5 className="card-title text-center">
                    <b>Name : {pets.name}</b>
                  </h5>
                  <div className="card-body">
                    <p className="card-text">
                      Age : <b>{pets.age}</b>
                    </p>
                    <p className="card-text">
                      Specie : <b>{pets.specie ? pets.specie : "No Specie"}</b>
                    </p>
                  </div>
                  <button
                    data-movie-id={pets.specie}
                    className="btn btn-primary btn-block"
                  >
                    delete
                  </button>{" "}
                  <br />
                  <button
                    data-movie-id={pets.specie}
                    className="btn btn-primary btn-block"
                  >
                    delete
                  </button>
                  {/* <div className="card-footer text-center my-2">
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    Mas informacion
                  </Link>
                </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
