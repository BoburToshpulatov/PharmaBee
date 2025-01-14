import React from "react";
import { useEffect } from "react";
import { blogData, blogData1, blogData2 } from "./mockData/mock";
import { useParams, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  ArticleName,
  ArticleText,
  BackgroundImg,
  DetailMain,
  ShareThis,
  ShareThisLeft,
  ShareThisRight,
} from "./detailStyle";
import facebook from "../../../assets/blog-img/facebook-icon.svg";

const BlogDetail = () => {
  const location = useLocation();
  let { id } = useParams<{ id: string }>();
  const dataById =
    blogData.find((data) => data.id === parseInt(id!)) ||
    blogData1.find((data) => data.id === parseInt(id!)) ||
    blogData2.find((data) => data.id === parseInt(id!));

  // useEffect(() => {
  //   const handleScrollToTop = () => {
  //     // Only scroll to the top if the path changes
  //     window.scrollTo(0, 0);
  //   };

  //   handleScrollToTop();
  // }, [location.pathname]); // Dependency on `location.pathname` ensures it only runs when the path changes

  return (
    <>
      <BackgroundImg>
        <img src={dataById?.photo} alt="background-img" />
      </BackgroundImg>
      <DetailMain>
        <ArticleName>
          <h1>
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
          <ShareThisLeft>
            <button>Reprehe</button>
            <button>DOLORE</button>
            <button>IRURE</button>
            <button>OFFICIA</button>
            <button>PARIATUR</button>
          </ShareThisLeft>
          <ShareThisRight>
            <h1>Share this:</h1>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="icon facebook" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <FaTwitter className="icon twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube className="icon youtube" />
            </a>
          </ShareThisRight>
        </ShareThis>
      </DetailMain>
    </>
  );
};

export default BlogDetail;
