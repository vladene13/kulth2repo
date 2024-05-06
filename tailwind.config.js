/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        'linear-one': '#FF3A5E',
        'linear-two': '#17C3B2',
        'radial-one': '#FF3A5E',
        'radial-two': '#111111',
        'default-blue':'#B1DDF1'
      },
      fontFamily: {
        'montserrat-bold': 'Avenir',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      
      backgroundImage: {
        //'hero-image': 'url("/src/assets/images/Rectangle 4.png")',
        "hero-pattern": "url('/src/assets/video/backgroundvideo.mp4')",
        'service-image': 'url("/src/assets/images/Ellipse 1.png")',
        'slider-icon-1': 'url("/src/assets/icons/Ellipse 6.png")',
        'slider-icon-2': 'url("/src/assets/icons/Ellipse 12.png")',
        'tech-image': 'url("/src/assets/images/tech-image.png")',
        'process-bg-icon-1': 'url("/src/assets/icons/Ellipse 7.png")',
        'process-bg-icon-2': 'url("/src/assets/icons/Ellipse 8.png")',
        //'process-bg-icon-3': 'url("/src/assets/icons/Vector 15.png")',
      },
    },
  },
  plugins: [],
};
//Optima
