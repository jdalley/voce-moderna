import Layout, { LayoutProps } from '@components/Layout';

export default function About() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'About - Voce Moderna',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <article className="relative mx-auto max-w-7xl overflow-x-hidden px-4 py-4 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              About Voce Moderna
            </h1>
            <div className="mt-8 text-lg leading-8 text-gray-500">
              <p>
                Voce Moderna is a new resource to help connect singers with
                contemporary opera arias. It is intended to showcase and promote
                the work of living composers, and focuses on works written since
                2000.
              </p>
            </div>
            <div className="prose prose-cyan mt-8 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Composers and publishers are collaborators at Voce Moderna, and
                they receive royalties from track purchases. Mechanical licenses
                have been obtained so that these practice tracks could be made
                available for your personal use.
              </p>
              <p>
                This database is ongoing! Arias will continue to be added to
                this site, so be sure to keep checking back for new entries.
              </p>
            </div>
          </div>
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mt-20 mr-5 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto mt-10 max-w-prose text-base lg:mt-0 lg:max-w-none ">
              <figure>
                <div className="aspect-h-3 aspect-w-3 lg:aspect-none">
                  <img
                    className="rounded-lg bg-white object-cover object-top shadow-lg lg:object-center"
                    src="/images/vm-logo-colour.png"
                    alt="The VM logo in black Selima font with paint strokes behind it."
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="lg:col-start-2 lg:row-start-2">
            <h2 className="mt-8 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              The People Behind VM
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-1 lg:row-start-1">
            <svg
              className="absolute left-0 top-0 -ml-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-h-3 aspect-w-3 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-top shadow-lg lg:float-right lg:object-center"
                    src="/images/blair.jpg"
                    alt="A portrait photo of Blair Salter"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="pb-4 text-2xl font-bold text-gray-800">
              Blair Salter
            </h3>
            <div className="prose prose-indigo mx-auto text-gray-500 lg:col-start-2 lg:row-start-1 lg:max-w-none">
              <p>
                Collaborative pianist Blair Salter is a versatile performer and
                music director who has worked at prestigious opera companies and
                young artist programs throughout the United States and Canada. A
                graduate of the Houston Grand Opera Studio, San Francisco Opera’s
                Merola Young Artist Program, Wolf Trap Opera, and the Glimmerglass
                Festival, Blair is currently Head Coach for the LA Opera
                Domingo-Colburn-Stein Young Artist Program and a member of the
                music staff at Wolf Trap Opera. She made her conducting debuts at
                Lyric Opera of Kansas City and Pacific Opera Project in 2025, she
                was a conductor at The Dallas Opera’s Hart Institute for Women
                Conductors in 2023, and she was Music Director for Opera Theatre
                at Penn State University from 2021-23.
              </p>
              <p>
                Blair has worked as a member of music staff at Lyric Opera of
                Chicago, Santa Fe Opera, San Francisco Opera, Houston Grand Opera,
                Opera Colorado, Michigan Opera Theatre, New Orleans Opera, and the
                CoOPERAtive Program. Her extensive recital credits include a
                program of music curated for the HGO Recital Series at Rienzi,
                which featured a commissioned set of songs by Jamie Leidwinger.
                Other performances include recitals with Cincinnati Song Initiative,
                a mini-recital for the Sam Houston State University Art Song
                Festival with frequent collaborator Amy Petrongelli, a residency on
                Performance Today with tubist Cristina Cutts, and her debut at the
                Kennedy Center in Washington, D.C., accompanying students from the
                University of Michigan. She has participated in and performed at
                multiple conferences, including: the New Works Forum at Opera
                America in New York City, the African American Song Alliance
                Conference in Irvine, California, the Song of America Conference
                in partnership with the Hampsong Foundation’s Song in Dialogue,
                and at the NATS National Conference in Las Vegas.
              </p>
              <p>
                An advocate of contemporary music, Blair is the creator of the aria
                database Voce Moderna. She has appeared in residency at the Fall
                Island Vocal Arts Seminar, and with the Khemia Ensemble at Michigan
                State University, Tufts University and the Avaloch Farms Music
                Institute. She has also worked on several operatic world premieres,
                including The Righteous, M. Butterly, Lord of Cries, and The
                Thirteenth Child at Santa Fe Opera, and The Phoenix and El Milagro
                del Recuerdo at Houston Grand Opera.
              </p>
              <p>
                Blair attended the University of Western Ontario for her Bachelor
                of Music degree in piano performance and Master of Music degree in
                collaborative piano, studying with John Hess and Stéphan Sylvestre.
                She completed her DMA in Collaborative Piano at the University of
                Michigan, where she studied with Martin Katz.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className=" relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-h-3 aspect-w-3 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-top shadow-lg lg:object-center"
                    src="/images/jeff.jpg"
                    alt="A portrait photo of Jeff Dalley"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="pb-4 text-2xl font-bold text-gray-800">
              Jeff Dalley
            </h3>
            <div className="prose prose-cyan mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                A software developer by day (and sometimes by night), Jeff
                enjoys configuration files, build pipelines, deleting code,
                setting up the perfect dev environment full of tools and time
                savers, and leaving things better than he found them. He&apos;s
                still wondering if he&apos;ll find a niche, or just continue to
                dabble broadly, but he&apos;s enjoying himself either way.
              </p>
              <p>
                Jeff spends a lot of time poring over what&apos;s new and
                changing in software development. He follows a number of
                communities and the folks that participate in them; he enjoys
                drawing inspiration from seeing what other people are building,
                how they solve problems, and how sharing one&apos;s work
                positively impacts others. He aspires to communicate and share
                in this same supportive way.
              </p>
              <p>
                Outside of software, he&apos;s a huge fan of: technology in
                general, speccing and building PCs, fantasy/sci-fi books,
                gaming, and hanging out with his wife (Blair!) and their dog
                Hermes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className=" relative lg:col-start-1 lg:row-start-1">
            <svg
              className="absolute left-0 top-0 -ml-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-h-3 aspect-w-3 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-top shadow-lg lg:float-right lg:object-center"
                    src="/images/katrina.webp"
                    alt="A portrait photo of Katrina Cole"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="pb-4 text-2xl font-bold text-gray-800">
              Katrina Cole
            </h3>
            <div className="prose prose-cyan mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Soprano Katrina Cole is a recent graduate of the University of
                Memphis where she earned her Masters of Music with Dr. Paulina
                Villarreal. Ms. Cole also holds a Bachelor of Music in Vocal
                Performance from The Pennsylvania State University where she
                studied with Dr. Rachel Copeland. Recently, Ms. Cole was
                Rosabella in The Most Happy Fella and Hannchen in Der Vetter
                aus Dingsda with the University of Memphis Opera, Second Spirit
                in Die Zauberflöte with the Hawaii Performing Arts Festival,
                and Blanche de la Force in Dialogues of the Carmelites with
                Penn State Opera Theatre.
              </p>
              <p>
                Ms. Cole found a true passion and excitement for new and
                contemporary works, both in opera and art song, during her
                undergraduate studies. She has worked with notable composers
                Tom Cipullo and Melissa Dunphy on some of their pieces, and was
                honored to perform the world premiere of Nyokabi Kariuki's Veils.
                Ms. Cole has been Voce Moderna's artistic assistant since 2023;
                she manages everything from data collection to running social
                media platforms, to working and communicating with composers
                about highlighting their works in the Voce Moderna database.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className=" relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-h-3 aspect-w-3 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-top shadow-lg lg:object-center"
                    src="/images/hermes.jpg"
                    alt="A portrait photo of Hermes (a yorki-poo doggo)"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="pb-4 text-2xl font-bold text-gray-800">
              Hermes
            </h3>
            <div className="prose prose-cyan mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Hermes took the Salter-Dalley household by fuzzy force in January
                2025. He is the official mascot and boss of the Voce Moderna team.
              </p>
              <p>
                Likes include: fetch, morning walks, playing in pillows, pupcups,
                reminding you that he is 1% mastiff.
              </p>
              <p>
                Dislikes include: shadows, being left out of conversations, rain,
                leaves on his feet.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
