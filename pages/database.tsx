import Layout from '@components/Layout';
import VoiceTypeGroup from '@components/VoiceTypeGroup';

export default function Database() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6">
        <VoiceTypeGroup></VoiceTypeGroup>
      </div>
    </Layout>
  );
}
