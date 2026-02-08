import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Title`.
 */
export type TitleProps = SliceComponentProps<Content.TitleSlice>;

/**
 * Component for "Title" Slices.
 */
const Title: FC<TitleProps> = ({ slice }) => {
  const { overtitle, title } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-white text-center"
    >
      {overtitle && (
        <div className="text-gray-400 pt-12 mb-4 text-sm">
          <PrismicRichText field={overtitle} />
        </div>
      )}
      <div className="neutralFace text-2xl mb-8">
        <PrismicRichText field={title} />
      </div>
    </section>
  );
};

export default Title;
