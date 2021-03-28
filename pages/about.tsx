import Layout, { LayoutProps } from '@components/Layout';

export default function About() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'About',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="py-20">
        <h1 className="text-5xl  text-center text-gray-700 dark:text-gray-100">
          About
        </h1>
      </div>
    </Layout>
  );
}
