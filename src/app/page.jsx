import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="main-page-container">
        <div>
          <h1>If you&apos;re seeing this...</h1>
          <p>
            It means the system is working... but you&apos;re in the wrong
            place.
          </p>
        </div>
        <Image
          src="/assets/meme.jpg"
          alt="Meme from Star Wars"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
}
