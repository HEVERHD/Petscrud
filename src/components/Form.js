import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPet } from "../services";
import Swal from "sweetalert2";
import { MdAddCircle } from "react-icons/md";

export const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [specie, setPecie] = useState("");

  const navigate = useNavigate();

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

    if (age < 1 || age > 12) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Age must be between 1 and 10!",
      });
      return;
    }

    if (specie !== "Dog" && specie !== "Cat") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Specie must be dog or cat!",
      });
      return;
    }

    const pet = { name, age, specie };
    const { data } = await createPet(pet);
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Pet created successfully!",
    }).then((result) => {
      if (result.value) {
        navigate("/petslist");
      }
    });

    setName("");
    setAge("");
    setPecie("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center">
              <i className="fas fa-user-plus"></i> Create Pet
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createPet({ name, age });
                setName("");
                setAge("");
              }}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="specie">Specie</label>
                <select
                  className="form-control"
                  value={specie}
                  onChange={(e) => setPecie(e.target.value)}
                >
                  <option value="">Select a specie</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Cat">Hamster</option>
                  <option value="Cat">Loro</option>
                  <option value="Cat">MiniPing</option>
                  <option value="Cat">Rabbit</option>
                  <option value="Cat">Fishes</option>
                </select>
              </div>
            </form>{" "}
            <br />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-success btn-block text-center"
              alert="success"
            >
              Create
              <MdAddCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
