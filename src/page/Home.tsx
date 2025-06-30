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

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let newFormData = { ...formData };
    if (name == "skills") {
      if (newFormData.skills.includes(value)) {
        newFormData.skills = newFormData.skills.filter(
          (item) => item !== value
        );
      } else {
        newFormData.skills.push(value);
      }
    } else {
      newFormData = { ...formData, [name]: value };
    }
    setFormData(newFormData);
    console.log(newFormData);
  };

  useEffect(() => {
    validateInputs();
  });

  const validateInputs = () => {
    let isNumber = false;
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((number) => {
      if (formData.name.includes(number)) {
        isNumber = true;
      }
    });

    if (isNumber) {
      setErrors("Name must not contain a number!!!");
    } else {
      setErrors("");
    }
  };

  return (
    <>
      <form>
        <h3>Welcome to The Game!</h3>
        First step, let's create your character.
        <div>
          <label>Character Name:</label>
          <input type="text" name="name" onChange={handleInputChange}></input>
        </div>
        <div>
          Character Class:
          <br />
          <label>Mage:</label>
          <input
            type="radio"
            name="class"
            value="mage"
            onChange={handleInputChange}
          ></input>
          <label>Fighter:</label>
          <input
            type="radio"
            name="class"
            value="fighter"
            onChange={handleInputChange}
          ></input>
          <label>Archer:</label>
          <input
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
      </form>
    </>
  );
}

export default Home;
