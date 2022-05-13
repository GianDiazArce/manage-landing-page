import { ComponentPropsWithoutRef } from "react";
import { Testimonial } from "../../db/texts";

interface Props extends ComponentPropsWithoutRef<"div"> {
  testimonial: Testimonial;
}

export const Testimonials: React.FC<Props> = ({
  testimonial,
  className,
  ...rest
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-3 relative bg-gray-light py-5 px-3 ${className}`}
      {...rest}
    >
      <img
        className="w-16 absolute z-10 -top-8"
        src={`/images/${testimonial.img}.png`}
        alt={testimonial.img}
      />
      <h4 className="text-lg font-bold mt-8 text-blue-dark">
        {testimonial.autor}
      </h4>
      <p className="paragraph text-center">{testimonial.text}</p>
    </div>
  );
};
