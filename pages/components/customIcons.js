const CustomIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.68652"
        y="0.699951"
        width="2.06124"
        height="3.81051"
        rx="1.03062"
        stroke="#6D6A80"
      />
      <rect
        x="8.49707"
        y="0.699951"
        width="2.06124"
        height="3.81051"
        rx="1.03062"
        stroke="#6D6A80"
      />
      <path
        d="M3.62392 2.38672H2C1.44772 2.38672 1 2.83443 1 3.38672V12.3197C1 12.872 1.44772 13.3197 2 13.3197H12.2449C12.7972 13.3197 13.2449 12.872 13.2449 12.3197V3.38672C13.2449 2.83443 12.7972 2.38672 12.2449 2.38672H10.621M5.81051 2.38672H7.12247H8.43443"
        stroke="#6D6A80"
      />
      <path
        d="M3.62305 8.11694H5.41208"
        stroke="#6D6A80"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M8.99121 8.11694H10.7802"
        stroke="#6D6A80"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};

const DiceIcon = () => {
  return (
    <svg
      width="29"
      height="35"
      viewBox="0 0 29 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 2L1 9.59184M14.5 2L28 9.59184M14.5 2V6.11224M1 9.59184V24.7755M1 9.59184L14.5 6.11224M1 9.59184L5.5 22.5612M1 24.7755L14.5 33M1 24.7755C2.39286 24.1429 5.24286 22.8143 5.5 22.5612M14.5 33L28 24.7755M14.5 33L23.8214 22.2449M14.5 33L5.5 22.5612M28 24.7755V9.59184M28 24.7755L23.8214 22.2449M28 9.59184L14.5 6.11224M28 9.59184L23.8214 22.2449M14.5 6.11224C11.6071 11.4898 5.75714 22.3082 5.5 22.5612M14.5 6.11224L23.8214 22.2449M23.8214 22.2449L5.5 22.5612"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

const CityMistIcon = () => {
  return (
    <svg
      width="30"
      height="27"
      viewBox="0 0 30 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.46154 11.6383H1V26H7.46154M23.0769 11.6383H29V26H23.0769M23.0769 11.6383V26M23.0769 11.6383V1H7.46154V26M23.0769 26H7.46154"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

const VikingIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="13.5" stroke="black" />
      <circle cx="14" cy="14" r="10.5" stroke="black" />
      <path d="M9.77419 16H6L12.9677 5L15 7.53846" stroke="black" />
      <path d="M16 10L17.3548 7L23 19H20.0645" stroke="black" />
      <path d="M17 15C16.232 14.16 14.12 9.98333 13.16 8L9 15" stroke="black" />
      <path d="M13.6522 12L10 18H17" stroke="black" />
      <path d="M13 16H21L17.3333 10" stroke="black" />
      <path d="M8.71429 17.3636L7 21H21L19 17" stroke="black" />
    </svg>
  );
};

export default {};

module.exports = {
  CustomIcon: CustomIcon,
  DiceIcon: DiceIcon,
  CityMistIcon: CityMistIcon,
  VikingIcon: VikingIcon,
};
