import { useEffect, useState } from "react";
import type { HomeFormData } from "../types/Home";

function Home() {
  const initData: HomeFormData = {
    name: "",
    class: "",
    hometown: "",
    skills: [],
  };

  const [formData, setFormData] = useState(initData);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    validateInputs();
  });

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let updatedFormData = { ...formData };
    if (name == "skills") {
      if (updatedFormData.skills.includes(value)) {
        const newValue = updatedFormData.skills.filter(
          (item) => item !== value
        );
        updatedFormData.skills = newValue;
      } else {
        updatedFormData.skills.push(value);
      }
    } else {
      updatedFormData = { ...formData, [name]: value };
    }
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const validateInputs = () => {
    const isNumber = formData.name.match(/\d/);
    const isSpecialChar = formData.name.match(/\W/);

    if (isNumber) {
      setErrors("Name must not contain a number!!!");
    } else if (isSpecialChar) {
      setErrors("Name must not contain a special character!!!");
    } else {
      setErrors("");
    }
  };

  const handleSubmitAction = (myFormData: FormData) => {
    console.log(myFormData);
  };

  return (
    <>
      <form action={handleSubmitAction}>
        <h3>Welcome to The Game!</h3>
        First step, let's create your character.
        <div>
          <label>Character Name:</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          Character Class:
          <br />
          <label>Mage:</label>
          <input
            required
            type="radio"
            name="class"
            value="mage"
            onChange={handleInputChange}
          ></input>
          <label>Fighter:</label>
          <input
            required
            type="radio"
            name="class"
            value="fighter"
            onChange={handleInputChange}
          ></input>
          <label>Archer:</label>
          <input
            required
            type="radio"
            name="class"
            value="archer"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>Hometown:</label>
          <select name="hometown" onChange={handleInputChange}>
            <option value=""></option>
            <option value="noxus">Noxus</option>
            <option value="demacia">Demacia</option>
            <option value="ionia">Ionia</option>
          </select>
        </div>
        <div>
          Skills:
          <br></br>
          <label>Stealth:</label>
          <input
            type="checkbox"
            name="skills"
            value="stealth"
            onChange={handleInputChange}
          ></input>
          <label>Marksmanship:</label>
          <input
            type="checkbox"
            name="skills"
            value="marksmanship"
            onChange={handleInputChange}
          ></input>
          <label>Magic:</label>
          <input
            type="checkbox"
            name="skills"
            value="magic"
            onChange={handleInputChange}
          ></input>
          <label>Defenses:</label>
          <input
            type="checkbox"
            name="skills"
            value="defenses"
            onChange={handleInputChange}
          ></input>
          <label>Luck:</label>
          <input
            type="checkbox"
            name="skills"
            value="luck"
            onChange={handleInputChange}
          ></input>
        </div>
        {errors ? (
          <div style={{ color: "red" }}>
            Error!
            <div>{errors}</div>
          </div>
        ) : (
          ""
        )}
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default Home;
