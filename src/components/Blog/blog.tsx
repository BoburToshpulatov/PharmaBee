import React from "react";
import { useRef, useEffect } from "react";
import {
  BackgroundImg,
  BackgroundText,
  BlogMain,
  BlogText,
  HomeDirect,
  PromotionInf,
  PromotionInf2,
  PromotionInfMini,
  PromotionInfMiniBottom,
} from "./blogStyle";
import scientists from "../../assets/blog-img/blog-background.png";
import polygon from "../../assets/blog-img/bg-polygon (4).svg";
import hindi from "../../assets/home-img/hindiwoman.png";
import pills from "../../assets/home-img/pills2.png";
import cream from "../../assets/home-img/cream.png";
import img1 from "../../assets/blog-img/blog-img1.png";
import img2 from "../../assets/blog-img/blog-img2.png";
import img3 from "../../assets/blog-img/blog-img3.png";
import img4 from "../../assets/blog-img/blog-img4.png";
import img5 from "../../assets/blog-img/blog-img5.png";
import img6 from "../../assets/blog-img/blog-img6.png";

const BlogComponent = () => {
  const animItemsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    animItemsRef.current = document.querySelectorAll("._anim-items");

    if (animItemsRef.current?.length) {
      const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: "0px", // Trigger exactly when it enters viewport
        threshold: 0, // Trigger as soon as any part is visible
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const animItem = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            animItem.classList.add("_active");
            console.log("Element visible:", animItem); // Debug
          } else if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      animItemsRef.current.forEach((item) => observer.observe(item));

      return () => {
        animItemsRef.current?.forEach((item) => observer.unobserve(item));
      };
    }
  }, []);
  return (
    <>
      <BackgroundImg>
        <img src={scientists} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Blog</h1>
          <HomeDirect>
            <span>
              <i className="fas fa-home"></i>
            </span>
            <p style={{ marginLeft: "-5px" }}>Home</p>
            <span>
              <i
                style={{ marginTop: "9px", fontSize: "26px" }}
                className="material-icons"
              >
                keyboard_arrow_right
              </i>
            </span>
            <p>Blog</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <BlogMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <BlogText>
          <h2>BLOG</h2>
          <h1 className="float _anim-items _anim-no-hide">
            Health Related Articles
          </h1>
          <p>
            Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
            pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
            id volutpat.
          </p>
        </BlogText>

        <PromotionInf className="float _anim-items _anim-no-hide">
          <PromotionInfMini>
            <img src={hindi} alt="woman-img" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini>
            <img src={pills} alt="pills" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini>
            <img src={cream} alt="cream" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
        </PromotionInf>

        <PromotionInf2 className="float _anim-items _anim-no-hide">
          <PromotionInfMini>
            <img src={img1} alt="woman-img" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini>
            <img src={img2} alt="pills" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini>
            <img src={img3} alt="cream" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
        </PromotionInf2>

        <PromotionInf2 className="float _anim-items _anim-no-hide">
          <PromotionInfMini>
            <img src={img4} alt="woman-img" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini>
            <img src={img5} alt="pills" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini>
            <img src={img6} alt="cream" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
        </PromotionInf2>
      </BlogMain>
    </>
  );
};

export default BlogComponent;
