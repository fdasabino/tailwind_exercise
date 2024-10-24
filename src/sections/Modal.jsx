import React from "react";

export default function Modal({ image, title, disclaimer, id }) {
  return (
    <section
      id={id}
      className="flex justify-center p-5">
      <div
        className={`${image} rounded-md w-full h-screen bg-cover flex items-center p-5 flex-col`}>
        <h2 className="w-64 text-4xl text-bold text-center text-white">{title}</h2>
        <p className="text-lg text-white">{disclaimer}</p>
        <p className="text-2xl text-white underline">Buy now</p>
      </div>
    </section>
  );
}
