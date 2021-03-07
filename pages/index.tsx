import Layout, { LayoutProps } from '@components/Layout';

export default function Index({ operas, preview }) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Home',
    },
  };

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="/images/vm-hero.png"
                alt="Layered smudges of paint and the words Voce Modern - A Contemporary Aria Project"
              />
            </div>
            <div className="px-4 py-24 sm:px-6 sm:py-24 md:py-32 lg:py-44 lg:px-8"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  //const operas = await getClient(preview).fetch(allOperas);
  const operas = [];

  return {
    props: { operas, preview },
  };
}
