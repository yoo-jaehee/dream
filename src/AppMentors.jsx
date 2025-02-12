import React, { useState, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  //dispatch : Reducer 호출할 수 있음
  //useReducer(personREducer, initialPerson)
  //personReducer : 우리가 객체를 새롭게 만들어갈 함수수
  //initialPerson : 초기값

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  };

  const handleDel = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}> 멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}> 멘토 추가하기</button>
      <button onClick={handleDel}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
