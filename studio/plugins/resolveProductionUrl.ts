const previewSecret = 'LOCAL_SANITY_PREVIEW_SECRET_a31t0q44';
const projectUrl = 'http://localhost:3000';

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
