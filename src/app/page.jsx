import ContactMe from "@/components/Home/ContactMe";
import Image from "next/image";


export default function Home() {

  const mailTo = "arturblaya@gmail.com"
  const subject = "Connecting from https://arturblaya.bio"
  const body = `
  
  Hi Artur,

  I hope you're doing well. While checking out your profile at https://arturblaya.bio, [mention something specific] caught my eye.

  I'd love to connect with you regarding [reason for your interest]. Could we schedule a brief call or meeting?  

  Thanks,

  [Name]
  [Contact Info]
  `

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

      <button>

        <a href={`mailto:${mailTo}?subject=${encodeURI(subject)}&body=${encodeURI(body)}`}>Contact me</a>
      </button>

    </main>
  )
}

