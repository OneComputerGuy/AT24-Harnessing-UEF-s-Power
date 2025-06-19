'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const ModalPage = ({}) => {
  const launcher = useSearchParams();

  const renderCourseModal = () => {
    return (
      <div className="course-modal-content">
        <h2>What&apos;s new!</h2>
        <p>
          Section 3 is now available! Make sure to review all the information
          related to it.
        </p>
        <h2>Due dates</h2>
        <p>
          Due date of Test 3 was extended to July 20th due to Anthology
          Together. Due date for Test 4 will be July 22nd.
        </p>
        <h2>Find of the day!</h2>
        <p>
          If you have a minute, check DiffusionBee, an open source tool to use
          stable diffussion for image creation using language models locally!
        </p>
        <p>This image was created with it!</p>
        <Image
          src="/assets/course-modal-ai.png"
          alt="sci-fi steampunk city with glowing yellow lights, filled with people, located in space outside earth"
          width={700}
          height={450}
        />
      </div>
    );
  };

  const renderGradesModal = () => {
    return (
      <div className="grades-modal-content">
        <h2>Final Grades due date!</h2>
        <p>
          Remember that the final grades must be posted by July 31st. If
          there&apos;s any missing grade after this date, it will be auto
          assigned as a zero (0).
        </p>
        <p>
          If you have missing grades, please contact your instructor and review
          them.
        </p>
      </div>
    );
  };

  return (
    <div>
      {launcher.get('src') === 'course'
        ? renderCourseModal()
        : renderGradesModal()}
    </div>
  );
};

export default ModalPage;
