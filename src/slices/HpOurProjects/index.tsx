"use client"; // Necessario per usare useState in Next.js (App Router)

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

export type HpOurProjectsProps = SliceComponentProps<Content.HpOurProjectsSlice>;

const HpOurProjects: FC<HpOurProjectsProps> = ({ slice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = slice.primary.cards;

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <section className="py-24 w-full">
      {/* Definizione Animazione CSS */}
      <style jsx global>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto">
        {/* Header Sezione */}
        <div className="text-center mb-16 space-y-2">
          <div className="text-gray-400 text-sm">
            <PrismicRichText field={slice.primary.abovetitle} />
          </div>
          <div className="text-white text-2xl font-light neutralFace">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>

        {/* Carosello Card */}
        <div className="relative bg-transparent mb-16">
          {/* 
             WRAPPER ANIMATO:
             1. key={currentIndex}: Forza React a ricreare il div quando l'indice cambia.
             2. animate-slide-up-fade: Applica l'animazione definita sopra.
          */}
          <div key={currentIndex} className="animate-slide-up-fade">
            {/* Card Content Flex Container */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              {/* Sinistra: Immagine */}
              <div className="w-full lg:w-1/2 relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                <PrismicNextImage
                  field={currentCard.image}
                  className="object-cover w-full h-full"
                  imgixParams={{ fit: "crop" }}
                  priority // Aggiunto priority per evitare flash su cambio immagine rapido
                />
              </div>

              {/* Destra: Contenuto Testuale */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-8 py-4">
                {/* Categoria e Titolo */}
                <div>
                  <div className="text-gray-400 text-xs mb-2">
                    <PrismicRichText field={currentCard.category} />
                  </div>
                  <div className="text-white text-xl font-light">
                    <PrismicRichText field={currentCard.title} />
                  </div>
                </div>
                <div className="text-gray-300 text-sm font-light ">
                  <PrismicRichText field={currentCard.description} />
                </div>

                <div className="text-gray-400 text-xs mb-2">Competences:</div>
                <div className="text-gray-300 text-sm font-light ">
                  <PrismicRichText field={currentCard.competenze} />
                </div>
                <div className="text-gray-400 text-xs mb-2">Technology:</div>
                <div className="">
                  <PrismicNextImage field={currentCard.tecnologyimg} />
                </div>
              </div>
            </div>
          </div>

          {/* Navigazione Carosello */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevCard}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300"
              aria-label="Previous project"
            >
              <Image
                src="/Images/rightArrow.svg"
                alt="Previous"
                width={16}
                height={16}
                className="rotate-180 invert-0 hover:invert"
              />
            </button>

            <button
              onClick={nextCard}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300"
              aria-label="Next project"
            >
              <Image
                src="/Images/rightArrow.svg"
                alt="Next"
                width={16}
                height={16}
                className="invert-0 hover:invert"
              />
            </button>
          </div>

          {/* Bottone "See more projects" (Fuori dal blocco animato per restare fisso se preferisci, o dentro se vuoi che animi anche lui) */}
          <div className="pt-4 w-full flex justify-center mt-8">
            <PrismicNextLink
              field={slice.primary.button_projects}
              className="inline-flex items-center gap-3 px-8 py-3 border border-white/30 rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span>See more projects</span>
              <Image
                src="/Images/rightArrow.svg"
                alt="Arrow right"
                width={20}
                height={20}
                className="group-hover:invert transition-all"
              />
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HpOurProjects;
