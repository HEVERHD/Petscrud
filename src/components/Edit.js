import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatePet } from "../services";
import Swal from "sweetalert2";

import { MdAddCircle } from "react-icons/md";

export const Edit = () => {
  const params = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [specie, setSpecie] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    async function getPet() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets/${params.id}`
      );
      setName(data.name);
      setAge(data.age);
      setSpecie(data.specie);
    }
    getPet();
  }, [params.id]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || age === "" || specie === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
      return;
    }

    if (age < 1 || age > 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Age must be between 1 and 10!",
      });
      return;
    }

    const pet = { name, age, specie };
    const { data } = await updatePet(params.id, pet);
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Pet updated successfully!",
    }).then((result) => {
      if (result.value) {
        navigate("/petslist");
      }
    });

    setName("");
    setAge("");
    setSpecie("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h2 className="text-center">
              <MdAddCircle /> Edit Pet
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="specie">Specie</label>
                <select
                  className="form-control"
                  value={specie}
                  onChange={(e) => setSpecie(e.target.value)}
                >
                  <option value="">Select a specie</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Hamster">Hamster</option>
                  <option value="Loro">Loro</option>
                  <option value="MiniPing">MiniPing</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Fishes">Fishes</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
