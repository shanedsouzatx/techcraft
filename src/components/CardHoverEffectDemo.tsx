import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl px-2 md:px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Webistes",
    count: 2550,
  },
  {
    title: "Logos",
    count: 2550,
  },

  {
    title: "Mobile Apps",
    count: 550,
  },
  {
    title: "Ecommerce Websites",
    count: 1750,
  },
];
