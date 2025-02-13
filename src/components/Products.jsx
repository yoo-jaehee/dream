import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`) // 네트워트 요청을 보내서 데이터를 가져오는 함수
      .then((res) => res.json()) // JSON 데이터를 Javascritpt 객체로 변환
      .then((data) => {
        setProducts(data); // 변환된 데이터를 저장
      })
      .catch((e) => setError("에러가 발생했음!")) // .catch: fetch 가 실패했을 때 실행됨
      .finally(() => setLoading(false)); // .finally: fetch가 then, catch든 무조건 실행됨
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]); // checked 가 변경될 때 useEffect가 실행됨

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
