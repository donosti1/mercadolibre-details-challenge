import React, {useState} from "react";
import {Icon, Image, Link, Stack} from "@chakra-ui/react";
import {RiArrowDropLeftLine, RiArrowDropRightLine} from "react-icons/ri";

const ImageSlider = ({slides}: any) => {
  const [isShownNav, setIsShownNav] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Stack
      className="slider"
      justifyContent="center"
      position="relative"
      spacing={0}
      style={{userSelect: "none"}}
      width="100%"
      onMouseEnter={() => setIsShownNav(true)}
      onMouseLeave={() => setIsShownNav(false)}
    >
      {isShownNav && (
        <>
          <Stack
            alignItems="center"
            backgroundColor="white"
            borderRadius="md"
            cursor="pointer"
            height={20}
            justifyContent="center"
            left="0"
            position="absolute"
            width={10}
            z-index="10"
            onClick={prevSlide}
          >
            <Icon as={RiArrowDropLeftLine} color="secondary.900" height={12} width={10} />
          </Stack>
          <Stack
            alignItems="center"
            backgroundColor="white"
            borderRadius="md"
            cursor="pointer"
            height={20}
            justifyContent="center"
            position="absolute"
            right="0"
            width={10}
            z-index="10"
            onClick={nextSlide}
          >
            <Icon as={RiArrowDropRightLine} color="secondary.900" height={12} width={10} />
          </Stack>
        </>
      )}
      {slides.map((slide, index) => {
        return (
          <Stack key={index} className={index === currentSlide ? "slide active" : "slide"}>
            {index === currentSlide && (
              <Link href="/productId">
                <Image key={index} alt="" src={slide.image} />
              </Link>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ImageSlider;
