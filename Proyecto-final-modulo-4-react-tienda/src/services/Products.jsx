const products = [
  {
    id: 1,
    name: "Smart Home Hub",
    price: 99.99,
    image:
      "https://media.istockphoto.com/id/1214098172/es/foto/smart-home-hub-para-dom%C3%B3tica-en-escritorio-de-madera-con-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=EvyPPVMCKfAJ8WPii5BP6M-J_iktbaF_mX3LojcV4yw=",
    description:
      "A central hub for your smart home. Connect and manage all your devices through a single, intuitive interface.",
  },
  {
    id: 2,
    name: "Smart Thermostat",
    price: 149.99,
    image:
      "https://media.istockphoto.com/id/1249397645/es/foto/el-hombre-utiliza-un-tel%C3%A9fono-m%C3%B3vil-con-aplicaci%C3%B3n-de-casa-inteligente-en-la-sala-de-estar.jpg?s=612x612&w=0&k=20&c=1GFbQmXQatblz41mXI_AS5D-gdQmfTC7kVEE2f2203s=",
    description:
      "A smart thermostat that learns your routines to optimize energy usage and maintain the ideal temperature.",
  },
  {
    id: 3,
    name: "Smart Security Camera",
    price: 89.99,
    image:
      "https://media.istockphoto.com/id/1193452851/es/foto/control-de-casa-con-c%C3%A1maras-de-v%C3%ADdeo-y-tablet-digital.jpg?s=612x612&w=0&k=20&c=gqHT6ChG6KpD4spphtqvImp6gkHvxnCPPNXJs4pBIgM=",
    description:
      "A smart security camera featuring motion detection and night vision, ensuring constant protection for your home.",
  },
  {
    id: 4,
    name: "Smart Door Lock",
    price: 129.99,
    image:
      "https://media.istockphoto.com/id/2185117733/es/foto/acceso-a-cerraduras-inteligentes-controlado-por-aplicaci%C3%B3n-m%C3%B3vil.jpg?s=612x612&w=0&k=20&c=_8kveHXdjqltzDsXsi_rNwJ7T9rF2vmxwCq8wwO7s0I=",
    description:
      "A high-security smart door lock that uses biometric access, offering 24/7 convenience and protection.",
  },
  {
    id: 5,
    name: "Smart Light Bulb",
    price: 19.99,
    image:
      "https://media.istockphoto.com/id/1215074546/es/foto/control-de-bombilla-con-dispositivo-m%C3%B3vil.jpg?s=612x612&w=0&k=20&c=zhea9jpuxCCwqtL1GbKu1V8SuPgYswKl5HXKcXi-jBA=",
    description:
      "An intelligent LED bulb with adjustable brightness and color, allowing you to set the perfect ambiance through an app.",
  },
  {
    id: 6,
    name: "Smart Speaker",
    price: 79.99,
    image:
      "https://media.istockphoto.com/id/1320750119/es/foto/primer-plano-del-asistente-de-altavoces-inteligentes-asistente-personal-luz-azul.jpg?s=612x612&w=0&k=20&c=Hbur1AQ9BvTZL4AQCOqdFmpWmbyGxUJM798xzVtL-vE=",
    description:
      "A smart speaker equipped with a virtual assistant to help manage tasks, play music, and control your home devices.",
  },
  {
    id: 7,
    name: "Smart Vacuum Cleaner",
    price: 199.99,
    image:
      "https://media.istockphoto.com/id/1223689453/es/foto/mujeres-que-utilizan-el-m%C3%B3vil-para-controlar-la-aspiradora-rob%C3%B3tica-blanca-tecnolog%C3%ADa-de.jpg?s=612x612&w=0&k=20&c=2h_dVBegXX-ANDVCRzYKqp7jnD3nsO3Xo64Zl01at-I=",
    description:
      "A smart robotic vacuum cleaner that autonomously cleans your home while adapting to various surfaces.",
  },
  {
    id: 8,
    name: "Smart Window Blinds",
    price: 159.99,
    image:
      "https://media.istockphoto.com/id/601386028/es/foto/uso-de-la-aplicaci%C3%B3n-de-automatizaci%C3%B3n-del-hogar-en-el-tel%C3%A9fono-inteligente.jpg?s=612x612&w=0&k=20&c=lk1TKJ80OzGfPzIVxiRr7X4kmC5SjmJcRdaMrzGE5zs=",
    description:
      "Smart window blinds that can be remotely controlled to regulate light and privacy in your home.",
  },
  {
    id: 9,
    name: "Smart Smoke Detector",
    price: 49.99,
    image:
      "https://media.istockphoto.com/id/1163924045/es/foto/detector-de-humo-de-alarma-dire-con-indicador-led-rojo-en-el-techo.jpg?s=612x612&w=0&k=20&c=gRdSRWVBQ-94qbhoanZoIMcu6zbBoGzIETyvXvLIlBI=",
    description:
      "A smart smoke detector that automatically alerts and integrates with other devices for enhanced safety.",
  },
  {
    id: 10,
    name: "Smart Plug",
    price: 29.99,
    image:
      "https://media.istockphoto.com/id/1402116577/es/foto/enchufe-inteligente-en-el-interior-de-la-casa.jpg?s=612x612&w=0&k=20&c=6JkdoE4do0YOmfld-8iJQvi2FzKAKEMVoNb4zq3i-KM=",
    description:
      "Control your devices remotely with this smart plug, perfect for home automation.",
  },
  {
    id: 11,
    name: "Smart Motion Detector",
    price: 39.99,
    image:
      "https://media.istockphoto.com/id/1500258138/es/foto/sensor-de-movimiento.jpg?s=612x612&w=0&k=20&c=ljD9LY04ePUqK3L2foT-zw4J5NauSRZBLuTVvlgCM38=",
    description:
      "Enhance your home security with this smart motion detector that sends alerts upon detecting any suspicious movement.",
  },
  {
    id: 12,
    name: "Smart Power Strip",
    price: 59.99,
    image:
      "https://media.istockphoto.com/id/1327448359/es/foto/un-vers%C3%A1til-cable-de-extensi%C3%B3n-blanco-moderno-con-z%C3%B3calos-y-puertos-usb.jpg?s=612x612&w=0&k=20&c=nHiKHWDCI02P9OJSw_Edcx5JR0OQcwYPW18Tx5WgzQI=",
    description:
      "Efficiently manage multiple devices with this smart power strip, offering energy monitoring and scheduling to optimize power consumption.",
  },
];

export default products;
