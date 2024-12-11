"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TTSS1 from "@/app/public/TT/tasktroveSS2.png";
import TTSS2 from "@/app/public/TT/tasktroveSS1.png";
import TTSS3 from "@/app/public/TT/tasktroveSS3.png";
import TTSS4 from "@/app/public/TT/tasktroveSS4.png";
import TTSS5 from "@/app/public/TT/tasktroveSS5.png";

import NavBar from "@/components/NavBar";

export default function Projects() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x6a5717,
          midtoneColor: 0xbd250d,
          lowlightColor: 0x3719b8,
          baseColor: 0x292929,
          blurFactor: 0.4,
          speed: 2,
          zoom: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(null);
    };
  }, [vantaEffect]);

  const links = {
    frontend: {
      name: "Frontend Projects",
      link: "#frontend",
    },
    backend: {
      name: "Backend Projects",
      link: "#backend",
    },
  };

  return (
    <div /*ref={vantaRef}*/>
      <NavBar word1="My" word2="Projects" links={links} />
      <h2 className="h2-style">Frontend</h2>
      <div id="frontend" className="min-h-screen flex flex-row">
        <div id="left-column" className="project-column">
          <Card className="card-style my-4">
            <CardTitle className="h3-style">TaskTrove</CardTitle>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="flex justify-center items-center">
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                  <Image
                    src={TTSS2}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                  <Image
                    src={TTSS3}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                  <Image
                    src={TTSS4}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                  <Image
                    src={TTSS5}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="previous-button-style" />
              <CarouselNext className="next-button-style" />
            </Carousel>
            <CardDescription className="text-style">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </CardDescription>
          </Card>
          <Card className="card-style my-4">
            <CardTitle className="h3-style">CineTracker</CardTitle>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="flex justify-center items-center">
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="previous-button-style" />
              <CarouselNext className="next-button-style" />
            </Carousel>
            <CardDescription className="text-style">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </CardDescription>
          </Card>
        </div>
        <div id="right-column" className="project-column mt-96">
          <Card className="card-style my-4">
            <CardTitle className="h3-style">TechTopia</CardTitle>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="previous-button-style" />
              <CarouselNext className="next-button-style" />
            </Carousel>
            <CardDescription className="text-style">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </CardDescription>
          </Card>
        </div>
      </div>
      <h2 className="h2-style">Backend</h2>
      <div id="backend" className="min-h-screen flex flex-row">
        <div id="left-column" className="project-column">
          <Card className="card-style my-4">
            <CardTitle className="h3-style">TechTopia</CardTitle>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="previous-button-style" />
              <CarouselNext className="next-button-style" />
            </Carousel>
            <CardDescription className="text-style">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </CardDescription>
          </Card>
        </div>
        <div id="right-column" className="project-column mt-96">
          <Card className="card-style my-4">
            <CardTitle className="h3-style">CineTracker</CardTitle>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={TTSS1}
                    alt="TaskTrove ScreenShot 1"
                    width={200}
                    height={200}
                    className="image-style"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="previous-button-style" />
              <CarouselNext className="next-button-style" />
            </Carousel>
            <CardDescription className="text-style">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
}
