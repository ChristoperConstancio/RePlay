module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ['Kdam Thmor Pro', 'sans-serif'],
      seris: ['serif']
    },
    extend: {
      width: {
        '300': '615px',
      },
      height: {
        '124': '430px',
      },
      animation: {
        slider: 'slider 10s ease-in-out infinite',
      },
      keyframes: {
        slider: {     
          '0%, 1%':{
            
          },
          '1%, 20%':{
            transform: 'translateX(0%)'
          },
          '25%, 40%':{
            transform: 'translateX(-100%)'
          },
          '45%, 60%':{
            transform: 'translateX(-200%)'
          },
          '65%, 80%':{
            transform: 'translateX(-300%)'
          },
          '85%, 91%':{
            transform: 'translateX(-400%)'
          },
          '95%, 100%':{
            transform: 'translateX(0%)'
          }
        }
      }
    },
  plugins: [],
}
}