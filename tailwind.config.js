module.exports = {
  corePlugins: {
    transitionDuration: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {},
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
