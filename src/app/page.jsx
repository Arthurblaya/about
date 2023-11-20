import ContactMe from "@/components/Home/ContactMe";
import Image from "next/image";


export default function Home() {
  return (
    <main className="mw--xl c">
      <section className="c--c">
        <Image
          className="round"
          src="/IMG_5852.JPEG"
          width={270}
          height={270}
          alt="Picture of the author"
        />
        <h1>Artur Blaya</h1>

        <p>
          I'm an ICT Systems Engineer with expertise in programming,
          project management, database administration, system
          design, infrastructure, hardware description, and
          communication systems. With experience as an IT consultant and full-stack
          software developer, I excel in efficiently solving
          technological challenges from conception to
          implementation. My versatility and constant
          enthusiasm allow me to easily adapt to new challenges.
        </p>
      </section>

      {/* <ContactMe/> */}
    </main>
  )
}
