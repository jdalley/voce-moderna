import Layout, { LayoutProps } from '@components/Layout';
import VoiceTypeGroup from '@components/VoiceTypeGroup';

export default function Database({ preview }) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Database',
    },
    preview: preview,
  };

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <div className="max-w-7xl mx-auto py-6">
        <VoiceTypeGroup></VoiceTypeGroup>
      </div>
    </Layout>
  );
}
