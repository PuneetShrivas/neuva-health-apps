"use client";

import { categories } from "@/app/lib/categories";
import { cn } from "@/core/lib/utils";
import { notFound, useRouter } from "next/navigation";
import { PiHospital, PiPackage } from "react-icons/pi";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { buttonVariants } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export const SlugHeader = ({ slug }: { slug: string }) => {
  const value = (a: string) => a.replaceAll("-", " ");
  const router = useRouter();

  const data = categories.find((c) => c.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col p-6 sm:p-10 md:p-20 mx-auto">
      <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-screen-lg w-full">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1 text-sm sm:text-base">
        <span>Home</span>
        <span>/</span>
        <Select onValueChange={(value) => router.push(`/home/${value}`)}>
        <SelectTrigger
          className={cn(
          buttonVariants({ variant: "link" }),
          "border-none shadow-none focus:border-none focus-visible:border-none"
          )}
        >
          <SelectValue
          className="capitalize"
          defaultValue={slug}
          placeholder={value(slug)
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
          {categories.map((category) => (
            <SelectItem
            key={category.slug}
            value={category.slug}
            className="capitalize"
            >
            {value(category.slug)}
            </SelectItem>
          ))}
          </SelectGroup>
        </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-center text-center w-full sm:w-3/4">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-10 sm:leading-15">
        {data.heroTitle}
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-15 justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
        <TbRosetteDiscountCheck className="text-xl sm:text-2xl text-primary" />
        <span className="text-sm sm:text-base">Clinically-proven ingredients</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
        <PiHospital className="text-xl sm:text-2xl text-primary" />
        <span className="text-sm sm:text-base">No Clinic visit required</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
        <PiPackage className="text-xl sm:text-2xl text-primary" />
        <span className="text-sm sm:text-base">Discreet Delivery</span>
        </div>
      </div>
      </div>
    </div>
  );
};
