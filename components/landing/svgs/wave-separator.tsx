import React from "react";

type Props = {};

const WaveSeparator = (props: Props) => {
  return (
    <div className="relative">
      <svg
        className="relative top-[1px] z-[5] fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <svg
        className="absolute -top-3 fill-primary/80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <svg
        className="absolute left-1/2 top-[calc(50%+15px)] z-10 hidden -translate-x-1/2 -translate-y-1/2 transform fill-primary sm:block"
        width="84"
        height="86"
        viewBox="0 0 84 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0L4.1874 18H26.4687L27.9374 0H6ZM31.9374 0L30.4687 18H53.5624L52.0937 0H31.9374ZM56.0937 0L57.5312 18H79.8124L78 0H56.0937ZM3.8124 22L2.1874 38H24.875L26.1562 22H3.8124ZM30.1562 22L28.875 38H55.1562L53.875 22H30.1562ZM57.875 22L59.1562 38H81.8124L80.1874 22H57.875ZM1.8124 42L0 60H23.0937L24.5624 42H1.8124ZM28.5312 42L27.0937 60H56.9374L55.5 42H28.5312ZM59.4687 42L60.9374 60H84L82.1874 42H59.4687ZM40 62V76H44V62H40ZM28 78V86H56V78H28Z"
          fill="#064232"
        />
      </svg>

      <svg
        className="absolute left-[calc(50%-120px)] top-[calc(50%+40px)] z-10 hidden -translate-x-1/2 -translate-y-1/2 -scale-x-100 transform fill-primary sm:block"
        width="84"
        height="86"
        viewBox="0 0 84 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0L4.1874 18H26.4687L27.9374 0H6ZM31.9374 0L30.4687 18H53.5624L52.0937 0H31.9374ZM56.0937 0L57.5312 18H79.8124L78 0H56.0937ZM3.8124 22L2.1874 38H24.875L26.1562 22H3.8124ZM30.1562 22L28.875 38H55.1562L53.875 22H30.1562ZM57.875 22L59.1562 38H81.8124L80.1874 22H57.875ZM1.8124 42L0 60H23.0937L24.5624 42H1.8124ZM28.5312 42L27.0937 60H56.9374L55.5 42H28.5312ZM59.4687 42L60.9374 60H84L82.1874 42H59.4687ZM40 62V76H44V62H40ZM28 78V86H56V78H28Z"
          fill="#064232"
        />
      </svg>

      <svg
        className="absolute left-[calc(50%+120px)] top-[calc(50%+20px)] z-10 hidden -translate-x-1/2 -translate-y-1/2 -scale-x-100 transform fill-primary sm:block"
        width="84"
        height="86"
        viewBox="0 0 84 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0L4.1874 18H26.4687L27.9374 0H6ZM31.9374 0L30.4687 18H53.5624L52.0937 0H31.9374ZM56.0937 0L57.5312 18H79.8124L78 0H56.0937ZM3.8124 22L2.1874 38H24.875L26.1562 22H3.8124ZM30.1562 22L28.875 38H55.1562L53.875 22H30.1562ZM57.875 22L59.1562 38H81.8124L80.1874 22H57.875ZM1.8124 42L0 60H23.0937L24.5624 42H1.8124ZM28.5312 42L27.0937 60H56.9374L55.5 42H28.5312ZM59.4687 42L60.9374 60H84L82.1874 42H59.4687ZM40 62V76H44V62H40ZM28 78V86H56V78H28Z"
          fill="#064232"
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
