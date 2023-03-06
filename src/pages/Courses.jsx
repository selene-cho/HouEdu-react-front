import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [text, setText] = useState("");
  const navigate = useNavigate(); // 코드상에서 동적으로 이동
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/course/${text}`);
  };
  return (
    <div>
      Courses{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video id: "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
