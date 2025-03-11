"use client";

import Image from "next/image";

const images = Array.from({ length: 20 }, (_, i) => ({
  src: require(`../../public/rasm${i + 1}.png`),
  alt: `rasm${i + 1}`,
}));

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto p-4">
      {images.map((img, index) => (
        <Image key={index} width={300} height={400} src={img.src} alt={img.alt} className=" bg-origin-border" />
      ))}
    </div>
  );
}
