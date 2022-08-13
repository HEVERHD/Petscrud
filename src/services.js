import axios from "axios";

//service to get all pets
export const getPets = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets`
  );
};

//service to create a new pet
export const createPet = (pet) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets`,
    pet
  );
};

//service to update a pet
export const updatePet = (id, pet) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets/${id}`,
    pet
  );
};
//service to delete a pet
export const deletePet = (_id) => {
  return axios.delete(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets/${_id}`
  );
};

//service to get a pet by id
export const getPet = (id) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets/${id}`
  );
};

//service to get all pets by breed
export const getPetsByBreed = (breed) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}/pets/breed/${breed}`
  );
};
