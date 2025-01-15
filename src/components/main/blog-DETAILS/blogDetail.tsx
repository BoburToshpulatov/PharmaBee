import React from "react";
import { useState, useEffect } from "react";
import { blogData, blogData1, blogData2 } from "./mockData/mock";
import { useParams, useLocation, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  ArticleName,
  ArticleText,
  BackgroundImg,
  Comment,
  CommentLeft,
  CommentRight,
  ContactUsLeftEmail,
  DetailMain,
  Divider,
  MsgBtn,
  PromotionInf,
  PromotionInfMini,
  PromotionInfMiniBottom,
  ShareThis,
  ShareThisLeft,
  ShareThisRight,
} from "./detailStyle";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import divider from "../../../assets/home-img/divider (1).svg";

const BlogDetail = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      // Only scroll to the top if the path changes
      window.scrollTo(0, 0);
    };

    handleScrollToTop();
  }, [location.pathname]); // Dependency on `location.pathname` ensures it only runs when the path changes

  // Email JS
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ov5mo1m",
        "template_sgdiop5",
        form.current,
        "zPaYteMHCq7iZFFy1"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message was successfully sent!");
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text);
          alert(
            `Your message failed to send.Please try again. ${
              error.text || "Unknown error."
            }`
          );
        }
      );
  };

  // DATA BY ID
  let { id } = useParams<{ id: string }>();
  const dataById =
    blogData.find((data) => data.id === parseInt(id!)) ||
    blogData1.find((data) => data.id === parseInt(id!)) ||
    blogData2.find((data) => data.id === parseInt(id!));

  // Animation
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
        <img src={dataById?.photo} alt="background-img" />
      </BackgroundImg>
      <DetailMain>
        <ArticleName>
          <h1 className="float _anim-items _anim-no-hide">
            Scelerisque tincidunt felis Eget qum met arcu posuere vitae tempor.
          </h1>
          <h3>John Doe - January 15, 2021 - 0 Comments</h3>
        </ArticleName>

        <ArticleText>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium.
          </p>
          <p>
            Bibendum sit pharetra vitae pellentesque sodales neque mollis orci,
            purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra
            suspendisse placerat leo. Libero vel mi porttitor luctus viverra a
            vel vehicula ultricies. Tellus egestas ac in sit et quis vitae.
            Metus auctor aliquam id cursus quam tempor vulputate cursus. <br />
            <br />
            Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus,
            at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu
            duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris
            condimentum amet tellus scelerisque semper blandit. Feugiat accumsan
            blandit arcu, integer faucibus. At cursus elit hac vitae nec tortor
            iaculis viverra. Sem aliquet vulputate metus tristique sem commodo
            faucibus. Sagittis sagittis eget at sit posuere est at. Eget eget id
            iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus
            sed consequat. Urna tellus id tristique mattis molestie lectus
            imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque.
            Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare
            facilisis interdum ipsum.
          </p>
          <h1>
            “ Vulputate sed nec lectus nibh. Arcu maecenas nunc egestas pretium
            dignissim ut morbi dolor. “
          </h1>
          <h3>Lorem ipsum dolor sit amet, consec tetuer.</h3>
          <p>
            Bibendum sit pharetra vitae pellentesque sodales neque mollis orci,
            purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra
            suspendisse placerat leo. Libero vel mi porttitor luctus viverra a
            vel vehicula ultricies. Tellus egestas ac in sit et quis vitae.
            Metus auctor aliquam id cursus quam tempor vulputate cursus.
          </p>
          <h3>Lorem ipsum dolor sit amet, consec tetuer.</h3>
          <p>
            Bibendum sit pharetra vitae pellentesque sodales neque mollis orci,
            purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra
            suspendisse placerat leo. Libero vel mi porttitor luctus viverra a
            vel vehicula ultricies. Tellus egestas ac in sit et quis vitae.
            Metus auctor aliquam id cursus quam tempor vulputate cursus.
          </p>
          <h3>Lorem ipsum dolor sit amet, consec tetuer.</h3>
          <p>
            Bibendum sit pharetra vitae pellentesque sodales neque mollis orci,
            purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra
            suspendisse placerat leo. Libero vel mi porttitor luctus viverra a
            vel vehicula ultricies. Tellus egestas ac in sit et quis vitae.
            Metus auctor aliquam id cursus quam tempor vulputate cursus.
          </p>
          <h3>Lorem ipsum dolor sit amet, consec tetuer.</h3>
          <p>
            Bibendum sit pharetra vitae pellentesque sodales neque mollis orci,
            purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra
            suspendisse placerat leo. Libero vel mi porttitor luctus viverra a
            vel vehicula ultricies. Tellus egestas ac in sit et quis vitae.
            Metus auctor aliquam id cursus quam tempor vulputate cursus.
          </p>
        </ArticleText>
        <ShareThis>
          <ShareThisLeft className="float _anim-items _anim-no-hide">
            <button>Reprehe</button>
            <button>DOLORE</button>
            <button>IRURE</button>
            <button>OFFICIA</button>
            <button>PARIATUR</button>
          </ShareThisLeft>
          <ShareThisRight className="float _anim-items _anim-no-hide">
            <h1>Share this:</h1>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon facebook" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon youtube" />
            </a>
          </ShareThisRight>
        </ShareThis>

        <Divider>
          <h1 className="float _anim-items _anim-no-hide">Related Articles</h1>
          <img src={divider} alt="divider-img" />
        </Divider>
        <PromotionInf className="float _anim-items _anim-no-hide">
          {blogData.map((value) => (
            <PromotionInfMini key={value.id}>
              <Link
                to={`/blogDetail/${value.id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={value.photo} alt="woman-img" />
              </Link>
              <Link
                to={`/blogDetail/${value.id}`}
                style={{ textDecoration: "none" }}
              >
                <PromotionInfMiniBottom>
                  <h1>
                    Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                    tempor.
                  </h1>
                  <p>June 2, 2021 - No Comments</p>
                </PromotionInfMiniBottom>
              </Link>
            </PromotionInfMini>
          ))}
        </PromotionInf>

        <Comment>
          <CommentLeft className="float _anim-items _anim-no-hide">
            <div>
              <h2>COMMENTS</h2>
              <h1>Post a Comments</h1>
            </div>
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien usop
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt Etiam
              pretium diam rhoncus. gida turpis cursus nuncsed fringilla.
            </p>
          </CommentLeft>
          <CommentRight>
            <ContactUsLeftEmail
              className="float _anim-items _anim-no-hide"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email address"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <MsgBtn
                type="submit"
                value="Send"
                isHovered={activeButton === 7}
                onMouseEnter={() => setActiveButton(7)}
                onMouseLeave={() => setActiveButton(null)}
              >
                Submit
              </MsgBtn>
            </ContactUsLeftEmail>
          </CommentRight>
        </Comment>
      </DetailMain>
    </>
  );
};

export default BlogDetail;
