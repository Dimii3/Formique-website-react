import { motion } from "framer-motion";
const logos = [
  {
    src: "/logo-1.png",
    alt: "iceberg",
  },
  {
    src: "/logo-2.png",
    alt: "invert",
  },
  {
    src: "/logo-3.png",
    alt: "minty",
  },
  {
    src: "/logo-4.png",
    alt: "proline",
  },
  {
    src: "/logo-5.png",
    alt: "penta",
  },
];
export default function Logos() {
  const logosAnimation = {
    x: ["0%", "-100%"],
    transition: {
      duration: 12,
      ease: "linear",
      repeat: Infinity,
    },
  };
  return (
    <section className="logos">
      <motion.ul animate={logosAnimation} className="logos__list">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="logos__image"
          />
        ))}
      </motion.ul>
      <motion.ul animate={logosAnimation} className="logos__list">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="logos__image"
          />
        ))}
      </motion.ul>
    </section>
  );
}
