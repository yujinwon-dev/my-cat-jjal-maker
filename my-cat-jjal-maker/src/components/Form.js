import React from "react";

function Form({ updateMainCat }) {
  const includesHangeul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(event) {
    const userValue = event.target.value;
    if (includesHangeul(userValue)) {
      setErrorMessage("한글은 입력할 수 없습니다.");
    } else {
      setErrorMessage("");
    }
    setValue(userValue);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("생성 버튼 클릭");

    if (value === "") {
      setErrorMessage("문구를 입력해주세요.");
      return;
    }
    updateMainCat(value);
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="영어 문구를 입력해주세요."
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </form>
  );
}

export default Form;
