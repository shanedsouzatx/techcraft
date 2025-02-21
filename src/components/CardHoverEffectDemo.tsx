import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-4xl px-2 md:px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Webistes",
    count: 150,
  },
  {
    title: "Logos",
    count: 250,
  },

  {
    title: "Mobile Apps",
    count: 50,
  },
  {
    title: "Ecommerce Websites",
    count: 100,
  },
];
