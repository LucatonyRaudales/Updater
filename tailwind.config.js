
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      primary: "#273646",
      secondary: "#373646",
      tertiary: "#F7931A", // primary button form color
			inputBg: "#fafcfe", // input background-color
			inputBorder: "#97a0c3", // border input color
			inputTextColor: "#636E95", // text input color
			inputPlaceholder: "#bfc7e0", // placeholder text input color
			inputLabelPrimary: "#242f57", // input label color
			inputLabelSecondary: "#97A0C3", // login forms label color
      avatarBorderColor:"#f4f7fc",
      borderDashboardCard:"#EAEDF7",
    },
    fontSize: {
      base: "16px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
