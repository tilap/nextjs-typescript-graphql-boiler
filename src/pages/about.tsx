import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div>
      <p>This is a bare page without any custom stuf. No i18n, no metas, bare layout.</p>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        page.
      </p>
    </div>
  );
};

export default AboutPage;
