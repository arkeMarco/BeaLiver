import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type FiltersProps = SliceComponentProps<Content.FiltersSlice>;

const Filters: FC<FiltersProps> = ({ slice }) => {
  const {buttons_for_filters,filters_type, items, above_title_past_events, title_past_events } = slice.primary;

  const allEvents = items;
  const currentEvents = items.filter(item => item.tag_past_present[0].text == 'present');
  const pastEvents = items.filter(item => item.tag_past_present[0].text == 'past');

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {pastEvents.map((item, index) => (
      <>
        <div key={index}>
          <PrismicNextImage field={item.item_photo} />
        </div>
        <PrismicRichText field={item.item_title} />
        <PrismicRichText field={item.item_description} />
        <PrismicRichText field={item.item_info} />
        <PrismicRichText field={item.tag_past_present} />
        <PrismicRichText field={item.tag_track} />
        <PrismicRichText field={item.tag_type} />
      </>
      ))}
    </section>
  );
};

export default Filters;
