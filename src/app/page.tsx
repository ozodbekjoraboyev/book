"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [book, setBook] = useState<
    {
      author: {
        name: string;
      };
      deletedAt: null;
      description: null;
      id: number;
      image: string;
      name: string;
      stocks: {
        busy: boolean;
        id: number;
        locationId: number;
      }[];
    }[]
  >();
  useEffect(() => {
    axios
      .get(`https://library.softly.uz/api/app/books?size=20&page=1&order=DESC`)
      .then((res) => {
        console.log(res.data.items);
        setBook(res.data.items);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-5 gap-5 ">
        {book?.map((item) => {
          return (
            <div key={item.id} className=" bg-white text-black rounded p-2 ">
              <img
                className="h-[300px] w-[250px] m-auto rounded-xl"
                src={item.image}
                alt=""
              />
              <div>
                <p>{item.name}</p>
                <p className=" opacity-70">{item.author.name}</p>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
