export default function PreviewAlert({ preview }) {
  if (!preview) {
    return null;
  }

  return (
    <div className="border-b border-gray-300">
      <div className="container mx-auto px-5">
        <div className="py-2 text-center text-sm">
          This page is a preview.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:text-cyan duration-200 transition-colors"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </div>
    </div>
  );
}
