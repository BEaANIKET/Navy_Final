import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "./Footer.css"; // Ensure you have the corresponding CSS

const FooterEl = () => {
  const footerStyle = {
    backgroundColor: '#003366', // Navy blue background
    color: 'white',              // White text
    padding: '40px 20px',       // Increased padding for better spacing
    fontSize: '14px',           // Base font size
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const columnStyle = {
    marginBottom: '20px',
    flex: '1',
    minWidth: '220px',          // Minimum width for columns
    maxWidth: '300px',          // Maximum width for columns
  };

  const titleStyle = {
    fontSize: '18px',           // Title font size
    marginBottom: '15px',
    fontWeight: 'bold',         // Bold titles
  };

  const listStyle = {
    listStyleType: 'none',      // No bullet points
    padding: '0',
    margin: '0',
  };

  const linkStyle = {
    color: 'white',              // White links
    textDecoration: 'none',      // No underline
    transition: 'color 0.3s',   // Transition effect
  };

  const linkHoverStyle = {
    color: '#FFD700',            // Gold color on hover
  };

  const socialIconStyle = {
    marginRight: '15px',         // Space between icons
    fontSize: '24px',            // Increased icon size for better visibility
    color: 'white',              // White icons
    transition: 'color 0.3s',    // Transition effect for icons
  };

  const socialHoverStyle = {
    color: '#FFD700',            // Gold color on hover
  };

  const footerBottomStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '12px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
    paddingTop: '20px',         // Padding above copyright text
  };

  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div style={columnStyle} className='px-4'>
          <h5 style={titleStyle}>About Us</h5>
          <p style={{ color: 'white', lineHeight: '1.6' }}>
            We are dedicated to preparing individuals for successful careers in the merchant navy through comprehensive training programs and expert guidance.
          </p>
          <Link to="/about-us" className='my-5'>
            <Button className='footer-button my-5' type="primary" shape="round">Learn More</Button>
          </Link>
        </div>

        <div style={columnStyle}>
          <h5 style={titleStyle}>Training Programs</h5>
          <ul style={listStyle}>
            <li><Link to="/training/courses" style={{ ...linkStyle, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Nautical Science</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Marine Engineering</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Deck Cadet Training</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>GME Course</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Bridge Simulator Training</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Ship Management Training</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Safety Management Courses</Link></li>
            <li><Link to="/training/courses" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Catering and Hospitality</Link></li>
          </ul>
        </div>

        <div style={columnStyle}>
          <h5 style={titleStyle}>Quick Links</h5>
          <ul style={listStyle}>
            <li><Link to="/vacancies" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Latest Vacancies</Link></li>
            <li><Link to="/updates" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Latest Updates</Link></li>
            <li><Link to="/contact-us" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Contact Us</Link></li>
            <li><Link to="/faq" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>FAQs</Link></li>
            <li><Link to="/login" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Login</Link></li>
            <li><Link to="/register" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Register</Link></li>
            <li><Link to="/testimonials" style={{ ...linkStyle }} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Testimonials</Link></li>
          </ul>
        </div>

        <div style={columnStyle}>
          <h5 style={titleStyle}>Contact Information</h5>
          <p><strong>Address:</strong> Ganga Nagar Harmu Ranchi, Ranchi Jharkhand</p>
          <p><strong>Phone:</strong> +91 9693245941</p>
          <p><strong>Email: </strong><a href="mailto:webitya@gmail.com" style={{ color: 'white' }}>webitya@gmail.com</a></p>

          <h5 style={titleStyle}>Follow Us</h5>
          <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.color = socialHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}><FacebookOutlined /></a>
            <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.color = socialHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}><TwitterOutlined /></a>
            <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.color = socialHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}><LinkedinOutlined /></a>
            <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.color = socialHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}><InstagramOutlined /></a>
            <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.color = socialHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}><YoutubeOutlined /></a>
          </div>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <p>All Copyright &copy; Reserved @2024 | Merchant Navy Center</p>
      </div>
    </footer>
  );
};

export default FooterEl;
