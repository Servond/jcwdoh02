"use client";
import { useState, useEffect } from "react";

export default function UseEffect({ nama }: { nama: string }) {
  const [imgUrl, setImgUrl] = useState<string>();
  const [imgUrlUE, setImgUrlUE] = useState<string>();

  // Tanpa Use Effect
  async function fetchImgUrl(): Promise<void> {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const parse = await res.json();

      setImgUrl(parse?.message);
    } catch (err) {
      alert(err);
    }
  }

  // Menggunakan Use Effect
  async function fetchImgUrlUE(): Promise<void> {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const parse = await res.json();

      setImgUrlUE(parse?.message);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    fetchImgUrlUE();
  }, [imgUrl]);

  return (
    <div>
      Hello {nama}
      <div>
        <p>Tanpa Use Effect</p>
        <button onClick={fetchImgUrl}>Load Image</button>
        <img src={imgUrl} alt="gambar-anjing" />
      </div>
      <div>
        <p>Menggunakan Use Effect</p>
        <img src={imgUrlUE} alt="gambar-anjing" />
      </div>
    </div>
  );
}
