"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const datas = [
  {
    step: 1,
    content: "step 1",
  },
  {
    step: 2,
    content: "step 2",
  },
  {
    step: 3,
    content: "step 2",
  },
];

export default function HorizontalScrollSection() {
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: ".box",
      x: 500,
    });
  });

  return (
    <section className="bg-gray-50 py-20">
      <ul className={cn("box", "space-y-12.5")}>
        {datas.map((data) => {
          return <ListItem key={data.step} {...data} />;
        })}
      </ul>
    </section>
  );
}

function ListItem({ step, content }: { step: number; content: string }) {
  return (
    <li className="odd:[&>div]:bg-gray-300 even:[&>div]:bg-gray-100 text-center [&>div]:mx-auto space-y-2">
      <span className="size-6 rounded-full bg-blue-300 inline-flex justify-center font-semibold text-white">
        {step}
      </span>
      <h3>{content}</h3>
      <div className="size-50 ">image </div>
    </li>
  );
}
