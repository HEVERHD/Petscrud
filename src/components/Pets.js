import React, { useEffect, useState } from "react";
import { getPets, deletePet } from "../services";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { NoPets } from "./NoPets";
import Swal from "sweetalert2";
import "../css/app.css";

export function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getPets();
      setPets(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deletePet(id);
    const newPets = pets.filter((pet) => pet._id !== id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    setPets(newPets);
  };

  return (
    <>
      <div className="App">
        {!pets.length ? (
          <NoPets />
        ) : (
          <div className="container">
            <div className="text-center-my-3">
              <h1 className="text-center">
                <b> Pets List</b>
              </h1>
            </div>
            <Link to="/create" className="div-flot">
              <MdAddCircle className="btn-floting" />
            </Link>

            <div className="row">
              {pets.map((pets) => {
                return (
                  <div
                    className="card-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    key={pets._id}
                  >
                    <div className="card my-3">
                      <img
                        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
                          Specie : <b>{pets.specie}</b>
                        </p>
                      </div>
                      <div className="card-footer text-center">
                        <Link to={`/update/${pets._id}`}>
                          <li className="btn btn-primary">
                            <GrUpdate /> Update
                          </li>
                        </Link>{" "}
                        <br />
                        <button
                          onClick={() => handleDelete(pets._id)}
                          className="btn btn-danger btn-block text-center my-2"
                        >
                          <AiFillDelete />
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
