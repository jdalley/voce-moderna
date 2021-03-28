import Layout, { LayoutProps } from '@components/Layout';

export default function Faq() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'FAQ',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          FAQ
        </h1>
      </div>
    </Layout>
  );
}
