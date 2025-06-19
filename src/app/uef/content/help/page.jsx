import Image from 'next/image';

const HelpPage = ({}) => {
  return (
    <div>
      <div className="help-header">
        <h2>Have an issue?</h2>
        <p>
          You can find here the access and numbers of the school resources,
          based on your needs.
        </p>
      </div>
      <div className="help-section">
        <div className="help-section-header">
          <Image
            src="/assets/support.svg"
            alt="Icon for the IT help section"
            width={30}
            height={30}
          />
          <h3>IT Support</h3>
        </div>
        <div className="help-entry-list">
          <p>
            If you need to contact our Support team, please use one of the
            following options:
          </p>
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span> Online Support System: </span>
            <a href="https://behind.blackboard.com/" target="_blank">
              Open a ticket
            </a>
          </div>
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span>Phone number: +1 300 555 1234</span>
          </div>
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span>Email: </span>
            <a href="mailto:support@anthology.com">support@anthology.com</a>
          </div>
        </div>
      </div>
      <div className="help-section">
        <div className="help-section-header">
          <Image
            src="/assets/counselor.svg"
            alt="Icon for the section about counselor help"
            width={30}
            height={30}
          />
          <h3>Counselor help</h3>
        </div>
        <p>Do you need help with your classes or feeling overwhelmed?</p>
        <div className="help-entry-list">
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span>Phone number: +1 300 555 1234</span>
          </div>
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span>Email: </span>
            <a href="mailto:support@anthology.com">counselor@anthology.com</a>
          </div>
        </div>
      </div>
      <div className="help-section">
        <div className="help-section-header">
          <Image
            src="/assets/college.svg"
            alt="Icon for the section about school help"
            width={30}
            height={30}
          />
          <h3>General help</h3>
        </div>
        <p>
          You can&apos;t find what you need, contact the College Help Desk for
          more information!
        </p>
        <div className="help-entry-list">
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span>Phone number: +1 300 555 1234</span>
          </div>
          <div className="help-entry">
            <Image
              src="/assets/bullet.svg"
              alt="bullet point icon"
              width={15}
              height={15}
            />
            <span>Email: </span>
            <a href="mailto:support@anthology.com">help-desk@anthology.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
