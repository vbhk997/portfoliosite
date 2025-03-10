import React, { useEffect, useState } from 'react';
import BannerImage from '../assets/images/nyc.jpeg'; // Update with your image path
import IntroductionImage from '../assets/images/photo.jpg'; // Update with your introduction image path
import lnt from '../assets/images/images.png'
import trolley from '../assets/images/trolley.png'
import inchat from '../assets/images/inchat.png'
import pythonimg from '../assets/images/pythonimg.jpeg'
import iot from '../assets/images/iot.png'
import vk from '../assets/images/vk.png'
import alexa from '../assets/images/alexa.png'
import trolleyl from '../assets/images/trolleyimg.png'
import arrl from '../assets/images/augment.png'
import bucard from '../assets/images/bucard.png'
import nfctag from '../assets/images/nfctag.png'
import image from  '../assets/images/travalis.png'
import app from  '../assets/images/app.png'
import mm1 from  '../assets/images/monomoney1.jpeg'
import mm2 from  '../assets/images/monomoney2.jpeg'
import mmlogo from  '../assets/images/monomoneylogo.jpeg'

const MobileHome = () => {
  const [fontSize, setFontSize] = useState('20vw'); // Initial font size
  const [isProjectsVisible, setIsProjectsVisible] = useState(false); // State to manage project visibility
  const [selectedProject, setSelectedProject] = useState(null); // State to manage selected project

  const projects = [
    {
      logo: alexa,
      lightbox1: lnt,
      name: 'Alexa Based Smart Automotive Voice Control System',
      description: 'Larsen & Toubro (Collaboration)',
      details: 'During my collaboration with L&T Technological Services in Mysuru, India, I collaborated with a peer and worked on integrating Alexa Skills with automotive systems. This project aimed to enhance navigation accuracy across more than 10,000 cities, enabling smoother and more intuitive vehicle navigations through voice commands. This improved vehicle awareness and safety features. This experience allowed me to apply AI and automotive technology, driving innovation in connected vehicle systems.',
      procedure: 'Procedure',
      proceduredescription: [
        {
          title: 'Work',
          description: 'Helped ⁠formulate Alexa Skill integrations with automotive systems, enhancing navigation accuracy for 10,000+ cities. '
        },
        {
          title: 'Contribution',
          description: 'Contributed to Smart Vehicle technologies by developing real time distance calculations using Python. Contributed towards final presentation for potential clients.'
        },
        {
          title: 'Technology Used',
          description: 'AWS Lambda, Alexa skill Integration, Python, Google Distance Matrix API, Google Maps API'
        }
      ],
      impact: 'IMPACT',
      // impactdesc: [
      //   {
      //     title: 'Trolley Setup',
      //     description: 'Install RFID readers, cameras, and a display screen on the trolley to detect items and display the total cost.'
      //   },
      //   {
      //     title: 'Item Detection',
      //     description: 'RFID tags identify items placed in or removed from the cart, verified by cameras.'
      //   },
      //   {
      //     title: 'Display Update',
      //     description: 'Real-time price calculation and updates on the screen, reflecting items added or removed.'
      //   },
      //   {
      //     title: 'Inventory Synchronization',
      //     description: 'Communicates with the store\'s system to update stock levels in real time.'
      //   },
      //   {
      //     title: 'Checkout Process',
      //     description: 'Pre-calculated total at checkout for fast, seamless payments.'
      //   }
      // ],
    },
    {
      logo: trolley,
      lightbox1: trolleyl,
      lightbox2: trolley,
      name: 'Smart Trolley System (Research)',
      description: 'Collaboration with peer from MIT World Peace University, India',
      details: 'Currently designing a comprehensive smart trolley system architecture integrating IoT sensors, RFID technology, and Computer Vision to fasten retail inventory management and shopping experiences. This system aims to streamline the shopping experience, and automate processes through the analysis of over 1,000 shopping sessions. By seamlessly integrating with the existing inventory management system, we intend to reduce manual data entry by 80%, ensuring greater accuracy and efficiency in stock management, along with quicker shopping sessions.',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'Trolley Setup',
          description: 'Install RFID readers, cameras, and a display screen on the trolley to detect items and display the total cost.'
        },
        {
          title: 'Item Detection',
          description: 'RFID tags identify items placed in or removed from the cart, verified by cameras.'
        },
        {
          title: 'Display Update',
          description: 'Real-time price calculation and updates on the screen, reflecting items added or removed.'
        },
        {
          title: 'Inventory Synchronization',
          description: 'Communicates with the store\'s system to update stock levels in real time.'
        },
        {
          title: 'Checkout Process',
          description: 'Pre-calculated total at checkout for fast, seamless payments.'
        }
      ],
      impact: 'IMPACT',
      impactdesc: [
        {
          title: 'Faster Checkout',
          description: 'Eliminates the need for manual scanning of items at checkout. Reduces waiting times and allows customers to leave the store faster, improving convenience.'
        },
        {
          title: 'Improved Inventory Management',
          description: 'Automatically syncs with the store\'s inventory system to update stock levels in real time, reducing manual entry.'
        },
        {
          title: 'Reduced Human Error',
          description: 'Automates product detection and price calculation, minimizing human error during the checkout process.'
        },
        {
          title: 'Real-Time Cost Tracking',
          description: 'Provides instant updates on the total cost of items in the trolley via the display screen, allowing customers to track their spending as they shop.'
        },
        {
          title: 'Operational Efficiency',
          description: 'Optimizes stock replenishment and inventory tracking, leading to better product availability and reduced stockouts.'
        }
      ],
    },
    {
      logo: mmlogo,
      lightbox1: mm1,
      lightbox2: mm2,
      name: 'Online Banking System for Monopoly',
      description: 'App based transaction system for Monopoly Board Game',
      details: 'Designed a comprehensive online banking system for Monopoly using React Native, for IOS and Android Devices.',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'Tech Stack',
          description: 'Javascript, Typescript, HTML, CSS, React Native'
        },
        {
          title: 'Working',
          description: 'Removes cash transactions from the Monopoly board game enabling users to go cash free with an online transaction system.'
        },
        {
          title: 'Features',
          description: 'Allows in game features such as buying and trading properties, as well as creating a game lobby.'
        }
      ],
    },
    {
      logo: image,
      lightbox1: app,
      lightbox2: arrl,
      name: 'Travel Companion App',
      description: 'AI based augmented reality Travel Guide',
      details: 'Developing a travel companion app designed to enhance the sightseeing experience for users. The app generates a curated list of recommended places to visit, ensuring a tailored experience for each user. When users point their smartphone camera at a landmark or sightseeing location, the app overlays detailed information about the place directly on the screen. This immersive, interactive feature acts as a virtual travel guide, allowing users to learn more about their surroundings, without the need for traditional audio guides.',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'User Input and Personalization',
          description: 'Users input key details such as travel destination, trip duration, and preferred sightseeing hours. Based on user preferences, the app generates a personalized list of recommended places to visit, tailored to their schedule and interests.'
        },
        {
          title: 'Augmented Reality (AR) Integration',
          description: 'Users can point their smartphone camera at a monument, building, or tourist site, and the app uses AR to display real-time information on the screen.'
        },
        {
          title: 'Real-Time Virtual Guide',
          description: 'The AR feature acts as a virtual guide, offering in-depth insights about landmarks without the need for an external guide or earphones.'
        },
        {
          title: 'Partnering with Tourist Sites',
          description: 'Potential partnerships with tourist spots and attractions could replace traditional audio guides, allowing visitors to use the app’s AR feature as their primary sightseeing companion.'
        },
        {
          title: 'Multi-Language Support',
          description: 'The app can provide AR information in multiple languages, making it accessible to a wider audience of international tourists.'
        }
      ],
      impact: 'IMPACT',
      impactdesc: [
        {
          title: 'Enhanced Sightseeing Experience',
          description: 'The app provides a more immersive and informative sightseeing experience by displaying AR information directly on the user’s smartphone screen.'
        },
        {
          title: 'Innovation in Tourism',
          description: 'Potential partnerships with tourist attractions can further enhance the app’s usability and expand its reach in the tourism industry.'
        },
        {
          title: 'Increased Convenience',
          description: 'Provides all necessary travel and sightseeing information in one app, reducing the need to carry physical materials like brochures or guidebooks.'
        },
        {
          title: 'Eco-Friendly Alternative',
          description: 'Reduces the need for printed maps, pamphlets, and other materials traditionally used by tourists, contributing to eco-friendly tourism practices.'
        },
        {
          title: 'Improved Engagement with Local Culture',
          description: 'By offering detailed information about each sightseeing spot, the app helps users engage more deeply with the cultural and historical context of their destinations.'
        }
      ],
    },
    {
      logo: inchat,
      lightbox1: inchat,
      name: 'Inchat',
      description: 'Android App development (Personal Project)',
      details: 'Developed a social media application using Java, Android Studio, and Google Firebase, designed specifically for Android systems. This project aimed to create a platform that allows users to connect, share content, and interact in real time. The application features user authentication, and real-time messaging capabilities. Worked with various aspects of Android app development, including Java programming, UI/UX design, and backend integration using Firebase. Utilized Android Studio as primary integrated development environment (IDE), for code editing, debugging, and testing. For the backend, I chose Google Firebase. Implemented Firebase Authentication for secure user sign-up and login processes, allowing users to create accounts and manage their profiles with ease. Overall, this project provided me with a solid foundation in mobile application development, enhanced my understanding of backend services, and equipped me with the skills needed to create interactive, user-friendly applications.',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'Application Development',
          description: 'Developed a fully functional social media application using Java and Android Studio, tailored specifically for Android systems.'
        },
        {
          title: 'Backend Integration',
          description: 'Utilized Google Firebase as the backend service to manage user authentication, data storage, and real-time data synchronization.'
        },
        {
          title: 'User Authentication',
          description: 'Integrated Firebase Authentication to enable secure user sign-up, login, and account management.'
        },
        {
          title: 'Real-Time Messaging',
          description: 'Developed a messaging system that allows users to send and receive messages instantly, utilizing Firebase Cloud Messaging for push notifications. Designed the UI for the messaging interface, focusing on usability and responsiveness.'
        },
        {
          title: 'User Profiles',
          description: 'Enabled users to create and manage their profiles, including profile pictures, bio, and social connections. Integrated privacy settings to allow users to control who can view their profiles and content'
        }
      ],
      impact: 'Impact',
      impactdesc: ''
    },
    {
      logo: pythonimg,
      lightbox1: pythonimg,
      name: 'Python Virtual Assistant',
      description: 'Personal assistant to automate tasks',
      details: 'Developed a Python-based virtual assistant to automate various tasks and interact with users through voice commands. Streamlined everyday activities, such as searching the web, retrieving information, sending emails, setting reminders, and controlling system functions like opening applications or adjusting volume. The primary goal of the project was to simplify repetitive tasks and make technology more accessible through hands-free interaction.',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'Voice Command Recognition',
          description: 'Integrated speech recognition modules such as pyttsx3 and Google Speech-to-text to convert spoken inputs into text for processing. Designed the assistant to listen continuously or on-demand for voice commands, enhancing hands-free convenience.'
        },
        {
          title: 'Task Automation',
          description: 'Automated tasks such as web searches, sending emails, setting reminders, and opening applications. Customized system commands to control local functions, including adjusting volume, launching programs, and checking system status.'
        },
        {
          title: 'Integration with System Functions',
          description: 'Ensured the assistant could interact with popular software and applications seamlessly.'
        },
        {
          title: 'Hands-Free Interaction',
          description: 'Made voice commands particularly useful for scenarios where users require quick actions or multitasking.'
        },
        {
          title: 'Learning Outcome',
          description: 'Gained a deeper understanding of Python, voice recognition, and basic NLP.'
        }
      ],
    },
    {
      logo: iot,
      lightbox1: nfctag,
      lightbox2: bucard,
      name: 'Smart Business Cards',
      description: 'NFC based IOT business cards to handle data',
      details: 'Developed an Android application to enable users to edit data on NFC tags placed on business cards, transforming them into electronic business cards for streamlined networking. The app allows users to update, read, and write contact information onto NFC cards, making it easier to share details during professional interactions. The core functionality of the application includes the ability to encode contact information onto an NFC card and convert that data into a contact format (vCard). When the NFC card is scanned by another device, the encoded data is seamlessly transferred, allowing for quick storage within the recipient\'s device contacts',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'Electronic Business Card Creation',
          description: 'Embedded an NFC tag between two business cards, with front and back prints on each side, combining them into a single card.'
        },
        {
          title: 'NFC Integration',
          description: 'Developed functionality for reading and writing NFC card data using the Android SDK\'s NFC API. Ensured compatibility across various Android devices equipped with NFC technology.'
        },
        {
          title: 'User Interface and App Development',
          description: 'Provided users with an interface to edit and update their business card data directly from the app.'
        },
        {
          title: 'Data Editing and Updating',
          description: 'Developed a feature to convert NFC card data into a vCard format for seamless import into a recipient’s device contacts.'
        },
        {
          title: 'Contact Storage',
          description: 'Integrated functionality to store scanned NFC data securely within the device\'s native contacts application.'
        }
      ],
      impact: 'IMPACT',
      impactdesc: [
        {
          title: 'Streamlined Networking',
          description: 'Simplifies the process of sharing professional contact information by turning physical NFC cards into digital business cards. Enables seamless transfer of contact details between devices with a simple tap, making networking faster and more efficient.'
        },
        {
          title: 'Enhanced Contact Management',
          description: 'Provides an efficient way to store and retrieve contact information without manual data entry.'
        },
        {
          title: 'Convenience and Efficiency',
          description: 'Eliminates the need for paper business cards, reducing clutter and offering a more environmentally friendly alternative.'
        },
      ],
    // },
    // {
    //   logo: ProjectLogo,
    //   name: 'Project 6',
    //   description: 'Description for Project 6',
    //   details: 'This project involves designing a user-friendly interface that simplifies the user interaction with complex data systems.',
    //   procedure: 'sample',
    //   proceduredescription: 'sampleinfo',
    //   impact: 'Impact',
    //   impactdesc: 'sample'
    // },
    // {
    //   logo: ProjectLogo,
    //   name: 'Project 7',
    //   description: 'Description for Project 7',
    //   details: 'This project focuses on optimizing cloud infrastructure for better performance and cost-effectiveness.',
    //   procedure: 'sample',
    //   proceduredescription: 'sampleinfo',
    //   impact: 'Impact',
    //   impactdesc: 'sample'
    // },
    // {
    //   logo: ProjectLogo,
    //   name: 'Project 8',
    //   description: 'Description for Project 8',
    //   details: 'This project aims to create an interactive educational platform that enhances learning experiences through gamification.',
    //   procedure: 'sample',
    //   proceduredescription: 'sampleinfo',
    //   impact: 'Impact',
    //   impactdesc: 'sample'
    },// },
    {
      logo: vk,
      lightbox1: vk,
      name: 'This Website',
      description: 'Yes, this very website is my own project.',
      details: 'Developed this React-based portfolio website to showcase my personal projects, professional experience, and achievements. This website serves as a digital portfolio, designed to present my skills and expertise to potential employers, collaborators, and anyone interested. Utilizing a combination of HTML, CSS, and JavaScript, the website is fully responsive, for both desktop and mobile.',
      procedure: 'PROCEDURE',
      proceduredescription: [
        {
          title: 'React Implementation',
          description: 'Employed React state and props to dynamically render content and manage user interactions.'
        },
        {
          title: 'HTML, CSS, and JavaScript Integration',
          description: 'Leveraged HTML for the website’s structure, CSS for styling and visual design, and JavaScript for interactive features. Ensured smooth transitions, animations, and dynamic behavior across various sections using JavaScript and React libraries.'
        },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const newSize = Math.min(window.innerWidth * 0.2, window.innerHeight * 0.15, 160); // Dynamic size based on height
      setFontSize(`${newSize}px`); // Set the font size dynamically
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once to set the initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleProjectsVisibility = () => {
    setIsProjectsVisible(!isProjectsVisible); // Toggle the visibility
  };

  const openLightbox = (project) => {
    setSelectedProject(project); // Set the selected project
  };

  const closeLightbox = () => {
    setSelectedProject(null); // Clear the selected project
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100vh', // Full height of the viewport
        overflow: 'hidden',
        marginTop: '60px', // Adjust this value to the height of your header
      }}>
        <img
          src={BannerImage} // Use the image for the background
          alt="Banner"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.5s ease-in-out', // Smooth transition
          }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute', // Keep it absolutely positioned
          color: 'white',
          textAlign: 'center',
          fontSize: fontSize, // Set dynamically
          fontWeight: 'bold',
          zIndex: 1,
          padding: '10px',
          maxWidth: '90%',
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Adjust position to truly center
        }}>
          Vaibhav Kumar {/* Display your name */}
        </div>
      </div>

      {/* Introduction Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column', // Stack vertically
        alignItems: 'center', // Center align items
        padding: '40px 20px', // Increased vertical padding
        backgroundColor: '#f4f4f4',
      }}>
        <img
          src={IntroductionImage} // Use the image for the introduction
          alt="Introduction"
          style={{
            width: '80%', // Adjust width as needed
            height: 'auto',
            borderRadius: '10px',
            marginBottom: '20px', // Space between text and image
          }}
        />
        <div style={{
          flex: 1,
          textAlign: 'center',
        }}>
          <h2>Introduction</h2>
          <p>
          Hello, I am Vaibhav!</p>
          <p>I'm a highly motivated Computer Science student with a deep passion for web development and technology. Pursuing a BS in Computer Science from The Pennsylvania State University, I've gained a solid foundation in various programming languages, including Java, Python, C and web technologies like HTML, CSS, and ReactJS.</p>
          <p>In addition to my technical skills, I have experience as a Teaching Assistant for Physics and as a software developer intern at a startup.</p>
          <p>I'm also proud of my independent projects, including a social media application and a Python virtual assistant. These showcase my dedication to continuous learning and my proficiency in mobile app development and backend integration.</p>
          <p>Outside of my academic and professional life, I'm an active member of ACM DevPSU Learning Club and have participated in various extracurricular activities, including high school Interact Club, Track and Field, and Rubik's Cube Speedsolving.</p>
          
        </div>
      </div>

      {/* Collapsible Personal Projects Section */}
      <div style={{
        padding: '20px',
        backgroundColor: '#f4f4f4', // Light background for contrast
      }}>
        <button 
          onClick={toggleProjectsVisibility} 
          style={{
            width: '100%', // Full width
            padding: '15px', // Increased padding for a better look
            backgroundColor: '#000', // Black background
            color: '#fff', // White text
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
            fontSize: '1rem', // Adjust font size
          }}>
          {isProjectsVisible ? 'Hide Projects' : 'Show Projects'}
        </button>

        {isProjectsVisible && (
          <div style={{
            display: 'flex',
            flexDirection: 'column', // Stack vertically
            alignItems: 'center', // Center align items
          }}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => openLightbox(project)} // Open lightbox on click
                style={{
                  background: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  margin: '10px',
                  padding: '20px',
                  textAlign: 'center',
                  width: '90%', // Responsive width
                  maxWidth: '400px', // Set max width for the project boxes
                  cursor: 'pointer', // Show pointer cursor
                }}>
                <img src={project.logo} alt={project.name} style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                }} />
                <h3 style={{ margin: '10px 0' }}>{project.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

     {/* Lightbox for selected project */}
{selectedProject && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  }}>
    <div style={{
      width: '90%', // Adjusted width for responsiveness
      maxWidth: '1500px', // Set a maximum width for lightbox
      maxHeight: '90vh', // Set maximum height for lightbox
      overflowY: 'auto', // Enable vertical scrolling
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      padding: '20px',
      position: 'relative',
    }}>
      <span style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '2rem',
        color: 'black',
        cursor: 'pointer',
      }} onClick={closeLightbox}>×</span>

      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Overview</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        {selectedProject.details} {/* Replace with the appropriate property for project details */}
      </p>
      <hr></hr>
      <br></br>

      {/* First Information Section (Logo Below Overview) */}
      <div style={{
    marginBottom: '20px',
    textAlign: 'center', // Center the content
  }}>
  <img src={selectedProject.lightbox1} alt="Project Logo" style={{
    width: '50%', // Adjusted width for the logo
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px', // Space between logo and description
  }} />
  <h3 style={{ margin: '0' }}>{selectedProject.procedure}</h3> {/* Procedure heading */}
  
  {/* Loop through procedure description array */}
  <div style={{ textAlign: 'left', marginTop: '10px' }}> {/* Left align the procedure details */}
    {selectedProject.proceduredescription.map((step, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <h4 style={{ margin: '0' }}>{step.title}</h4> {/* Step title */}
        <p style={{ margin: '0' }}>{step.description}</p> {/* Step description */}
      </div>
    ))}
  </div>
</div>


      <hr></hr>
      <br></br>

      {/* Second Information Section (Second Logo Below First Information) */}
      {selectedProject.impactdesc && Array.isArray(selectedProject.impactdesc) && selectedProject.impactdesc.length > 0 && (
        <div style={{
  marginBottom: '20px',
  textAlign: 'center',
}}>
  <img src={selectedProject.lightbox2} alt="Project Logo" style={{
    width: '50%', // Adjusted width for the logo
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px', // Space between logo and description
  }} />
  
  <h3 style={{ margin: '0' }}>{selectedProject.impact}</h3>
  
  {/* Render the impact description dynamically */}
  {selectedProject.impactdesc && selectedProject.impactdesc.length > 0 ? (
    <div>
      {selectedProject.impactdesc.map((impactItem, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <h4 style={{ margin: '0' }}>{impactItem.title}</h4>
          <p style={{ margin: '0' }}>{impactItem.description}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>{selectedProject.impactdesc}</p>
  )}
</div>)}

    </div>
  </div>
)}



    </div>
  );
};

export default MobileHome;
