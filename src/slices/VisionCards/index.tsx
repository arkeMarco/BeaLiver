import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `VisionCards`.
 */
export type VisionCardsProps = SliceComponentProps<Content.VisionCardsSlice>;

/**
 * Component for "VisionCards" Slices.
 */
const VisionCards: FC<VisionCardsProps> = ({ slice }) => {
  const { cards } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-4 space-y-12"
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row gap-8 items-center ${
            index === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Colonna Immagine */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-video overflow-hidden rounded-lg">
              <PrismicNextImage
                field={card.image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonna Testo */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-2xl font-bold mb-4 text-white">
              <PrismicRichText field={card.title} />
            </div>
            <div className="text-gray-300">
              <PrismicRichText field={card.body} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};


export default VisionCards;
