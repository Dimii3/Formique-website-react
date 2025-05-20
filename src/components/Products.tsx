import BackgroundLight from "./BackgroundLight";
import SectionHeading from "./SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  useGSAP(() => {
    gsap.utils.toArray(".product-item").forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 60%",
          end: "bottom bottom",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
      });
    });
    gsap.utils
      .toArray(".products-content--bottom .product-item__text")
      .forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
            markers: true,
          },
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        });
      });
  });

  return (
    <>
      <BackgroundLight className="products-background"></BackgroundLight>
      <section className="products container">
        <SectionHeading
          subtitle="Sculptures"
          heading="Tailored Sculptures for Every Purpose"
          text="From elegant indoor décor to striking outdoor statements."
          subtitleClass="products__subtitle"
          headingClass="products__heading"
          textClass="products__text"
        ></SectionHeading>
        <div className="products-content">
          <div className="product-item">
            <div className="product-item__image">
              <img src="prod-1.png" alt="Sculpture" />
            </div>
            <div className="product-item__bottom">
              <span className="product-item__number">
                001 <div className="square"></div>
              </span>
              <h3 className="product-item__title">Eclipsed Whispers</h3>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item__image">
              <img src="prod-2.png" alt="Sculpture" />
            </div>
            <div className="product-item__bottom">
              <span className="product-item__number">
                002 <div className="square"></div>
              </span>
              <h3 className="product-item__title">Fractured Eternity</h3>
            </div>
          </div>
        </div>
        <div className="products-content--bottom">
          <div className="product-item">
            <div className="product-item__image">
              <img src="prod-4.png" alt="Sculpture" />
            </div>
            <div className="product-item__bottom">
              <span className="product-item__number">
                003 <div className="square"></div>
              </span>
              <h3 className="product-item__title">Resonant Void</h3>
            </div>
          </div>
          <div className="products-content--bottom__right">
            <p className="text product-item__text">
              Each of our sculptures is a fusion of artistic vision and
              masterful technique. Crafted by hand using premium materials —
              including bronze, marble, clay, and resin — our pieces are
              designed to stand the test of time, both structurally and
              aesthetically.
            </p>
          </div>
        </div>
        <div className="products-content--bottom">
          <div className="product-item product-item--secondary">
            <div className="product-item__image">
              <img src="prod-5.png" alt="Sculpture" />
            </div>
            <div className="product-item__bottom">
              <span className="product-item__number">
                004 <div className="square"></div>
              </span>
              <h3 className="product-item__title">Temporal Bloom</h3>
            </div>
          </div>
          <div className="products-content--bottom__right">
            <p className="text product-item__text">
              Whether you're seeking a lifelike portrait, an abstract
              centerpiece, or a symbolic installation, every detail is shaped
              with precision, care, and a deep respect for the craft. No two
              sculptures are alike — because no two stories are the same.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
