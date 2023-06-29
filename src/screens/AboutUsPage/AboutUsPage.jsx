import React from "react";
import { Component } from "../../components/Component";
import { LogoHorizontal } from "../../components/LogoHorizontal";
import { UiCartNotification } from "../../components/UiCartNotification";
import { UiFavoriteDefault } from "../../components/UiFavoriteDefault";
import { UiRegion } from "../../components/UiRegion";
import { Profile241 } from "../../icons/Profile241";
import "./style.css";

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="div">
        <div className="overlap">
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="rectangle-2" />
          <img
            className="img"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/rectangle-2659@2x.png"
          />
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/rectangle-2653.svg"
          />
          <img
            className="rectangle-4"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/rectangle-2654@2x.png"
          />
          <img
            className="rectangle-5"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/rectangle-2656@2x.png"
          />
          <div className="rectangle-6" />
          <img
            className="rectangle-7"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/rectangle-2657@2x.png"
          />
          <img
            className="rectangle-8"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/rectangle-2655@2x.png"
          />
          <h1 className="driffle-is-a-one">
            <span className="text-wrapper">Driffle is a </span>
            <span className="span">one-stop shop</span>
            <span className="text-wrapper-2"> for all your gaming needs.</span>
          </h1>
          <p className="not-only-do-we-sell">
            Not only do we sell games, but also offer gift cards, DLC&#39;s, and more. Driffle is a marketplace, so you
            can find a wide variety of items from different sellers in one place. We are committed to the future of
            gaming and strive to make our platform safe, affordable, and sustainable for all users. Whether you&#39;re
            looking for the latest releases <br />
            or hard-to-find classics, you&#39;re sure to find what you&#39;re looking for on Driffle.
          </p>
          <Component
            property1="group-3648"
            style={{
              left: "401px",
              position: "absolute",
              top: "649px",
            }}
          />
        </div>
        <div className="group-2">
          <LogoHorizontal
            logoHorizontal="https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/logo---horizontal---white---no-padding-1.svg"
            style={{
              left: "71px",
              top: "20px",
            }}
          />
          <UiCartNotification
            elementStyle={{
              top: "0",
            }}
            groupStyle={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/store-24-2.svg)",
              top: "8px",
            }}
            overlapGroupStyle={{
              height: "32px",
              top: "unset",
              width: "32px",
            }}
            rectangleStyle={{
              backgroundColor: "#406aff",
              border: "unset",
              borderColor: "unset",
              height: "16px",
              left: "16px",
              width: "16px",
            }}
            style={{
              left: "1567px",
              position: "absolute",
              top: "16px",
            }}
          />
          <UiFavoriteDefault
            favorite242Color="white"
            style={{
              left: "1511px",
              position: "absolute",
              top: "16px",
            }}
          />
          <UiRegion
            INRStyle={{
              color: "#ffffff",
            }}
            ellipseStyle={{
              backgroundColor: "#ffffff",
            }}
            indiaEnglishStyle={{
              color: "#ffffff",
            }}
            region242Color="white"
            state="default"
            style={{
              left: "1305px",
              position: "absolute",
              top: "16px",
            }}
          />
          <Profile241
            color="white"
            style={{
              height: "24px",
              left: "1631px",
              position: "absolute",
              top: "24px",
              width: "24px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
