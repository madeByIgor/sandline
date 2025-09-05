import gsap from "gsap";

interface StreamAnimationProps {
  className: string;
}

export default function StreamAnimation({ className }: StreamAnimationProps) {
  const tl = gsap.timeline();
  tl.to(`.${className}`, {
    color: "#62b762",
    duration: 0.25,
  }).to(
    `.${className} .js-circle`,
    {
      scale: 1.6,
      yoyo: true,
      repeat: 1,
      duration: 0.25,
    },
    "<"
  );
  return tl;
}
