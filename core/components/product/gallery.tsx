"use client";

import { GridTileImage } from "@/core/components/grid/tile";
import {
  useProduct,
  useUpdateURL,
} from "@/core/components/product/product-context";
import Image from "next/image";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;
  console.log("Gallery images", images);
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex =
    imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  return (
    <form>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain rounded-xl"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {/* {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-muted-foreground backdrop-blur-sm dark:border-black dark:bg-neutral-900/80">
              <Button
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </Button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <Button
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Next product image"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </Button>
            </div>
          </div>
        ) : null} */}
      </div>

      {images.length > 1 ? (
        <ul className="my-2 h-24 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, i) => {
            const index = i; // since we sliced from 1
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="h-20 w-20">
          <button
            formAction={() => {
              const newState = updateImage(index.toString());
              updateURL(newState);
            }}
            aria-label="Select product image"
            className="h-full w-full"
          >
            <GridTileImage
              alt={image.altText}
              src={image.src}
              width={80}
              height={80}
              active={isActive}
            />
          </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
