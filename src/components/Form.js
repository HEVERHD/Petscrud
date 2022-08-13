import React from "react";
import { useNavigate } from "react-router-dom";
import { createPet } from "../services";
import Swal from "sweetalert2";
import { MdAddCircle } from "react-icons/md";

export const Form = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [specie, setPecie] = React.useState("");

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

    if (age < 1 || age > 10) {
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
                  type="text"
                  className="form-control"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Specie</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Specie Ex: Dog"
                  value={specie}
                  onChange={(e) => setPecie(e.target.value)}
                />
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
