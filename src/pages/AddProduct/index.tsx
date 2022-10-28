import axios from "axios";
import { FC, useEffect, useState } from "react";

const AddProduct: FC = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [price, setPrice] = useState(null);
  const [img, setImg] = useState(null);

  const [categories, setCategories] = useState([]);

  const data = {
    Name: name,
    ShortDescription: desc,
    LongDescription: description,
    CategoryId: categoryId,
    Price: price,
    ImageUpload: img,
  };

  const setData = (e: any) => {
    e.preventDefault();
    axios
      .post("product", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const getCategory = async () => {
    const response = await axios.get("category/get-all");
    console.log(response);
    setCategories(response.data.resultData.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <form
      className="ui form"
      onSubmit={(e) => {
        setData(e);
      }}
    >
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
      </div>
      <div className="field">
        <label>Short Description</label>
        <input
          type="text"
          name="shortDescription"
          placeholder="ShortDescription"
          onChange={(e) => {
            setDesc(e.target.value);
            console.log(desc);
          }}
        />
      </div>
      <div className="field">
        <label>LongDescription</label>
        <input
          type="text"
          name="longDescription"
          placeholder="LongDescription"
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(description);
          }}
        />
      </div>

      <div className="field">
        <label>CategoryId</label>
        <select
          id="category"
          onChange={(e) => {
            setCategoryId(Number(e.target.value));
          }}
        >
          {categories &&
            categories.map((category) => {
              return <option key={category.id} value={category.id}>{category.code}</option>;
            })}
        </select>
      </div>

      <div className="field">
        <label>Price</label>
        <input
          type="number"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value);
            console.log(price);
          }}
        />
      </div>
      <div className="field">
        <label>Image Upload</label>
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={(e) => {
            console.log(e.target.files);
            setImg(e.target.files);
          }}
        />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
