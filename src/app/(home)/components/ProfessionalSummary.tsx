import React, { useContext } from "react";
import { Card, Typography, List, Tag, Row, Col, Divider, Space } from "antd";
import {
  CodeOutlined,
  TeamOutlined,
  ApiOutlined,
  MobileOutlined,
  RobotOutlined,
  AppstoreOutlined,
  ExperimentOutlined
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";
import commonJson from "@/@core/data/common.json";

const { Title, Paragraph } = Typography;

interface Skill {
  icon: React.ReactNode;
  text: string;
}

const ExperienceSummary: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Define theme-based color palette
  const colors = {
    primary: isDarkMode ? "#177ddc" : "#1890ff",
    secondary: isDarkMode ? "#49aa19" : "#52c41a",
    accent: isDarkMode ? "#9254de" : "#722ed1",
    background: isDarkMode
      ? "linear-gradient(to bottom, #1f1f1f, #141414)"
      : "linear-gradient(to bottom, #ffffff, #f9fafb)",
    text: isDarkMode ? "#ffffff" : "#000000",
    border: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.06)",
    cardShadow: isDarkMode
      ? "0 4px 12px rgba(0,0,0,0.5)"
      : "0 4px 12px rgba(0,0,0,0.08)",
  };

  const skills: Skill[] = [
    {
      icon: (
        <CodeOutlined style={{ fontSize: "18px", color: colors.primary }} />
      ),
      text: "PHP, Laravel, JavaScript, React/React Native, Vue.js, Python, Django",
    },
    {
      icon: <MobileOutlined style={{ fontSize: "18px", color: "#fa8c16" }} />,
      text: "Hybrid Apps (Android & iOS), Ionic, React Native",
    },
    {
      icon: <ApiOutlined style={{ fontSize: "18px", color: colors.accent }} />,
      text: "SOAP, REST API, GraphQL",
    },
    {
      icon: (
        <TeamOutlined style={{ fontSize: "18px", color: colors.secondary }} />
      ),
      text: "Git, GitHub, Clickup, Zendhub",
    },
    {
      icon: <RobotOutlined style={{ fontSize: "18px", color: "#eb2f96" }} />,
      text: "AI Integration, OpenRouter, OpenAI",
    },
    {
      icon: <AppstoreOutlined style={{ fontSize: "18px", color: "#13c2c2" }} />,
      text: "CRM, ERP, Billing Systems",
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: "18px", color: "#13c2c2" }} />,
      text: "Software Testing (Automation) - Cypress, Laravel Pest",
    },
  ];

  const experiences: string[] = commonJson.experience;
  const technologies: string[] = commonJson.technologies;

  return (
    <div
      className="p-4 pb-0 pt-0"
      style={{
        backgroundColor: isDarkMode ? "#141414" : "transparent",
        color: colors.text,
      }}
    >
      <Divider orientation="center">
        <Space>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: colors.primary,
            }}
          >
            Professional Experience Summary
          </span>
        </Space>
      </Divider>
      <Card
        className="hover-lift"
        style={{
          boxShadow: colors.cardShadow,
          borderRadius: "12px",
          background: colors.background,
          border: `1px solid ${colors.border}`,
          color: colors.text,
        }}
      >
        <Row gutter={[24, 24]}>
          <Col span={24} md={12}>
            <Title
              level={4}
              style={{
                borderBottom: `2px solid ${colors.primary}`,
                paddingBottom: "8px",
                color: colors.primary,
              }}
            >
              Key Skills
            </Title>
            <List
              itemLayout="horizontal"
              dataSource={skills}
              renderItem={(item: Skill) => (
                <List.Item
                  style={{
                    padding: "12px 0",
                    borderBottom: `1px solid ${colors.border}`,
                    color: colors.text,
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isDarkMode
                            ? "rgba(23,125,220,0.2)"
                            : "rgba(24,144,255,0.1)",
                          borderRadius: "50%",
                        }}
                      >
                        {item.icon}
                      </div>
                    }
                    title={
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: colors.text,
                        }}
                      >
                        {item.text}
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>

          <Col span={24} md={12}>
            <Title
              level={4}
              style={{
                borderBottom: `2px solid ${colors.secondary}`,
                paddingBottom: "8px",
                color: colors.secondary,
              }}
            >
              Highlights
            </Title>
            <List
              dataSource={experiences}
              renderItem={(item: string) => (
                <List.Item
                  style={{
                    padding: "12px 0",
                    borderBottom: `1px solid ${colors.border}`,
                    color: colors.text,
                  }}
                >
                  <Paragraph
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: colors.text,
                    }}
                  >
                    {item}
                  </Paragraph>
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <Title
          level={4}
          style={{
            marginTop: 28,
            borderBottom: `2px solid ${colors.accent}`,
            paddingBottom: "8px",
            color: colors.accent,
          }}
        >
          Technologies
        </Title>
        <div style={{ marginTop: 16 }}>
          {technologies.map((tech: string) => (
            <Tag
              color={isDarkMode ? "blue" : "blue"}
              key={tech}
              style={{
                margin: "0 8px 8px 0",
                padding: "4px 12px",
                fontSize: "14px",
                borderRadius: "16px",
                boxShadow: isDarkMode
                  ? "0 2px 6px rgba(23,125,220,0.3)"
                  : "0 2px 6px rgba(24,144,255,0.2)",
                background: isDarkMode
                  ? "rgba(23,125,220,0.2)"
                  : "rgba(24,144,255,0.1)",
                color: isDarkMode ? "#ffffff" : "#1890ff",
              }}
            >
              {tech}
            </Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ExperienceSummary;
