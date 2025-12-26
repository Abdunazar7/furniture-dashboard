import React, { useState } from "react";
import { FormContainer, FormGroup, SubmitButton } from "./CreateProductPage.styled";

function CreateProductPage() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    desc: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Created:", form);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <label>Title</label>
        <input
          name="title"
          placeholder="Product name"
          value={form.title}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <label>Price</label>
        <input
          name="price"
          type="number"
          placeholder="0.00"
          value={form.price}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <label>Image URL</label>
        <input
          name="image"
          placeholder="https://example.com/image.jpg"
          value={form.image}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Choose category</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="accessory">Accessory</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label>Description</label>
        <textarea
          name="desc"
          placeholder="Write about product..."
          value={form.desc}
          onChange={handleChange}
        />
      </FormGroup>

      <SubmitButton type="submit">Create</SubmitButton>
    </FormContainer>
  );
}

export default CreateProductPage;
