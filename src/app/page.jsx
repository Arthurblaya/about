import Image from "next/image";


export default function Home() {
  return (
    <main className="mw--xl c--c">
      <Image
      className="round"
      src="/IMG_8993.jpeg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
      <h1>Artur Blaya</h1>
      <div className="c">
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
      </div>
    </main>
  )
}
