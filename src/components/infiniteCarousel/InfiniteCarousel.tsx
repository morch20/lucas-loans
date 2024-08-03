"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
};

const InfiniteCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 2 }),
    ]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container items-center">
                    {slides.map((i) => (
                        <div className="embla__slide" key={i}>
                            <div className="embla__slide__number">
                                <Image
                                    src={"/partners/" + i}
                                    alt={i}
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteCarousel;
