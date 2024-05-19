import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import "./add.css"
import MainContext from "../../../context/context";
import axios from "axios";


const Add = () => {
  const { data, setData } = useContext(MainContext);



  return (
    <div>
      
      <Formik
        initialValues={{ image: "", title: "", price: "", description: "", category: "menu desert" }}
        onSubmit={(values, { resetForm }) => {
          axios
    .post("http://localhost:8080/api/products", {
      "title": values.title,
      "price": values.price,
      "image": values.image,
      "description": values.description,
      "category": values.category,
    })
    .then((res) => {
      setData([...data, res.data]);
      resetForm();
    })
    .catch((error) => {
      console.error("There was an error adding the product!", error);
    });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="container  p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 "
            onSubmit={handleSubmit}
          >
            <label htmlFor="title" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="form-control"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              className="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}

            <label htmlFor="category" className="form-label">
              Product Category
            </label>
            <select
              name="category"
              id="category"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            >
              <option value="menu desert">Desert</option>
              <option value="mennu drink">Drink</option>
            </select>
            {errors.category && touched.category && <div className="text-danger">{errors.category}</div>}

            <button className="btn btn-success mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add