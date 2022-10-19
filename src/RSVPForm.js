import React, { useState } from "react";

function RSVPForm() {
    const initialFormState = {
        name: "",
        age: "",
        newMember: false,
        comment: "",
    }

    const [formData, setFormData] = useState({...initialFormState})

    const handleChange = ({target}) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.name, formData.age, formData.newMember, formData.comment)
        setFormData({...initialFormState})
    }
   return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Enter Your Name:
                <input 
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
            </label>
            <br />
            <label htmlFor="age">
                Select your age:
                <select
                    id="age"
                    name="age"
                    onChange={handleChange}
                    value={formData.age}
                >
                    <option value="">-- Select an Option --</option>
                    <option value="na">Prefer not to say</option>
                    <option value="0-19">0-19</option>
                    <option value="20-39">20-39</option>
                    <option value="40-59">40-59</option>
                    <option value="60+">60+</option>
                </select>
            </label>
            <br/>
            <label htmlFor="newMember">
                Are you a new member?
                <input 
                    id="newMember"
                    type="checkbox"
                    name="newMember"
                    onChange={handleChange}
                    checked={formData.newMember}
                    value="newMember"
                />
            </label>
            <br />
            <label htmlFor="comment">
                Comments or questions?
                <textarea 
                    id="comment"
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    value={formData.comment}
                    style={{resize: "none"}}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )

}

export default RSVPForm;