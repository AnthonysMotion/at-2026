import { gsap } from "gsap";

function getAllIndividualElements(root) {
  const result = [];

  function recurse(el) {
    result.push(el);  // add current element regardless of children
    const children = Array.from(el.children);
    children.forEach(child => recurse(child));
  }

  recurse(root);
  return result;
}

export function fadeUpAllIndividual(root, options = {}) {
  if (!root) return;

  const elements = getAllIndividualElements(root);

  gsap.fromTo(
    elements,
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.02,
      ease: "power3.out",
      duration: 1,
      clearProps: "opacity,y",
      ...options,
    }
  );
}
