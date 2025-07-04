"use client";

import { cn } from "@/core/lib/utils";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../ui/card";

const HeroCards = () => {
  const cards = [
    {
      href: "/home/have-better-sex",
      offset: 60,
      text: "Have longer sex",
      subtitle: "Starting from ₹599",
      img: "/assets/blue-pills.png",
      url: "https://s3-alpha-sig.figma.com/img/0495/d1e9/e650f8125ade3ed9e58c4588c4140d83?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s-9CF~BhCsUYsQMsn7Vnf6slYYm1nIronN2mWWMcBgMDwTH-MZCvsO9sipuWySAYWPGiULIx2hy0QUB~fF88akFcJXwu0nOyKabexcHtyuIPnKvmcUFHoYfowAxGST5ircmnhGak-YvmMpgT3kjzRyCt~qfRIdIq-sL3lDTEBaSXItKeXWfvBy34EVgZFPQN4930NbV-pGV2NGlTT4QDUhuUJacr88YijCvzbYs7O-kOnhedcTqJ6HxhMHR2sMkrFF0bmJlsORifLSDI2veiI9OmifvapMWq6LoU9hWOPOS4mNeggAm8CeQu19cjVMPME~vl7RrnQcpJZBHMiJNRMg__",
    },
    {
      href: "/home/lose-weight",
      offset: 20,
      text: "Lose weight",
      subtitle: "Starting from ₹599",
      img: "/assets/kwik-pen.png",
      url: "https://s3-alpha-sig.figma.com/img/c7e1/b758/b832df8a58cfef1039e364d8ea41d24a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UbND9auF3LNR88Lb8wvdfafyl72ebU9IR678TeOvacnqAL092ZxaBxR7rQDSlaXgzSfSIpl2uWzaQqrcxyPHUp-xO8Jziyb~uB3~wf3Gu6alZQ8Mcf2vaZLB3vMpb7YuajanRhrgKLEgktYw8M9cpUpNoz~-U2Rnkl~iyGJ0ZdQ5iggUpC0BaQ1CAb4YXRNXtLQHUT3DUoYEjZZj7ixHoH8Y~FgzHKHP6sNpfE-DTrZWPLrm4I5fs0h-FY64DDikB22f6po22ryIQRy~a4g~hiaCVIrt~G9Nv1TnbX8eta7jJzlYkGVdvghUpFWHjTVYvJV6k~gK~Jvy5HoqTJN-ag__",
    },
    {
      href: "/home/tackle-anxiety",
      offset: 35,
      text: "Tackle Anxiety",

      subtitle: "Starting from ₹599",
      img: "/assets/yellow_pills.png",
      url: "https://s3-alpha-sig.figma.com/img/4dad/4f28/a4e39cd76c1b3ab52a1168fe084ba9a0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lhfTIkjYQx4TXug1V0rrVTdVw8CHet~NtntxGOG-Vcrs-T6HJWfYWlrQqIFvEpVQwv8RV1YBFP6n3Bi1s1l50Zzn481lMZJshtafCU57cqxfxqTIlW6eI08SKsiFNdETG-ngk9LdAZpgcr81GZ9q7-UZrSC3UgOROOmbxwf7YqliUHyF3I-Yj5Bpoky3XBfuXi3jqEGGCbOXkLXnNSTRox59RuSb3z4N118qTBCBetAXTRzP9N7btdEB3KKtaK3WQpPeLPcAEh~A7jdg3rbaowPNfUYbslLisbl0qjvN5moa3RbjNgRnxg3UEKT8fIIPDUhpU7rG018vGW5lIGvIew__",
    },
    {
      href: "/home/regrow-hair",
      offset: 25,
      text: "Regrow Hair",
      subtitle: "Starting from ₹599",
      img: "/assets/blue-pills.png",
      url: "https://s3-alpha-sig.figma.com/img/4a5f/4504/088d94a4dd8f0231562ff38322d3875d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pYNbcNZhC2-YMYOhf7huQhjvaEg9dD3xFODX6pWx7ZXXMHsJDcHBA-uIAYwovHOxQuZw4WIISoQW6qAROyFkxAtDyym5webZinf7K5PrBJ0d05JixTvKLZjLhORrNraRlpDzPTU2D5hO~p1CS~4Mn5rWkEyCfka5RNXbPKfgQhEkbuxmbTtXQm8SGATu2IV75qBMw8vxbzbYR61fvd5xQckzx3lMYRfx~uomfUjS7Xf0EGD30bqOLQ261GUYrTXLWET7CgBerqzJCu4SJzzHWC7SOyCGodJdhpRoEmn4-jALvwuEZm1Vjgsy8RmdZfXF3NJvDYzdOSJamGPPXn-0Vg__",
    },
  ];

  const router = useRouter();

  return (
    <motion.header
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-4"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() => {
            router.push(card.href);
          }}
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundPositionY: `${card.offset}%`,
          }}
          className={cn(
            "relative shadow-none font-bold border-0 bg-cover h-14 md:h-32 text-neutral-10 flex items-center justify-between p-6 overflow-hidden z-0 transition-transform duration-300 hover:scale-105"
          )}
        >
          <CardContent className="flex flex-col justify-center w-full h-full p-0">
            <div className="absolute inset-0 bg-primary-95 -z-10" />
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="text-xl">{card.text}</h2>
                <p className="text-sm font-light text-neutral-6">{card.subtitle}</p>
              </div>
              <img
                src={card.img}
                alt={card.text}
                className=" w-24 h-24 md:w-48 md:h-48 object-contain"
              />
              <ArrowRightCircle />
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.header>
  );
};

export default HeroCards;
