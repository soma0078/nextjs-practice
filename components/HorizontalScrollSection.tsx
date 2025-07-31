"use client";

import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxes = gsap.utils.toArray<HTMLLIElement>(".box");
    const lines = gsap.utils.toArray<HTMLLIElement>(".step-line");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    boxes.forEach((box, i) => {
      tl.fromTo(
        box,
        { autoAlpha: 0, x: 50 },
        { autoAlpha: 1, x: 0, duration: 1 }
      );
      if (i < lines.length) {
        tl.to(
          lines[i],
          { width: 450, duration: 1, ease: "none" },
          i * 0.3 + 0.5
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      className="bg-gray-50 py-20 overflow-x-auto"
      id="box-container"
      ref={containerRef}
    >
      <ul className="space-x-12.5 flex justify-between  max-w-266 mx-auto">
        {datas.map((data) => {
          return <ListItem key={data.step} {...data} />;
        })}
      </ul>
    </section>
  );
}

function ListItem({ step, content }: { step: number; content: string }) {
  return (
    <li
      className={cn(
        "box",
        "odd:[&>div]:bg-gray-300 even:[&>div]:bg-gray-100 text-center [&>div]:mx-auto space-y-2",
        "last:[&_.step-line]:hidden"
      )}
    >
      <span className="size-6 z-5 rounded-full bg-blue-300 inline-flex justify-center relative font-semibold text-white">
        {step}
        <span
          className={cn(
            "step-line",
            "absolute top-1/2 h-0.5 w-50 bg-blue-300 -z-1 left-0"
          )}
          style={{ width: 0, transformOrigin: "left center" }}
        />
      </span>
      <h3>{content}</h3>
      <div className="size-50 ">image </div>
    </li>
  );
}
