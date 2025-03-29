import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Obtén una entrevista impulsada por IA</h2>
          <p className="text-lg">
            Prueba nuestra IA que te ayudará a prepararte para tu próximo
            proceso de selección.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Comenzar una entrevista</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Tus Entrevistas</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Accede a una Entrevista</h2>

        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} />
          ))}

          {/* <p>Aún no has echo ninguna entrevista</p> */}
        </div>
      </section>
    </>
  );
};

export default page;
