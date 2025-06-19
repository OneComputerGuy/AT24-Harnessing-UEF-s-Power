import Image from 'next/image';

const BookCard = ({ cover, title, subject, author }) => {
  return (
    <div className="book-card">
      <Image
        src={cover}
        alt="The cover of a book"
        width={120}
        height={150}
        cover
      />
      <div>
        <h3>{title}</h3>
        <p>{subject}</p>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default BookCard;
