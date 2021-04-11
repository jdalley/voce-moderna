import Layout, { LayoutProps } from '@components/Layout';
import UseState from 'react';
import DatabaseSearch from '@components/DatabaseSearch';

export default function Database({ preview }) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Database',
    },
    preview: preview,
  };

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <DatabaseSearch></DatabaseSearch>
    </Layout>
  );
}
