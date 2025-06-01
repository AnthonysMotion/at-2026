// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import ImageGallery from "../components/ImageGallery";

const images = [
    { src: "https://live.staticflickr.com/65535/54122729496_4364db69ce_k.jpg", link: "/project/japan1", hoverSrc: "https://live.staticflickr.com/65535/54123186885_1426b10771_k.jpg" },
    { src: "https://live.staticflickr.com/65535/54123182245_e400f7196b_k.jpg", link: "/project/queenstown1" },
    { src: "https://live.staticflickr.com/65535/54121877412_e752c88dcc_k.jpg" },
    { src: "https://live.staticflickr.com/65535/54121880587_0ef3b83202_k.jpg", link: "https://example.com/external-link" },
    { src: "https://live.staticflickr.com/65535/54123186885_1426b10771_k.jpg" },
    { src: "https://live.staticflickr.com/65535/54121875302_d6d01994fc_k.jpg" },
    { src: "https://live.staticflickr.com/65535/54123003788_0e4602028c_k.jpg" },
    { src: "https://live.staticflickr.com/65535/54122997248_135f61b26c_k.jpg", link: "/portfolio" },
    { src: "https://live.staticflickr.com/65535/54121875777_467e942c8e_k.jpg" },
    { src: "https://live.staticflickr.com/65535/54122725886_820b8d0b0b_k.jpg", link: "/project/nz2" },
    { src: "https://live.staticflickr.com/65535/54122726616_95d97f7413_k.jpg" },
    //{ src: "https://live.staticflickr.com/65535/54123182895_e9468bd43f_k.jpg" },
    //{ src: "https://live.staticflickr.com/65535/54122725366_843fd2620d_k.jpg", link: "https://example.com" },
    { src: "https://live.staticflickr.com/65535/54121876032_58edef7902_k.jpg" }
  ];
  

export default function Home() {
    return (
        <div data-fade className="home-container">
            <div className="heading">
                <div className="header-paragraphs">
                    <p className="paragraph-text">
                        Digital Designer + Web Developer + Photographer.<br />Based in Auckland, New Zealand.<br /><br />
                        <Link to="/portfolio">→ View portfolio</Link><br />
                        <Link to="/contact">→ Get in touch</Link>
                    </p>
                    <p className="paragraph-text">
                        Designing perennial digital products. Strengthening brands with authenticity and memorability. Framing moments that matter. Exploring what’s next. Humanly-made.
                    </p>
                </div>
            </div>

            <ImageGallery images={images} numColumns={4} />
        </div>
    );
}
