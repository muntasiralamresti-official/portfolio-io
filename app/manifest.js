export default function manifest() {

  return {

    name:
      "Muntasir Alam Resti",

    short_name:
      "Resti",

    description:
      "Frontend Developer Portfolio",

    start_url: "/",

    display: "standalone",

    background_color: "#020617",

    theme_color: "#06b6d4",

    icons: [

      {
        src: "/icon.png",

        sizes: "192x192",

        type: "image/png",
      },

      {
        src: "/icon.png",

        sizes: "512x512",

        type: "image/png",
      },

    ],

  };

}