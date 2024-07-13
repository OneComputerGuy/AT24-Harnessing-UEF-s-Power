import Image from 'next/image';

const ScoresBanner = ({}) => {
  return (
    <div className="scores-banner-wrapper">
      <Image
        src="/assets/AT-Logo.png"
        alt="Anthology Together logo"
        width={125}
        height={50}
      />
      <div className="scores-banner-title">
        <span>DevCon College</span>
        <span>Soccer Summer League</span>
      </div>
      <div className="scores-banner-scores">
        <div>
          <Image
            src="/assets/team1-ai.png"
            alt="Icon of the team 1"
            width={40}
            height={40}
          />
          <span>3</span>
        </div>
        <Image
          src="/assets/soccer-field.svg"
          alt="an icon of a football helmet"
          width={30}
          height={30}
        />
        <div>
          <span>1</span>
          <Image
            src="/assets/team2-ai.png"
            alt="Icon of the team 2"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default ScoresBanner;
