import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Fragment } from "react";

export type HpBandaProps = SliceComponentProps<Content.HpBandaSlice>;

const HpBanda: FC<HpBandaProps> = ({ slice }) => {
  return (
    <section className="w-full rounded-3xl border-white border-1 py-16" style={{ backgroundColor: '#010017' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 text-center">
          
          {slice.primary.field.map((item, index) => (
            <Fragment key={index}>
              <div className="flex flex-col items-center flex-1 w-full">
                <div className="text-white text-5xl md:text-3xl font-bold mb-2">
                  <PrismicRichText field={item.number} />
                </div>
                <div className="text-gray-400 text-sm md:text-sm font-light">
                  <PrismicRichText field={item.description} />
                </div>
              </div>

              {index !== slice.primary.field.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-white mx-4 self-center"></div>
              )}
            </Fragment>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HpBanda;
