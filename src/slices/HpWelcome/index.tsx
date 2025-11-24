import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

const Welcome: FC<WelcomeProps> = ({ slice }) => {
  return (
    <>
      <div className="flex mx-auto justify-between items-center pb-20">
        <span className="p-6 text-white">
          <div className="text-gray-400 pb-3">
            <PrismicRichText field={slice.primary.above_title} />
          </div>

          <div className="text-5xl/tight bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent font-light pb-4">
            <PrismicRichText field={slice.primary.title} />
          </div>

          <div className="text-base text-gray-100">
            <PrismicRichText field={slice.primary.under_title} />
          </div>
        </span>

        <span>
          <PrismicNextImage field={slice.primary.image} />
        </span>
      </div>
      <div>
        <div className="mt-36 text-white mx-auto text-center text-sm font-light">
          <PrismicRichText field={slice.primary.find_out_more} />
        </div>
        <div className="mt-2">
        <PrismicNextImage className="mx-auto" field={slice.primary.find_out_more_arrow} />
        </div>
      </div>
    </>
  );
};

export default Welcome;
