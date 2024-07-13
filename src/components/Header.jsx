import Image from 'next/image';

const Navbar = ({}) => {
  return (
    <header>
      <div>
        <Image
          src="/assets/AT-Logo.png"
          alt="Anthology Together logo"
          width={125}
          height={50}
        />
        <div>
          <p>DevCon College</p>
          <p>Library System</p>
        </div>
      </div>
      <nav>
        <div>
          <input className="nav-search" placeholder="Search for books..." />
        </div>
        <ul>
          <li>
            <a href="#">My Books</a>
          </li>
          <li>
            <a href="#">By category</a>
          </li>
          <li>
            <a href="#">My borrowed books</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
