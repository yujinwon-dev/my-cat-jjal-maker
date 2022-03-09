import React from "react";

function Form() {
  const [value, setValue] = React.useState("");

  function handleInputChange(event) {
    const userValue = event.target.value;
    setValue(userValue);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("생성 버튼 클릭");
  }
  
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="한글 문구를 입력해주세요."
      />
      <button type="submit">생성</button>
    </form>
  );
}

export default Form;