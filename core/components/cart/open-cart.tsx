import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center  text-black transition-colors dark:border-neutral-700 dark:text-white">
      <ShoppingCartIcon
        className={clsx(
          "h-7 transition-all ease-in-out hover:scale-110",
          className
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-sm bg-[#2F5F8D] text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
