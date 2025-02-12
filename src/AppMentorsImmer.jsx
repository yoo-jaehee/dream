import React, { useState, useReducer } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    updatePerson((person) => {
      const mentor = person.mentors.find((map) => map.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    updatePerson((person) => person.mentors.push({ name, title }));
  };

  const handleDel = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => (m.name = name));
      mentor.name = current;
    });
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
