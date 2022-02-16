#!/usr/bin/env node
const fs = require('fs-extra');
const axios = require('axios');
require("localenv");

const SyncSettings = () => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/site-configuration/`)
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        writeSettingJson(res.data);
        updateTailwind(res.data);
      }
    });
};

const writeSettingJson = (data) => {
  fs.writeFile("setting.json", JSON.stringify(data, null, 4))
    .then((_) => console.log("DONE: settings writted"))
    .catch((e) => console.log(e));
};

const updateTailwind = (settings) => {
  fs.writeFile("tailwind.config.js", tailwindconf(settings))
    .then((_) => console.log("DONE: tailwind config was updated"))
    .catch((e) => console.log("error"));
};

const tailwindconf = (settings) => `
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      primary: "${settings.color_primary}",
      secondary: "${settings.color_secondary}",
      tertiary: "${settings.color_tertiary}", // primary button form color
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
`;

SyncSettings();