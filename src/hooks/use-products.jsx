import React, { useState, useEffect } from "react";

export default function useProducts({ salesonly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesonly ? "sale_" : ""}products.json`) // 네트워트 요청을 보내서 데이터를 가져오는 함수
      .then((res) => res.json()) // JSON 데이터를 Javascritpt 객체로 변환
      .then((data) => {
        setProducts(data); // 변환된 데이터를 저장
      })
      .catch((e) => setError("에러가 발생했음!")) // .catch: fetch 가 실패했을 때 실행됨
      .finally(() => setLoading(false)); // .finally: fetch가 then, catch든 무조건 실행됨
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesonly]);

  return [loading, error, products]; // 커스텀 훅은 우리가 원하는 데이터를 반환한다.
}
