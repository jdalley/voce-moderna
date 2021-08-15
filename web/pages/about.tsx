import Layout, { LayoutProps } from '@components/Layout';

export default function About() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'About',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <article className="relative max-w-7xl mx-auto overflow-x-hidden py-4 px-4 sm:py-14 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className="lg:row-start-1 lg:col-start-1">
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Voce Moderna
            </h1>
            <div className="mt-8 text-lg text-gray-500 leading-8">
              <p>
                Voce Moderna is a new resource to help connect singers with
                contemporary opera arias. It is intended to showcase and promote
                the work of living composers, and focuses on works written since
                2000.
              </p>
            </div>
            <div className="mt-8 prose prose-cyan text-gray-500 lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Composers and publishers are collaborators at Voce Moderna, and
                they receive royalties from track purchases. Mechanical licenses
                have been obtained so that these practice tracks could be made
                available for your personal use.
              </p>
              <p>
                This database ongoing! Arias will continue to be added to this
                site, so be sure to keep checking back for new entries.
              </p>
            </div>
          </div>
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 mr-5"
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
            <div className="relative text-base mx-auto max-w-prose mt-10 lg:mt-0 lg:max-w-none ">
              <figure>
                <div className="aspect-w-3 aspect-h-3 lg:aspect-none">
                  <img
                    className="bg-white rounded-lg shadow-lg object-cover object-top lg:object-center"
                    src="/images/vm-logo-colour.png"
                    alt="The VM logo in black Selima font with paint strokes behind it."
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="lg:row-start-2 lg:col-start-2">
            <h2 className="mt-8 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Creators
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-1">
            <svg
              className="hidden lg:block absolute top-0 left-0 -mt-20 -ml-20"
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
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-3 aspect-h-3 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-top lg:object-center lg:float-right"
                    src="/images/blair.jpg"
                    alt="A portrait of Blair Salter"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-2">
              <h3>Blair Salter</h3>
              <p>
                Collaborative pianist Blair Salter is a versatile performer and
                music director who has worked at prestigious opera companies and
                young artist programs throughout the United States and Canada. A
                graduate of the Houston Grand Opera Studio, San Francisco
                Opera’s Merola Young Artist Program and the Glimmerglass
                Festival, Blair is currently a member of the music staff at
                Santa Fe Opera and will join the music faculty at Penn State
                University in August 2021.
              </p>
              <p>
                Blair has worked on staff at Houston Grand Opera, Opera
                Colorado, Michigan Opera Theatre, Sewanee WinterFest Opera
                Intensive, and the CoOPERAtive Program. Her extensive recital
                credits include a program of music curated for the HGO Recital
                Series at Rienzi, which featured a commissioned set of songs by
                Jamie Leidwinger. Other performances include recitals with
                Cincinnati Song Initiative, a mini-recital for the Sam Houston
                State University Art Song Festival with frequent collaborator
                Amy Petrongelli, a residency on Performance Today with tubist
                Cristina Cutts, and her debut at the Kennedy Center in
                Washington, D.C., accompanying students from the University of
                Michigan. She has participated in and performed at multiple
                conferences, including: the New Works Forum at Opera America in
                New York City, the African American Song Alliance Conference in
                Irvine, California, the Song of America Conference in
                partnership with the Hampsong Foundation’s Song in Dialogue, and
                at the NATS National Conference in Las Vegas.
              </p>
              <p>
                An advocate of contemporary music, Blair has appeared in
                residency at the Fall Island Vocal Arts Seminar, and with the
                Khemia Ensemble at Michigan State University, Tufts University
                and the Avaloch Farms Music Institute. She has also worked on
                several operatic world premieres, including The Thirteenth Child
                at Santa Fe Opera, and The Phoenix and El Milagro del Recuerdo
                at Houston Grand Opera.
              </p>
              <p>
                Blair was a freelance collaborative pianist and coach in Toronto
                from 2012 – 2014, where she acted as music director for Metro
                Youth Opera, music director with the Halifax Summer Opera
                Festival, and as pianist with Toronto Opera Repertoire. She
                attended the University of Western Ontario for her Bachelor of
                Music degree in piano performance and Master of Music degree in
                collaborative piano, studying with John Hess and Stéphan
                Sylvestre. She completed her DMA at the University of Michigan,
                where she studied with Martin Katz.
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-8 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className=" relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
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
                <div className="aspect-w-3 aspect-h-3 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-top lg:object-center"
                    src="/images/jeff.jpg"
                    alt="A portrait of Jeff Dalley"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="prose prose-cyan text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3>Jeff Dalley</h3>
              <p>
                A software developer by day (and sometimes by night), Jeff
                enjoys configuration files, build pipelines, deleting code,
                setting up the perfect dev environment full of tools and time
                savers, and leaving things better than he found them. He&apos;s
                still wondering if he&apos;ll find a niche, or just continue to
                dabble broadly, but he&apos;s enjoying himself either way.
              </p>
              <p>
                He spends a lot of time poring over what&apos;s new and changing
                in software development. He follows a number of communities and
                the folks that participate in them, drawing inspiration from
                seeing what they build, how they solve problems, communicate,
                and how sharing their work positively impacts others. He aspires
                to share more like that.
              </p>
              <p>
                Outside of software, he&apos;s a huge fan of technology in
                general, speccing and building PCs, fantasy/sci-fi books,
                gaming, and hanging out with his wife (Blair!) and their dog
                Nyx.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
