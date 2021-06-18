import Link from 'next/link';

export default function PreviewAlert({ preview }: { preview: boolean }) {
  if (!preview) {
    return null;
  }

  return (
    <div className="border-b border-gray-300">
      <div className="container mx-auto px-5">
        <div className="py-2 text-center text-sm">
          This page is a preview.{' '}
          <Link href="/api/exit-preview">
            <a className="underline hover:text-cyan duration-200 transition-colors">
              Click here
            </a>{' '}
          </Link>
          to exit preview mode.
        </div>
      </div>
    </div>
  );
}
