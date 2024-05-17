import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState(""); // 入力された名前を管理するState
  const [submittedName, setSubmittedName] = useState(""); // 提出された名前を管理するState

  const handleChange = (e) => {
    setName(e.target.value); // 名前が入力されるたびにStateを更新
  };

  const handleAlert = (e) => {
    e.preventDefault(); // 名前が入力されるたびにStateを更新
    setSubmittedName(name); // 提出された名前を更新
    alert("あなたの名前は、" + name + "です。"); // アラートで名前を表示
  };

  return (
    <div className="App">
      <form onSubmit={handleAlert}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="名前を入力してください"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>あなたの名前は{submittedName}です。</p>}
    </div>
  );
}

export default NameForm;
