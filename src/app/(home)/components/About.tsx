'use client';
import React, { RefObject, useEffect, useState, useContext } from "react";
import { Card, Avatar, Typography, Button, Space, Tooltip } from "antd";
import {
  EnvironmentOutlined,
  GithubOutlined,
  // TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  MailOutlined,
  UserOutlined,
  CodeOutlined,
  PhoneOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";
import Typewriter from "typewriter-effect";
const { Title, Paragraph, Text } = Typography;
interface AboutMeProps {
  contactMeRef: RefObject<HTMLDivElement>;
}

const AboutMe: React.FC<AboutMeProps> = ({ contactMeRef }) => {
  const [greeting, setGreeting] = useState<string>("");
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const getCurrentGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return "Good Morning!";
      } else if (hour >= 12 && hour < 18) {
        return "Good Afternoon!";
      } else {
        return "Good Evening!";
      }
    };

    setGreeting(getCurrentGreeting());

    // Update greeting every hour
    const intervalId = setInterval(() => {
      setGreeting(getCurrentGreeting());
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card
      style={{
        maxWidth: 800,
        margin: "auto",
        boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        background: isDarkMode ? "#1f1f1f" : "#fff",
      }}
      className="hover-lift"
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          backgroundColor: isDarkMode ? "#1f1f1f" : "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "linear-gradient(135deg, #1890ff 0%, #096dd9 100%)",
            backgroundImage: "url('/images/header-main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
        <Avatar
          size={160}
          src="/images/suman.jpeg"
          style={{
            border: `6px solid ${isDarkMode ? "#1f1f1f" : "#fff"}`,
            marginTop: "40px",
            boxShadow:
              "0 6px 12px rgba(0,0,0,0.2), 0 0 20px 8px rgba(24, 144, 255, 0.5)",
            zIndex: 1,
            animation: "pulse 2s infinite",
            filter: "drop-shadow(0 0 12px rgba(24, 144, 255, 0.7))",
          }}
        />
        <Title
          level={2}
          style={{
            margin: "24px 0 4px",
            fontWeight: 700,
            color: isDarkMode ? "#fff" : "#222",
          }}
        >
          <UserOutlined style={{ marginRight: "8px" }} /> Suman Thapa
        </Title>

        <Text
          style={{
            fontSize: "18px",
            color: isDarkMode ? "#ccc" : "#555",
            marginBottom: "8px",
          }}
        >
          <CodeOutlined style={{ marginRight: "8px" }} /> Software Engineer
        </Text>
        <Text
          style={{
            color: isDarkMode ? "#aaa" : "#666",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        >
          <EnvironmentOutlined style={{ marginRight: "8px" }} /> Kathmandu,
          Nepal
        </Text>
        <Text
          style={{
            fontSize: "20px",
            color: "#1890ff",
            marginBottom: "8px",
            fontWeight: 500,
          }}
        >
          {greeting}
        </Text>
        <Paragraph
          style={{
            textAlign: "center",
            maxWidth: "600px",
            marginBottom: "28px",
            color: isDarkMode ? "#ddd" : "#333",
            fontSize: "16px",
            lineHeight: "1.8",
            background: isDarkMode
              ? "rgba(24, 144, 255, 0.1)"
              : "rgba(24, 144, 255, 0.05)",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid rgba(24, 144, 255, 0.1)",
          }}
        >
          <Typewriter
            options={{
              strings: [
               "I have over 8+ years of experience in IT, specializing in Web and Mobile application development. My expertise includes integrating AI services, implementing billing systems, and working with CRM and ERP systems, including experience with a stock market portal utilizing machine learning. I'm proficient in front-end frameworks like React/Vue JS and back-end with Laravel, as well as developing hybrid mobile applications using Ionic and React Native. I also have experience with various APIs (SOAP, REST, GraphQL), client requirement gathering, and providing software support for production environments, all while collaborating with international teams and adhering to GitHub best practices. I also have experience in DevOps.",
               "Happy to hear from you",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              cursor: "|",
            }}
          />
        </Paragraph>
        <Button
          type="primary"
          style={{
            borderRadius: "24px",
            padding: "0 28px",
            height: "48px",
            fontSize: "16px",
            marginBottom: "28px",
            background: "linear-gradient(45deg, #1890ff, #36cfc9)",
            boxShadow:
              "0 8px 20px rgba(24, 144, 255, 0.5), 0 0 15px rgba(54, 207, 201, 0.3)",
            fontWeight: 600,
            transition: "all 0.3s ease",
            border: "none",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
          }}
          icon={<PhoneOutlined style={{ fontSize: "18px" }} />}
          onClick={() =>
            contactMeRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="hover-glow-button"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 12px 24px rgba(24, 144, 255, 0.6), 0 0 20px rgba(54, 207, 201, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(24, 144, 255, 0.5), 0 0 15px rgba(54, 207, 201, 0.3)";
          }}
        >
          <span style={{ marginLeft: "4px" }}>Get In Touch</span>
        </Button>

        <Space size={20}>
          <Tooltip title="GitHub">
            <a
              href="https://github.com/suman98"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <GithubOutlined
                style={{
                  fontSize: "28px",
                  color: "#1890ff",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              />
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/suman-thapa-3a957a1b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <LinkedinOutlined
                style={{
                  fontSize: "28px",
                  color: "#1890ff",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              />
            </a>
          </Tooltip>
          <Tooltip title="Facebook">
            <a
              href="https://www.facebook.com/suman9841323"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FacebookOutlined
                style={{
                  fontSize: "28px",
                  color: "#1890ff",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              />
            </a>
          </Tooltip>
          <Tooltip title="Email Me">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=talktosumanthapa@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <MailOutlined
                style={{
                  fontSize: "28px",
                  color: "#1890ff",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              />
            </a>
          </Tooltip>
          <Tooltip title="Download CV">
            <a
              href="/Suman_thapa_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <DownloadOutlined
                style={{
                  fontSize: "28px",
                  color: "#1890ff",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              />
            </a>
          </Tooltip>
        </Space>
      </div>
    </Card>
  );
};

export default AboutMe;
