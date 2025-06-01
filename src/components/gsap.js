import { gsap } from "gsap";

function getAllIndividualElements(root) {
  const result = [];

  function recurse(el) {
    const children = Array.from(el.children);
    if (children.length === 0) {
      result.push(el);
    } else {
      children.forEach(child => recurse(child));
    }
  }

  recurse(root);
  return result;
}

export function fadeUpAllIndividual(root, options = {}) {
  if (!root) return;

  const elements = getAllIndividualElements(root);

  gsap.fromTo(elements,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1,
      clearProps: "opacity,y",
      ...options,
    }
  );
}
