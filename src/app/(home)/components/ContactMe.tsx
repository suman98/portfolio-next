"use client";

import React, { useContext } from "react";
import {
  Card,
  Typography,
  Button,
  message,
  Tooltip,
  Space,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";

const { Title, Paragraph } = Typography;

const ContactMe = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const email = "talktosumanthapa@gmail.com";

  // Dynamic color palette based on theme
  const colors = {
    primary: isDarkMode ? '#177ddc' : '#1890ff',
    background: isDarkMode ? '#141414' : 'transparent',
    text: {
      primary: isDarkMode ? '#ffffff' : '#000000',
      secondary: isDarkMode ? 'rgba(255,255,255,0.7)' : '#555',
    },
    cardBackground: isDarkMode 
      ? 'linear-gradient(to bottom, #1f1f1f, #141414)' 
      : 'linear-gradient(to bottom, #ffffff, #f9fafb)',
    border: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
    shadow: isDarkMode 
      ? '0 8px 16px rgba(0,0,0,0.5)' 
      : '0 8px 16px rgba(0,0,0,0.15)',
    contactInfoBackground: isDarkMode 
      ? 'rgba(23, 125, 220, 0.1)' 
      : 'rgba(24, 144, 255, 0.05)',
    emailBackground: isDarkMode 
      ? 'rgba(255,255,255,0.05)' 
      : '#f0f8ff',
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      message.success("Email copied to clipboard!");
    }).catch((err) => {
      message.error("Failed to copy email");
      console.error('Copy failed', err);
    });
  };

  return (
    <div 
      className="mt-4" 
      id="contact-section"
      style={{ 
        backgroundColor: colors.background,
        color: colors.text.primary 
      }}
    >
      <Card
        style={{
          maxWidth: 800,
          margin: "auto",
          boxShadow: colors.shadow,
          borderRadius: "12px",
          overflow: "hidden",
          background: colors.cardBackground,
          border: `1px solid ${colors.border}`,
          color: colors.text.primary,
        }}
        className="hover-lift"
      >
        <Title
          level={3}
          style={{
            borderBottom: `2px solid ${colors.primary}`,
            paddingBottom: "10px",
            color: colors.primary,
          }}
        >
          <PhoneOutlined style={{ marginRight: "10px", color: colors.primary }} /> 
          Contact Me
        </Title>

        <Card
          className="contact-info-card"
          style={{
            background: colors.contactInfoBackground,
            borderRadius: "8px",
            boxShadow: isDarkMode 
              ? '0 4px 12px rgba(0,0,0,0.2)' 
              : '0 4px 12px rgba(0,0,0,0.05)',
            color: colors.text.primary,
          }}
        >
          <Paragraph
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              lineHeight: "1.8",
              color: colors.text.secondary,
            }}
          >
            Feel free to reach out to me for any inquiries or opportunities. I&apos;m
            always open to discussing new projects and collaborations.
          </Paragraph>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: colors.emailBackground,
              padding: "12px 15px",
              borderRadius: "8px",
              border: `1px solid ${colors.primary}26`,
              marginBottom: "20px",
              color: colors.text.primary,
            }}
          >
            <MailOutlined
              style={{
                marginRight: "10px",
                color: colors.primary,
                fontSize: "18px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: colors.text.primary,
                flex: 1,
              }}
            >
              {email}
            </span>
            <Tooltip title="Copy to clipboard">
              <Button
                type="text"
                icon={<CopyOutlined style={{ color: colors.primary }} />}
                onClick={copyToClipboard}
                style={{
                  color: colors.primary,
                  transition: "all 0.3s",
                }}
              />
            </Tooltip>
          </div>

          <Space>
            <Button
              type="primary"
              target="_blank"
              icon={<SendOutlined />}
              href={`https://mail.google.com/mail/u/0/?fs=1&to=${email}&tf=cm`}
              style={{
                marginTop: "10px",
                height: "40px",
                borderRadius: "6px",
                fontWeight: 500,
                boxShadow: `0 4px 12px ${colors.primary}4D`,
                backgroundColor: colors.primary,
              }}
              className="hover-glow-button"
            >
              Send Email
            </Button>
            <Button
              onClick={copyToClipboard}
              icon={<CopyOutlined />}
              style={{
                marginTop: "10px",
                height: "40px",
                borderRadius: "6px",
                fontWeight: 500,
                color: colors.primary,
                borderColor: colors.primary,
              }}
            >
              Copy Email
            </Button>
          </Space>
        </Card>
      </Card>
    </div>
  );
};

export default ContactMe;
