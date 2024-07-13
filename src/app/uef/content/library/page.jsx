import BookCard from '@/components/BookCard';
import LibraryCategoryFilter from '@/components/LibraryCategoryFilter';
import LibrarySubjectFilter from '@/components/LibrarySubjectFilter';

const LibraryPage = ({}) => {
  return (
    <section className="library-content">
      <aside>
        <LibraryCategoryFilter />
        <LibrarySubjectFilter />
      </aside>
      <article>
        <BookCard
          cover="/assets/bookCovers/book1-ai.png"
          title="Dreamscapes"
          subject="Literature"
          author="Dr. Cygnus Dray"
        />
        <BookCard
          cover="/assets/bookCovers/book2-ai.png"
          title="The Psychology of Telepathy and Mind Reading"
          subject="Science"
          author="Dr. Alaric Wynter"
        />
        <BookCard
          cover="/assets/bookCovers/book3-ai.png"
          title="Societal Structures of Parallel Universes"
          subject="Sociology"
          author="Dr. Kael Mirage"
        />
        <BookCard
          cover="/assets/bookCovers/book4-ai.png"
          title="Cyber Society: Human Interaction in Virtual Realities"
          subject="Sociology"
          author="Prof. Sylvan Frost"
        />
        <BookCard
          cover="/assets/bookCovers/book5-ai.png"
          title="Artificial Consciousness: Theory and Practice"
          subject="Computer Science"
          author="Prof. Zara Triton"
        />
        <BookCard
          cover="/assets/bookCovers/book6-ai.png"
          title="Hyperbolic Geometry and Imaginary Numbers"
          subject="Math"
          author="Prof. Ansel Mirin"
        />
        <BookCard
          cover="/assets/bookCovers/book7-ai.png"
          title="Utopian Societies: Theoretical Frameworks"
          subject="Sociology"
          author="Prof. Kaida Lorne"
        />
        <BookCard
          cover="/assets/bookCovers/book8-ai.png"
          title="The Economics of Interstellar Trade"
          subject="Economics"
          author="Dr. Cygnus Dray"
        />
        <BookCard
          cover="/assets/bookCovers/book9-ai.png"
          title="Nanochemistry: Building the Future Atom by Atom"
          subject="Chemistry"
          author="Prof. Atlas Rhys"
        />
        <BookCard
          cover="/assets/bookCovers/book10-ai.png"
          title="Evolutionary Biology of Imaginary Species"
          subject="Biology"
          author="Prof. THorne Orias"
        />
        <BookCard
          cover="/assets/bookCovers/book11-ai.png"
          title="Macro-Economics in a Post-Scarcity World"
          subject="Economics"
          author="Prof. Juno Vey"
        />
        <BookCard
          cover="/assets/bookCovers/book12-ai.png"
          title="Gravitational Waves and Space-Time Fabric"
          subject="Physics"
          author="Prof.Zenith Ward"
        />
        <BookCard
          cover="/assets/bookCovers/book13-ai.png"
          title="Cryptocurrencies and Virtual Economies"
          subject="Economics"
          author="Prof. Tessa Axiom"
        />
        <BookCard
          cover="/assets/bookCovers/book14-ai.png"
          title="Psychedelic Art and Its Impact on Modern Culture"
          subject="Art"
          author="Prof. Zenith Ward"
        />
        <BookCard
          cover="/assets/bookCovers/book15-ai.png"
          title="Interstellar Narratives: Stories from the Stars"
          subject="Literature"
          author="Dr. Nyx Lyric"
        />
        <BookCard
          cover="/assets/bookCovers/book16-ai.png"
          title="Epic Poems of the Multiverse"
          subject="Literature"
          author="Dr. Orion Solstice"
        />
      </article>
    </section>
  );
};

export default LibraryPage;
