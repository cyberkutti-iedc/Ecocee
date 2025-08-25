export const hardwareIdeas = [
  // IoT & Smart Home Projects
  {
    id: 1,
    title: "Smart Irrigation System",
    description: "An advanced IoT-based irrigation system that monitors real-time soil moisture, temperature, and humidity to optimize water usage. Uses ESP32 with soil moisture sensors, DHT22, and relay modules. The system uses AI-powered predictive analysis to schedule watering, reducing water wastage by 40%. Farmers can control the system remotely via a mobile app with real-time notifications.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "IoT & Agriculture"
  },
  {
    id: 2,
    title: "AI-Powered Home Security Camera",
    description: "A next-gen security camera using Raspberry Pi 4 with camera module and OpenCV for facial recognition, motion detection, and real-time alerts. Integrates with Telegram bot for instant notifications. The camera can differentiate between humans, animals, and vehicles using TensorFlow Lite, reducing false alarms by 85%. Includes night vision capability with IR LED array.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Security & Surveillance"
  },
  {
    id: 3,
    title: "Wearable Health Monitor",
    description: "Arduino Nano-based wearable device tracking heart rate (MAX30102), blood oxygen, temperature (DS18B20), and stress levels through galvanic skin response. Syncs with smartphone via ESP32 Bluetooth. Includes fall detection using MPU6050 accelerometer and emergency alert system. Perfect for elderly care and chronic disease monitoring.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Healthcare & Biomedical"
  },
  {
    id: 4,
    title: "Solar-Powered Weather Station",
    description: "ESP32-based weather monitoring system powered by 20W solar panel with battery backup. Measures temperature, humidity, pressure (BME280), wind speed/direction, rainfall, and UV index. Data logged to SD card and transmitted to ThingSpeak cloud. Includes local LCD display and web dashboard for real-time monitoring.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Environmental Monitoring"
  },
  {
    id: 5,
    title: "Smart Traffic Management System",
    description: "Raspberry Pi-based traffic control using computer vision to analyze traffic density and optimize signal timing. Uses multiple Pi cameras at intersections, communicating via LoRa for wide coverage. Machine learning algorithms predict traffic patterns and adjust signals accordingly. Includes emergency vehicle priority system.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Smart City & Transportation"
  },
  {
    id: 6,
    title: "Automated Hydroponic System",
    description: "Arduino Mega controlling pH sensors, EC meters, water pumps, and LED grow lights for optimal plant growth. Automated nutrient dosing system with peristaltic pumps. ESP32 module provides WiFi connectivity for remote monitoring. Supports multiple plant growth profiles and automated harvesting alerts.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Agriculture & Automation"
  },
  {
    id: 7,
    title: "Smart Door Lock with Biometrics",
    description: "ESP32-based door lock supporting fingerprint (R307), RFID, and facial recognition. Integrates with smartphone app for remote access control. Includes backup keypad entry and mechanical override. Logs all access attempts with timestamps and photos. Battery backup ensures operation during power outages.",
    platform: "ESP32 + Raspberry Pi Zero",
    difficulty: "Advanced",
    category: "Security & Access Control"
  },
  {
    id: 8,
    title: "IoT Air Quality Monitor",
    description: "ESP32-based air quality monitoring system measuring PM2.5, PM10, CO2, CO, NO2, and ozone levels using multiple sensors. Real-time data visualization on OLED display and web dashboard. Automated ventilation control based on air quality index. Includes predictive analytics for pollution trends.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Environmental Monitoring"
  },
  {
    id: 9,
    title: "Smart Waste Segregation System",
    description: "Raspberry Pi-powered smart dustbin with camera-based waste classification using CNN. Automatically sorts recyclables, organics, and general waste using servo-controlled compartments. Ultrasonic sensors detect fill levels and alert municipal services. Includes user interface for waste disposal guidance.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Smart City & Environment"
  },
  {
    id: 10,
    title: "Voice-Controlled Home Automation",
    description: "Raspberry Pi-based home automation system with offline voice recognition using PocketSphinx. Controls lights, fans, appliances, and security systems through natural language commands. Integrates with existing smart devices via MQTT. Includes custom wake word detection and multi-room audio support.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Smart Home & Automation"
  },

  // Robotics & Automation Projects
  {
    id: 11,
    title: "Gesture-Controlled Robotic Arm",
    description: "Arduino Mega controlling 6-DOF robotic arm with servo motors. Hand gesture recognition using camera module and OpenCV on Raspberry Pi. Machine learning algorithms adapt to user gestures over time. Includes inverse kinematics for precise positioning and safety collision detection system.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Advanced",
    category: "Robotics & Automation"
  },
  {
    id: 12,
    title: "Autonomous Delivery Drone",
    description: "Raspberry Pi-powered quadcopter with GPS navigation, obstacle avoidance using ultrasonic sensors and camera. Automated package pickup and delivery system with QR code verification. Flight path optimization algorithms and emergency landing protocols. Real-time telemetry and video transmission to ground station.",
    platform: "Raspberry Pi",
    difficulty: "Expert",
    category: "Robotics & Aerospace"
  },
  {
    id: 13,
    title: "Line Following Warehouse Robot",
    description: "Arduino Uno-based autonomous robot with IR sensors for line following and ultrasonic sensors for obstacle avoidance. RFID integration for inventory management and automated sorting. Includes load sensors for weight verification and WiFi module for fleet management system.",
    platform: "Arduino",
    difficulty: "Intermediate",
    category: "Robotics & Logistics"
  },
  {
    id: 14,
    title: "Smart Pet Feeder with Recognition",
    description: "Raspberry Pi-based automatic pet feeder with facial recognition to identify individual pets. Dispenses appropriate food portions based on pet profile. Includes weight sensors for food level monitoring and health tracking. Mobile app for feeding schedules and health analytics.",
    platform: "Raspberry Pi",
    difficulty: "Intermediate",
    category: "Pet Care & Automation"
  },
  {
    id: 15,
    title: "Self-Balancing Personal Transporter",
    description: "Arduino-controlled self-balancing vehicle using gyroscope (MPU6050) and accelerometer for stability control. Brushless DC motors with encoder feedback for precise movement. Includes smartphone app for speed control and battery monitoring. Regenerative braking system for energy efficiency.",
    platform: "Arduino",
    difficulty: "Advanced",
    category: "Transportation & Mobility"
  },

  // Healthcare & Assistive Technology
  {
    id: 16,
    title: "Smart Wheelchair Navigation System",
    description: "Raspberry Pi-powered wheelchair with autonomous navigation using LIDAR and camera sensors. Voice control integration and eye-tracking for severely disabled users. Includes obstacle avoidance, automatic docking, and emergency assistance features. Mobile app for caregiver monitoring and route planning.",
    platform: "Raspberry Pi",
    difficulty: "Expert",
    category: "Healthcare & Accessibility"
  },
  {
    id: 17,
    title: "Pill Dispenser with Reminders",
    description: "Arduino-based automated medication dispenser with multiple compartments. LCD display shows medication schedule and remaining pills. Includes alarm system, smartphone notifications, and dosage tracking. Emergency alert system for missed medications or overdose prevention.",
    platform: "Arduino + ESP32",
    difficulty: "Intermediate",
    category: "Healthcare & Elderly Care"
  },
  {
    id: 18,
    title: "Sign Language Translation Glove",
    description: "Arduino Nano-based glove with flex sensors and IMU for hand gesture recognition. Machine learning algorithms translate sign language to speech and text. Supports multiple sign languages and custom gesture training. Includes haptic feedback for confirmation and smartphone connectivity.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Accessibility & Communication"
  },
  {
    id: 19,
    title: "Smart Prosthetic Hand",
    description: "Arduino-controlled prosthetic hand with EMG sensors for muscle signal detection. Multiple grip patterns and force feedback using servo motors and pressure sensors. Machine learning adaptation to user patterns. Includes smartphone app for calibration and gesture training.",
    platform: "Arduino",
    difficulty: "Expert",
    category: "Healthcare & Biomedical"
  },
  {
    id: 20,
    title: "Elderly Fall Detection System",
    description: "Wearable device using Arduino Nano with accelerometer, gyroscope, and heart rate monitor. Advanced algorithms detect falls and health emergencies. Automatic alert system to family members and emergency services. Includes GPS tracking and two-way communication capability.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Healthcare & Safety"
  },

  // Educational & Learning Projects
  {
    id: 21,
    title: "Interactive Learning Robot",
    description: "Raspberry Pi-based educational robot with speech recognition, text-to-speech, and facial recognition. Teaches programming concepts through interactive games. Includes emotion recognition and adaptive learning algorithms. Mobile app for progress tracking and curriculum customization.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Education & AI"
  },
  {
    id: 22,
    title: "Arduino-Based Oscilloscope",
    description: "Digital oscilloscope using Arduino Due with high-speed ADC for signal analysis up to 1MHz. TFT display for waveform visualization and trigger controls. Includes signal generator functionality and PC software for advanced analysis. Perfect for electronics education and prototyping.",
    platform: "Arduino Due",
    difficulty: "Advanced",
    category: "Educational & Instrumentation"
  },
  {
    id: 23,
    title: "Smart Whiteboard System",
    description: "Raspberry Pi-powered interactive whiteboard using IR camera for pen tracking. Converts handwritten notes to digital text using OCR. Includes gesture recognition for presentation control and cloud synchronization. Multiple user support with individual profiles.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Education & Collaboration"
  },
  {
    id: 24,
    title: "3D Hologram Display",
    description: "Arduino-controlled LED matrix creating 3D holographic effects using persistence of vision. Raspberry Pi handles 3D graphics processing and animation. Includes gesture control for interaction and smartphone app for content creation. Educational tool for physics and engineering concepts.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Advanced",
    category: "Display & Visualization"
  },
  {
    id: 25,
    title: "Smart Laboratory Equipment Monitor",
    description: "ESP32-based system monitoring temperature, pressure, and chemical levels in laboratory equipment. Automated safety shutdown protocols and data logging to cloud storage. Includes equipment usage tracking and maintenance scheduling. Integration with laboratory management systems.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Laboratory & Safety"
  },

  // Energy & Sustainability Projects
  {
    id: 26,
    title: "Smart Grid Energy Monitor",
    description: "Raspberry Pi-based energy monitoring system for homes and buildings. Real-time power consumption analysis with load forecasting. Integrates with renewable energy sources and battery storage systems. Includes cost optimization algorithms and peak demand management.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Energy & Sustainability"
  },
  {
    id: 27,
    title: "Solar Panel Tracking System",
    description: "Arduino-controlled dual-axis solar panel tracker using light sensors and servo motors. Increases energy collection efficiency by 35%. Includes weather monitoring for automatic stowing during storms. Real-time performance monitoring and energy production analytics.",
    platform: "Arduino",
    difficulty: "Intermediate",
    category: "Renewable Energy"
  },
  {
    id: 28,
    title: "Wind Turbine Controller",
    description: "Arduino-based MPPT controller for small wind turbines with battery charging management. Includes pitch control for optimal wind capture and overspeed protection. Remote monitoring via ESP32 WiFi module. Performance optimization algorithms based on wind conditions.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Renewable Energy"
  },
  {
    id: 29,
    title: "Smart Water Management System",
    description: "ESP32-based water usage monitoring and leak detection system for buildings. Includes flow sensors, pressure monitors, and automated shutoff valves. Predictive analytics for usage patterns and conservation recommendations. Integration with utility billing systems.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Water Management"
  },
  {
    id: 30,
    title: "Carbon Footprint Tracker",
    description: "Portable device using Arduino and multiple sensors to track personal carbon footprint. Monitors transportation, energy usage, and consumption patterns. Machine learning algorithms provide personalized reduction suggestions. Gamification features for environmental awareness.",
    platform: "Arduino + ESP32",
    difficulty: "Intermediate",
    category: "Environmental Awareness"
  },

  // Security & Surveillance Projects
  {
    id: 31,
    title: "Multi-Zone Security System",
    description: "Raspberry Pi-based security system with multiple sensors (PIR, door/window, glass break). Facial recognition for authorized personnel and intruder detection. Integration with local police systems and security companies. Mobile app for real-time monitoring and control.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Security Systems"
  },
  {
    id: 32,
    title: "License Plate Recognition System",
    description: "Raspberry Pi with camera module for automatic license plate recognition using OpenCV and Tesseract OCR. Database integration for authorized vehicle management. Includes barrier gate control and visitor logging system. Real-time alerts for blacklisted vehicles.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Vehicle Security"
  },
  {
    id: 33,
    title: "Perimeter Intrusion Detection",
    description: "Arduino-based perimeter security using laser tripwires, vibration sensors, and thermal cameras. Multiple detection zones with individual sensitivity settings. Weatherproof design for outdoor installation. Integration with existing security infrastructure.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Advanced",
    category: "Perimeter Security"
  },
  {
    id: 34,
    title: "Smart Locker System",
    description: "ESP32-based intelligent locker system with RFID, PIN, and smartphone unlock options. Package delivery integration with courier services. Real-time occupancy monitoring and automated billing for rental lockers. Master key system for maintenance access.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Access Control"
  },
  {
    id: 35,
    title: "Drone Detection and Tracking",
    description: "Raspberry Pi-based anti-drone system using computer vision and RF signal analysis. Automatic tracking of unauthorized drones with alert systems. Integration with counter-drone measures and authorities notification. Database of authorized drone operators.",
    platform: "Raspberry Pi",
    difficulty: "Expert",
    category: "Airspace Security"
  },

  // Communication & Networking Projects
  {
    id: 36,
    title: "LoRa Mesh Network System",
    description: "ESP32-based long-range mesh network for remote area communication. Self-healing network topology with automatic routing. Emergency communication system for disaster areas. Integration with satellite uplinks for global connectivity. Text and voice message support.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Communication Networks"
  },
  {
    id: 37,
    title: "Software Defined Radio (SDR)",
    description: "Raspberry Pi-based SDR system for radio frequency analysis and communication. Supports multiple modulation schemes and frequency bands. Includes spectrum analyzer and signal decoding capabilities. Educational tool for RF engineering and amateur radio.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Radio & Communications"
  },
  {
    id: 38,
    title: "Satellite Communication Terminal",
    description: "Arduino-controlled satellite dish positioning system with automatic satellite tracking. Includes weather monitoring for signal quality optimization. Integrated modem for data communication and GPS synchronization. Remote monitoring and control capabilities.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Expert",
    category: "Satellite Communications"
  },
  {
    id: 39,
    title: "Emergency Communication Hub",
    description: "Raspberry Pi-based emergency communication system with multiple redundant links (cellular, satellite, radio). Automatic failover between communication methods. Integration with emergency services and disaster response teams. Battery backup and solar charging capability.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Emergency Communications"
  },
  {
    id: 40,
    title: "IoT Gateway for Smart Cities",
    description: "Industrial-grade IoT gateway using Raspberry Pi with multiple communication protocols (WiFi, LoRa, Zigbee, Bluetooth). Edge computing capabilities for local data processing. Secure VPN connectivity to cloud services. Device management and firmware update system.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "IoT Infrastructure"
  },

  // Transportation & Mobility Projects
  {
    id: 41,
    title: "Smart Parking Management",
    description: "ESP32-based parking space detection using ultrasonic sensors and computer vision. Real-time availability updates to mobile app. Automated payment processing and violation detection. Integration with city traffic management systems. Revenue optimization algorithms.",
    platform: "ESP32 + Raspberry Pi",
    difficulty: "Advanced",
    category: "Smart Parking"
  },
  {
    id: 42,
    title: "Vehicle Diagnostics System",
    description: "Arduino-based OBD-II interface for real-time vehicle diagnostics and performance monitoring. Fault code analysis and predictive maintenance alerts. Fuel efficiency optimization suggestions and driving behavior analysis. Cloud-based fleet management integration.",
    platform: "Arduino + ESP32",
    difficulty: "Intermediate",
    category: "Vehicle Diagnostics"
  },
  {
    id: 43,
    title: "Autonomous Vehicle Controller",
    description: "Raspberry Pi-based autonomous vehicle control system with sensor fusion (LIDAR, camera, ultrasonic, GPS). Machine learning for path planning and obstacle avoidance. V2V and V2I communication capabilities. Comprehensive safety and failsafe systems.",
    platform: "Raspberry Pi",
    difficulty: "Expert",
    category: "Autonomous Vehicles"
  },
  {
    id: 44,
    title: "Electric Vehicle Charging Station",
    description: "Arduino-controlled EV charging station with load balancing and grid integration. User authentication via RFID and mobile app. Dynamic pricing based on grid demand. Safety monitoring and automatic fault detection. Payment processing and usage analytics.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Electric Vehicles"
  },
  {
    id: 45,
    title: "Traffic Flow Optimization",
    description: "Distributed system using multiple ESP32 devices to monitor traffic flow at intersections. AI algorithms optimize signal timing based on real-time traffic patterns. Integration with navigation apps for route guidance. Emergency vehicle priority system.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Traffic Management"
  },

  // Industrial & Manufacturing Projects
  {
    id: 46,
    title: "Industrial IoT Sensor Network",
    description: "ESP32-based wireless sensor network for industrial monitoring (temperature, vibration, pressure, humidity). Edge computing for local decision making. Predictive maintenance algorithms and equipment health scoring. Integration with existing SCADA systems.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Industrial IoT"
  },
  {
    id: 47,
    title: "Quality Control Vision System",
    description: "Raspberry Pi-based computer vision system for automated quality control in manufacturing. Defect detection using CNN models and real-time sorting. Statistical process control and trend analysis. Integration with production line control systems.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Quality Control"
  },
  {
    id: 48,
    title: "Robotic Assembly Line",
    description: "Arduino Mega-controlled multi-robot assembly system with coordinated movement and task allocation. Vision-guided pick and place operations. Quality inspection and error recovery protocols. Human-robot collaboration safety systems.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Expert",
    category: "Manufacturing Automation"
  },
  {
    id: 49,
    title: "Inventory Management Robot",
    description: "Autonomous robot using Raspberry Pi for warehouse inventory management. RFID and barcode scanning capabilities. Automated stocktaking and discrepancy reporting. Integration with ERP systems and route optimization for efficient scanning.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Warehouse Automation"
  },
  {
    id: 50,
    title: "Machine Condition Monitor",
    description: "Arduino-based vibration and temperature monitoring system for industrial machinery. FFT analysis for bearing fault detection and machine health assessment. Wireless data transmission to maintenance dashboard. Predictive algorithms for maintenance scheduling.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Predictive Maintenance"
  },

  // Entertainment & Media Projects
  {
    id: 51,
    title: "Interactive LED Music Visualizer",
    description: "Arduino-controlled large-scale LED matrix display synchronized with music using FFT analysis. Multiple visualization modes and user-customizable patterns. Beat detection and rhythm-based effects. Mobile app for pattern creation and control.",
    platform: "Arduino",
    difficulty: "Intermediate",
    category: "Audio Visual"
  },
  {
    id: 52,
    title: "Home Theater Automation",
    description: "Raspberry Pi-based home theater control system with voice commands and smartphone integration. Automated lighting, screen, and audio control. Content recommendation based on viewing history. Integration with streaming services and media servers.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Home Entertainment"
  },
  {
    id: 53,
    title: "Interactive Gaming Table",
    description: "Raspberry Pi-powered gaming table with LED matrix surface and touch detection. Multiple game modes including classic arcade games and original creations. Multiplayer support with individual player recognition. Customizable game development platform.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Interactive Gaming"
  },
  {
    id: 54,
    title: "Virtual Reality Haptic System",
    description: "Arduino-based haptic feedback system for VR applications. Force feedback gloves with finger tracking and tactile sensation. Integration with popular VR platforms and development environments. Customizable force profiles for different applications.",
    platform: "Arduino",
    difficulty: "Advanced",
    category: "Virtual Reality"
  },
  {
    id: 55,
    title: "Smart Musical Instrument",
    description: "Digital musical instrument using Arduino with touch sensors, accelerometers, and audio synthesis. MIDI compatibility and real-time effects processing. Recording and playback capabilities with cloud synchronization. Educational mode for music learning.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Advanced",
    category: "Digital Music"
  },

  // Agricultural Technology Projects
  {
    id: 56,
    title: "Precision Agriculture Drone",
    description: "Raspberry Pi-powered agricultural drone for crop monitoring and precision spraying. Multispectral imaging for plant health analysis. GPS-guided flight patterns and automated mission planning. Real-time data processing and crop health mapping.",
    platform: "Raspberry Pi",
    difficulty: "Expert",
    category: "Precision Agriculture"
  },
  {
    id: 57,
    title: "Livestock Tracking System",
    description: "ESP32-based animal tracking system with GPS and health monitoring sensors. Behavior analysis for disease detection and breeding optimization. Geofencing for containment and predator alerts. Veterinary integration for health records.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Livestock Management"
  },
  {
    id: 58,
    title: "Smart Greenhouse Controller",
    description: "Arduino Mega-based comprehensive greenhouse management system. Automated control of temperature, humidity, CO2, lighting, and irrigation. Plant growth optimization algorithms and crop yield prediction. Integration with weather forecasting services.",
    platform: "Arduino + ESP32",
    difficulty: "Advanced",
    category: "Greenhouse Automation"
  },
  {
    id: 59,
    title: "Soil Analysis Robot",
    description: "Autonomous robot using Raspberry Pi for automated soil sampling and analysis. pH, moisture, and nutrient level measurements at multiple locations. GPS mapping of soil conditions and fertilizer recommendations. Integration with farm management software.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Soil Management"
  },
  {
    id: 60,
    title: "Pest Detection System",
    description: "Computer vision system using Raspberry Pi for automated pest detection in crops. Real-time identification and counting of harmful insects. Targeted spraying recommendations and organic pest control integration. Crop damage assessment and yield impact prediction.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Pest Management"
  },

  // Environmental Monitoring Projects
  {
    id: 61,
    title: "Ocean Pollution Monitor",
    description: "Waterproof ESP32-based device for ocean water quality monitoring. Measures pH, dissolved oxygen, temperature, and pollution levels. Solar-powered with satellite communication for remote deployment. Marine life impact assessment and pollution source tracking.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Marine Environment"
  },
  {
    id: 62,
    title: "Forest Fire Detection Network",
    description: "Distributed network of ESP32 devices with smoke, temperature, and humidity sensors for early forest fire detection. LoRa mesh networking for wide area coverage. AI algorithms for false alarm reduction. Integration with firefighting services and evacuation systems.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Fire Prevention"
  },
  {
    id: 63,
    title: "Noise Pollution Monitor",
    description: "Arduino-based sound level monitoring system for urban noise pollution tracking. Frequency analysis and noise source identification. Real-time mapping of noise levels across the city. Community reporting features and correlation with health data.",
    platform: "Arduino + ESP32",
    difficulty: "Intermediate",
    category: "Urban Environment"
  },
  {
    id: 64,
    title: "Wildlife Conservation Tracker",
    description: "Low-power ESP32 device for wildlife tracking and behavior monitoring. Camera traps with motion detection and species identification. Long-range communication for remote deployment. Anti-poaching alerts and conservation area monitoring.",
    platform: "ESP32 + Raspberry Pi Zero",
    difficulty: "Advanced",
    category: "Wildlife Conservation"
  },
  {
    id: 65,
    title: "River Water Quality Monitor",
    description: "Solar-powered water quality monitoring buoy using ESP32. Measures turbidity, pH, dissolved oxygen, and chemical pollutants. Real-time data transmission to environmental agencies. Algae bloom prediction and ecosystem health assessment.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Water Quality"
  },

  // Sports & Fitness Projects
  {
    id: 66,
    title: "Smart Tennis Racket",
    description: "Arduino Nano-based tennis racket with accelerometers and gyroscopes for swing analysis. Shot speed, spin, and accuracy measurement. Mobile app for performance tracking and improvement suggestions. Professional coaching integration and video analysis.",
    platform: "Arduino Nano",
    difficulty: "Intermediate",
    category: "Sports Analytics"
  },
  {
    id: 67,
    title: "Swimming Performance Tracker",
    description: "Waterproof wearable device using Arduino for swimming performance analysis. Stroke counting, lap timing, and technique analysis. Heart rate monitoring and calorie calculation. Pool detection and turn analysis for competitive swimmers.",
    platform: "Arduino Nano",
    difficulty: "Advanced",
    category: "Aquatic Sports"
  },
  {
    id: 68,
    title: "Rock Climbing Safety System",
    description: "ESP32-based climbing harness with fall detection and safety monitoring. Rope tension analysis and anchor point load measurement. Emergency alert system with GPS location. Climbing route tracking and difficulty assessment.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Adventure Sports"
  },
  {
    id: 69,
    title: "Smart Basketball Hoop",
    description: "Arduino-controlled basketball hoop with shot detection and scoring system. Computer vision for shot analysis and player statistics. Mobile app for game modes and competitive challenges. Training recommendations based on shooting patterns.",
    platform: "Arduino + Raspberry Pi",
    difficulty: "Advanced",
    category: "Team Sports"
  },
  {
    id: 70,
    title: "Cycling Performance Monitor",
    description: "ESP32-based cycling computer with power meter, cadence, and environmental sensors. GPS tracking with route optimization and safety features. Integration with training platforms and coaching software. Crash detection and emergency alerts.",
    platform: "ESP32",
    difficulty: "Intermediate",
    category: "Cycling Technology"
  },

  // Weather & Climate Projects
  {
    id: 71,
    title: "Personal Weather Forecast System",
    description: "Raspberry Pi-based localized weather prediction system using machine learning on historical data. Hyper-local forecasting for specific locations. Integration with multiple weather data sources. Severe weather alerts and emergency preparation recommendations.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Weather Prediction"
  },
  {
    id: 72,
    title: "Lightning Detection Network",
    description: "ESP32-based lightning detection system using electromagnetic sensors. Real-time storm tracking and lightning strike mapping. Network of distributed sensors for improved accuracy. Integration with weather services and safety alerts.",
    platform: "ESP32",
    difficulty: "Advanced",
    category: "Storm Monitoring"
  },
  {
    id: 73,
    title: "Microclimate Monitor",
    description: "Arduino-based system for monitoring localized climate conditions in specific areas. Temperature, humidity, pressure, and soil temperature sensors. Solar radiation and evapotranspiration calculations. Agricultural and gardening applications.",
    platform: "Arduino + ESP32",
    difficulty: "Intermediate",
    category: "Climate Monitoring"
  },
  {
    id: 74,
    title: "Tornado Detection System",
    description: "Raspberry Pi-based tornado detection using Doppler radar data analysis and atmospheric pressure monitoring. Machine learning algorithms for pattern recognition. Early warning system integration and automated shelter protocols.",
    platform: "Raspberry Pi",
    difficulty: "Expert",
    category: "Severe Weather"
  },
  {
    id: 75,
    title: "UV Index Monitor",
    description: "Portable ESP32 device for UV radiation monitoring and skin protection recommendations. Personal UV exposure tracking and vitamin D synthesis optimization. Integration with weather apps and health monitoring systems. Sunscreen reminder notifications.",
    platform: "ESP32",
    difficulty: "Beginner",
    category: "Health & Weather"
  },

  // Aerospace & Aviation Projects
  {
    id: 76,
    title: "Ground Station Controller",
    description: "Raspberry Pi-based ground station for satellite and drone communication. Antenna tracking system with automatic pointing. Telemetry data processing and mission control interface. Integration with flight planning and navigation systems.",
    platform: "Raspberry Pi",
    difficulty: "Advanced",
    category: "Ground Systems"
  },


  // Aerospace & Aviation Projects (Ideas 77-100)
{
  id: 77,
  title: "DIY Flight Data Recorder",
  description: "A comprehensive flight data logging system using Arduino Mega with GPS, IMU (MPU-9250), barometric pressure sensor, and SD card storage. Records altitude, speed, acceleration, orientation, and GPS coordinates for model aircraft or drones. Features real-time data transmission via LoRa for ground monitoring and post-flight analysis dashboard.",
  platform: "Arduino",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 78,
  title: "Autonomous Drone Navigation System",
  description: "Advanced drone autopilot using Raspberry Pi 4 with camera module, GPS, and multiple sensors for autonomous flight missions. Implements SLAM (Simultaneous Localization and Mapping) algorithms for indoor navigation without GPS. Features obstacle avoidance using ultrasonic and LiDAR sensors, waypoint navigation, and return-to-home functionality.",
  platform: "Raspberry Pi",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
},
{
  id: 79,
  title: "Rocket Telemetry System",
  description: "Real-time telemetry system for model rockets using ESP32 with 9-axis IMU, barometric altimeter, and GPS. Transmits live flight data including altitude, velocity, acceleration, and orientation to ground station. Features data logging, flight path visualization, and deployment event detection for parachute systems.",
  platform: "ESP32",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 80,
  title: "Aircraft Engine Monitor",
  description: "Comprehensive engine monitoring system using Arduino with temperature sensors (thermocouples), pressure transducers, and RPM sensors. Displays real-time engine parameters on LCD/OLED screen with warning alerts. Logs data to SD card for maintenance analysis and includes wireless transmission to ground station.",
  platform: "Arduino",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 81,
  title: "Weather Station for Aviation",
  description: "Professional weather monitoring station using Raspberry Pi with multiple sensors for temperature, humidity, barometric pressure, wind speed/direction, and visibility. Provides aviation-specific weather reports (METAR format) and uploads data to weather networks. Features lightning detection and severe weather alerts for pilots.",
  platform: "Raspberry Pi",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 82,
  title: "Drone Swarm Controller",
  description: "Multi-drone coordination system using ESP32 mesh network for synchronized flight operations. Controls multiple drones for aerial photography, search and rescue, or agricultural monitoring. Implements collision avoidance algorithms and distributed decision making for autonomous swarm behavior.",
  platform: "ESP32",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
},
{
  id: 83,
  title: "Aircraft Attitude Indicator",
  description: "Digital attitude indicator (artificial horizon) using Arduino with MPU-6050 gyroscope and accelerometer. Features LED matrix or TFT display showing pitch and roll angles. Includes calibration routines, backup battery system, and optional wireless connectivity for remote monitoring.",
  platform: "Arduino",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 84,
  title: "Satellite Tracker & Ground Station",
  description: "Automated satellite tracking system using Raspberry Pi with motorized antenna rotator, SDR receiver, and TLE (Two-Line Element) database. Automatically tracks and receives signals from amateur radio satellites, weather satellites, and ISS. Features doppler shift correction and signal analysis tools.",
  platform: "Raspberry Pi",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 85,
  title: "Quadcopter Flight Controller",
  description: "Custom flight controller using ESP32 with 6-axis IMU, barometer, and magnetometer. Implements PID control algorithms for stable flight, supports multiple flight modes (stabilize, altitude hold, position hold), and includes fail-safe mechanisms. Compatible with standard RC transmitters and features telemetry output.",
  platform: "ESP32",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
},
{
  id: 86,
  title: "Aircraft Landing Light Controller",
  description: "Intelligent landing light system using Arduino with light sensors, GPS, and timer modules. Automatically controls aircraft landing lights based on altitude, time of day, and proximity to airports. Features manual override, dimming control, and maintenance hour tracking for bulb replacement scheduling.",
  platform: "Arduino",
  difficulty: "Beginner",
  category: "Aerospace & Aviation"
},
{
  id: 87,
  title: "Balloon Payload Tracker",
  description: "High-altitude balloon payload system using Raspberry Pi Zero with GPS, camera, environmental sensors, and APRS transmitter. Captures images and data during ascent to near-space altitudes (100,000+ feet). Features cutdown mechanism, parachute deployment detection, and recovery beacon for payload retrieval.",
  platform: "Raspberry Pi",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 88,
  title: "Drone Battery Management System",
  description: "Smart battery monitoring and protection system using ESP32 with voltage/current sensors and temperature monitoring. Provides real-time battery status, remaining flight time calculations, and automatic landing triggers for low battery conditions. Features cell balancing and charging management.",
  platform: "ESP32",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 89,
  title: "Aircraft Radio Frequency Scanner",
  description: "Aviation radio scanner using Raspberry Pi with RTL-SDR dongle for monitoring air traffic control communications. Features frequency database with airport-specific channels, automatic squelch control, and audio recording capabilities. Includes web interface for remote monitoring and mobile app integration.",
  platform: "Raspberry Pi",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 90,
  title: "Propeller RPM Monitor",
  description: "Non-contact propeller speed measurement system using Arduino with optical or magnetic sensors. Displays real-time RPM on digital display with data logging capabilities. Features overspeed alarms, maintenance hour tracking, and wireless data transmission to flight instruments or ground station.",
  platform: "Arduino",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 91,
  title: "Drone Delivery System",
  description: "Automated package delivery drone using ESP32 with GPS navigation, payload release mechanism, and customer notification system. Features precise landing capabilities, package weight detection, delivery confirmation via camera, and return-to-base automation. Includes mobile app for tracking deliveries.",
  platform: "ESP32",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
},
{
  id: 92,
  title: "Aircraft Fuel Flow Monitor",
  description: "Precision fuel consumption monitoring system using Arduino with flow sensors and fuel level indicators. Calculates fuel burn rates, remaining fuel, and range estimation. Features low fuel warnings, fuel efficiency analysis, and data logging for flight planning and engine performance monitoring.",
  platform: "Arduino",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 93,
  title: "Air Traffic Visualization System",
  description: "Real-time air traffic monitoring display using Raspberry Pi with ADS-B receiver and large touchscreen display. Shows aircraft positions, flight paths, and information in local airspace. Features flight tracking, weather overlay, airport information, and historical flight data analysis.",
  platform: "Raspberry Pi",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 94,
  title: "Drone Obstacle Avoidance System",
  description: "Advanced collision avoidance system using ESP32 with multiple ultrasonic sensors, LiDAR, and camera module. Implements real-time path planning algorithms to navigate around obstacles during autonomous flight. Features 360-degree detection coverage and emergency maneuver capabilities.",
  platform: "ESP32",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
},
{
  id: 95,
  title: "Aircraft Cabin Pressure Monitor",
  description: "Cabin altitude and pressure monitoring system using Arduino with barometric pressure sensors and differential pressure measurement. Provides alerts for cabin pressure issues, altitude calculations, and rate-of-climb indicators. Features data logging and emergency descent notifications.",
  platform: "Arduino",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 96,
  title: "Rocket Launch Control System",
  description: "Comprehensive launch control system using Raspberry Pi with safety interlocks, ignition sequencing, and telemetry monitoring. Features countdown timer, abort mechanisms, range safety functions, and multi-stage rocket support. Includes wireless control capability and video recording integration.",
  platform: "Raspberry Pi",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
},
{
  id: 97,
  title: "Aircraft Weight & Balance Calculator",
  description: "Digital weight and balance computation system using ESP32 with load cells and touchscreen interface. Calculates center of gravity, weight distribution, and loading recommendations for aircraft. Features multiple aircraft profiles, fuel calculations, and pre-flight safety checks.",
  platform: "ESP32",
  difficulty: "Intermediate",
  category: "Aerospace & Aviation"
},
{
  id: 98,
  title: "Drone Gimbal Stabilizer",
  description: "3-axis camera stabilization system using Arduino with brushless gimbal motors and IMU sensors. Provides smooth video recording during flight with active stabilization compensation. Features follow-mode, lock-mode, and FPV-mode operation with wireless control from ground station.",
  platform: "Arduino",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 99,
  title: "Aircraft Anti-Ice System Controller",
  description: "Intelligent ice detection and prevention system using Raspberry Pi with temperature sensors, humidity monitoring, and heating element control. Automatically activates anti-ice systems based on atmospheric conditions and provides pilot alerts. Features power management and system health monitoring.",
  platform: "Raspberry Pi",
  difficulty: "Advanced",
  category: "Aerospace & Aviation"
},
{
  id: 100,
  title: "Multi-Rotor Performance Analyzer",
  description: "Comprehensive drone performance testing system using ESP32 with power meters, thrust measurement, vibration analysis, and flight data recording. Evaluates motor efficiency, propeller performance, battery consumption, and overall system optimization. Features automated test sequences and performance comparison reports.",
  platform: "ESP32",
  difficulty: "Expert",
  category: "Aerospace & Aviation"
}
]