
//import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Front.css'; // Ensure this imports your CSS content
import img1 from './images/img1.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

const images = [img1, img3, img4, img5, img6]; // Only include images you want to use
const titles = ['Buying a Home', 'Renting a Home', 'Buy/Rent your Property', 'Plots and Lands', 'Locality Insights'];

const Front = () => {
  const navigate=useNavigate();
    useEffect(() => {
      const text1 = "Agents. Tours. ";
      const text2 = "Loans. Homes. ";
      const typingSpeed = 200; // Speed in milliseconds
    
      const typingTextLine1 = document.getElementById('typing-text-line1');
      const typingTextLine2 = document.getElementById('typing-text-line2');
    
      // Typing effect
      if (typingTextLine1 && typingTextLine2) {
        const typeText = (element, text, callback) => {
          let i = 0;
          element.textContent = ""; // Clear existing content
          const interval = setInterval(() => {
            if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
            } else {
              clearInterval(interval);
              if (callback) callback();
            }
          }, typingSpeed);
        };
    
        const startTyping = () => {
          typeText(typingTextLine1, text1, () => 
            typeText(typingTextLine2, text2, () => {
              setTimeout(startTyping, 1000);
            })
          );
        };
    
        startTyping();
      }
    
      // Scroll functionality logic
      const scrollContainer = document.querySelector('.top');
      const scrollLeftButton = document.querySelector('.scroll-btn.left');
      const scrollRightButton = document.querySelector('.scroll-btn.right');
    
      const isMobile = () => window.innerWidth <= 480;
    
      const checkScrollButtons = () => {
        if (isMobile()) {
          const isAtStart = scrollContainer.scrollLeft <= 0;
          const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;
    
          scrollLeftButton.style.display = isAtStart ? 'none' : 'block';
          scrollRightButton.style.display = isAtEnd ? 'none' : 'block';
        } else {
          scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
          scrollRightButton.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
        }
      };
    
      const scroll = (direction) => {
        const scrollAmount = isMobile() ? 
          (direction === 'left' ? -scrollContainer.offsetWidth : scrollContainer.offsetWidth) :
          (direction === 'left' ? -200 : 200);
    
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      };
    
      scrollLeftButton.addEventListener('click', () => scroll('left'));
      scrollRightButton.addEventListener('click', () => scroll('right'));
    
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      checkScrollButtons(); // Initial check to set button states
    
      // Cleanup event listeners on component unmount
      return () => {
        scrollLeftButton.removeEventListener('click', () => scroll('left'));
        scrollRightButton.removeEventListener('click', () => scroll('right'));
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }, []); // Empty dependency array ensures useEffect runs only once
    
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: 'When should I buy a house?',
            answer: 'As purchasing property is an enormous decision, it should never be made in haste. Consult a financial professional if required. If availing a home loan, the age at which you avail the loan can be of importance, so a comfortable window to repay the loan should be considered.',
        },
        {
            question: 'What type of property should I consider—apartment, house, or villa?',
            answer: 'The choice depends on your lifestyle, family size, and budget. Apartments are generally more affordable and come with shared amenities, while houses or villas offer more privacy and space. However, houses might involve higher maintenance costs.',
        },
        {
            question: 'What legal checks should be performed before finalizing a property?',
            answer: 'Verify the title deed, ensure there are no encumbrances, and check for necessary approvals from local authorities. For a new property, ensure that the builder has obtained the necessary completion and occupancy certificates.',
        },
        {
            question: 'How does the age of the property affect my decision?',
            answer: 'Older properties might come with a lower price tag but could require more maintenance. Newer properties might have modern amenities and require less immediate maintenance, but they could be more expensive.',
        },
        {
            question: 'What environmental factors should I consider?',
            answer: 'Check for flood zones, pollution levels, noise levels, and the property’s energy efficiency. These factors can affect your quality of life and the property’s value.',
        },
        {
            question: 'What are the implications of the property’s orientation?',
            answer: 'Orientation affects natural light, ventilation, and energy efficiency. For example, a north-facing home might receive less direct sunlight, while a south-facing home could be warmer.',
        },
        {
            question: 'How important is the resale value of the property?',
            answer: 'Resale value is crucial, especially if you plan to move in the future. Factors like location, neighborhood development, property condition, and market trends influence the resale value.',
        },
        {
            question: 'What should I consider regarding financing the property?',
            answer: 'Compare home loan interest rates, processing fees, and pre-payment options from different banks. Also, assess your eligibility and monthly EMIs based on your income and existing financial commitments.',
        },
    ];
  return (
    <div>
      <header>
        <div className="navbar">
          <img src="images/name.png" alt="Logo" className="logo-img" />
          <div className="dropdown">
            <a href="#" className="drop">Buy</a>
            <div className="dropdown-content">
              <a href="delhi.html">Property in Delhi / NCR</a>
              <a href="mumbai.html">Properties in Mumbai</a>
              <a href="bangalore.html">Property in Bangalore</a>
              <a href="pune.html">Property in Pune</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#" className="drop">Rent</a>
            <div className="dropdown-content">
              <a href="#">Property for rent in Delhi / NCR</a>
              <a href="#">Property for rent in Mumbai</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#" className="drop">Sell</a>
            <div className="dropdown-content">
              <Link to="/PropertyListingForm">sell property</Link>
              <a href="#">List Your Property</a>
            </div>
          </div>
          <div className="nav-search">
            <input placeholder="Enter an address, neighbourhood or city" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <li className="list"><a href="#">Advertise</a></li>
          <li className="list"><a href="#">Help</a></li>
          <li className="list"><a onClick={() => navigate('/signin')} style={{ cursor: 'pointer' }}>Sign In</a></li>
        </div>
      </header>
      
      <main>
        <div className="main-section">
          <div className="main-msg" id="typing-text-line1"></div>
          <div className="main-msg" id="typing-text-line2"></div>
          <input placeholder="Enter an address, neighbourhood, city or ZIP code" className="main-search border" />
        </div>
        
        <div className="options-start">
          <p>Get started with exploring real estate options</p>
        </div>

        <div className="shop">
          {titles.map((title, index) => (
            <div className="box" key={index}>
              <div className="box-img" style={{ backgroundImage: `url(${images[index]})` }}></div>
              <div className="box-overlay"></div>
              <div className="box-content">
                <h3 className="box-title">{title}</h3>
                <p className="box-description">Discover more about {title.toLowerCase()}.</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reviews">
          <h1>Testimonials</h1>
        </div>
        <br />
        <div className="testimonials">
          What our customers are saying about HeavenlyHomes
        </div>
        <div className="about">
          Hear from our satisfied buyers, tenants, dealers, and owners.
        </div>
        <br />
        <br />
        <div className="scroll-wrapper">
          <button className="scroll-btn left">&lt;</button>
          <div className="top">
            {[
              { name: 'Srikanth Malleboina', location: 'Hyderabad', text: 'Has a better response rate as compared to any of their competitors.', img: 'man4.jpeg' },
              { name: 'William', location: 'Delhi', text: 'Ensure that the listings are current and accurate to avoid wasting time on outdated properties.', img: 'man2.jpg' },
              { name: 'Sobha Developers', location: 'Bangalore', text: 'Platform to meet our customers & generate revenues with lowest cost of acquisition', img: 'man3.jpeg' },
              { name: 'Srikanth', location: 'Hyderabad', text: 'You get an exclusive assistance from heavenly homes team who tracks your property closely', img: 'man4.jpeg' },
              { name: 'Naina Bansal', location: 'Mumbai', text: 'Provide informations about schools, transportations and local attractions', img: 'man5.jpeg' },
              { name: 'Vidhi Garg', location: 'Chennai', text: 'Qucik response to any query', img: 'man6.jpeg' }
              // Add other testimonials as needed
            ].map((person, index) => (
              <div className="man" key={index}>
                <div className="one">
                  <div className="picture">
                    <img src={`images/${person.img}`} alt={person.name} />
                    <div className="name1">
                      <b>{person.name}</b>
                      <p>{person.location}</p>
                    </div>
                  </div>
                </div>
                <div className="text1">
                  <p>{person.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right">&gt;</button>
        </div>
        {/* FAQ Section */}
        <div className="faqs">
                    <h1>Frequently Asked Questions</h1>
                    <br></br>
                    <div className="ques-div">
                        {questions.map((item, index) => (
                            <div className={`ques-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                                <div className="ques-header" onClick={() => toggleQuestion(index)}>
                                    <span>{`Q. ${item.question}`}</span>
                                    <span className="icon">{activeIndex === index ? '-' : '+'}</span>
                                </div>
                                <div
                                    className="ques-content"
                                    style={{
                                        maxHeight: activeIndex === index ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease',
                                    }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
      </main>

      <footer>
      <div className="foot-panel">
            <ul>
                <a><b>HEAVENLY HOMES</b></a>
                <a>Mobile Apps</a>
                <a>Our Services</a>
                <a>Price Trends</a>
                <a>Post your Property</a>
                <a>Real Estate Investments</a>
                <a>Builders in India</a>
                <a>Area Converter</a>
                <a>Articles</a>
                <a>Rent Receipt</a>
                <a>Customer Service</a>
                <a>Sitemap</a>     
            </ul>
            <ul>
                <a><b>COMPANY</b></a>
                <a>Contact us</a>
                <a>Careers with us</a>
                <a>Terms & Conditions</a>
                <a>Request Info</a>
                <a>Feedback</a>
                <a>Report a problem</a>
                <a>Testimonials</a>
                <a>Privacy Policy</a>
                <a>Summons/Notices</a>
                <a>Grievances</a>
                <a>Safety Guide</a>
            </ul>
            <ul>
                <a><b>ABOUT</b></a>
                <a>Who we are</a>
                <a>Values</a>
                <a>Make it good</a>
                <a>Journal</a>
            </ul>
            <ul>
                <a><b>STAY UPDATE</b></a>
                <a>Toll Free - 1800 41 99099</a>
                <a>Email - feedback@heavenlyhomes.com</a>
                <a>Connect with us</a>
                <div className="font">
                <a><i className="fa-brands fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a><i className="fa-brands fa-youtube"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a><i className="fa-brands fa-instagram"></i></a>
                </div>
            </ul>
        </div>
        <div className="foot-panel2">
            <div className="pages">
                <a>Conditions of Use</a> &nbsp;&nbsp;
                <a>Privacy Notice</a> &nbsp;&nbsp;
                <a>All trademarks are the property of their respective owners.</a> &nbsp;&nbsp;
                <a>All rights reserved</a>
            </div>
            <div className="copyright">
                © 2023-2024, HeavenlyHomes.com, Inc. or its affiliates
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Front;