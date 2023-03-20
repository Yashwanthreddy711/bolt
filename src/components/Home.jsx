import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>BOLT</h1>
          <p>Solution to your Problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>who are we ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            velit! Amet harum deleniti tempore praesentium! Voluptas voluptates
            facere aspernatur debitis, dolor consequatur eos sint cum veritatis
            magnam libero delectus suscipit nobis, commodi harum eaque
            accusantium velit fugiat est fugit voluptatum. Commodi nostrum
            libero obcaecati dolor asperiores reiciendis suscipit magni
            laboriosam. Pariatur, ullam maiores! Tempora ad aliquam similique,
            amet officiis repellendus ipsa. Eos debitis quidem rerum aut culpa,
            dicta laboriosam, tempora exercitationem corporis magnam hic, optio
            repudiandae fuga assumenda at dolores. Cum, ex tempore! Voluptates
            at, exercitationem temporibus laboriosam blanditiis nesciunt dolore
            laborum vel quisquam praesentium perferendis, non eos nostrum
            doloribus!
          </p>
        </div>
      </div>
      <div className="home4" id="brands" >
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
