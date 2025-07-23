import React, { useContext } from "react";
import { 
  Card, 
  Row, 
  Col, 
  Tag, 
  Typography, 
  Divider, 
  Space, 
  Avatar 
} from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  ToolOutlined,
  AppstoreOutlined,
  CloudOutlined,
  MobileOutlined,
  ApiOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";
import mySkillJson from "@/@core/data/mySkill.json";

const { Title, Paragraph } = Typography;

interface Skill {
  name: string;
  items: string[];
  color: string;
}

const SkillsShowcase: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const skills: Skill[] = mySkillJson;

  // Dynamic color palette based on theme
  const colors = {
    primary: isDarkMode ? '#177ddc' : '#1890ff',
    background: isDarkMode ? '#141414' : 'transparent',
    text: isDarkMode ? '#ffffff' : '#000000',
    cardBackground: isDarkMode 
      ? 'linear-gradient(to bottom, #1f1f1f, #141414)' 
      : 'linear-gradient(to bottom, #ffffff, #f9fafb)',
    border: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
    shadow: isDarkMode 
      ? '0 4px 12px rgba(0,0,0,0.5)' 
      : '0 4px 12px rgba(0,0,0,0.08)',
    tagBackground: isDarkMode 
      ? 'rgba(255,255,255,0.1)' 
      : '#f5f5f5',
    tagColor: isDarkMode ? '#ffffff' : '#333',
  };

  const getIconForSkill = (index: number, name: string) => {
    if (name.includes("Database")) return <DatabaseOutlined />;
    if (name.includes("DevOps") || name.includes("Tools")) return <ToolOutlined />;
    if (name.includes("Cloud")) return <CloudOutlined />;
    if (name.includes("Mobile")) return <MobileOutlined />;
    if (name.includes("API") || name.includes("Backend")) return <ApiOutlined />;
    if (name.includes("AI") || name.includes("Machine Learning")) return <RobotOutlined />;
    if (name.includes("Framework")) return <AppstoreOutlined />;
    return <CodeOutlined />;
  };

  return (
    <div 
      className="p-4 pb-0 pt-0"
      style={{ 
        backgroundColor: colors.background,
        color: colors.text
      }}
    >
      <Divider orientation="center">
        <Space>
          <span 
            style={{ 
              fontSize: "24px", 
              fontWeight: 600, 
              color: colors.primary 
            }}
          >
            Skills Showcase
          </span>
        </Space>
      </Divider>
      <Card 
        className="hover-lift" 
        style={{ 
          boxShadow: colors.shadow, 
          borderRadius: "12px",
          background: colors.cardBackground,
          border: `1px solid ${colors.border}`,
          color: colors.text
        }}
      >
        <Paragraph 
          style={{ 
            fontSize: "16px", 
            textAlign: "center", 
            marginBottom: "24px",
            color: isDarkMode ? 'rgba(255,255,255,0.7)' : '#555'
          }}
        >
          A comprehensive overview of my technical skills and proficiencies.
        </Paragraph>
        
        <Row gutter={[24, 24]}>
          {skills.map((skillGroup, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card 
                className="hover-lift" 
                style={{ 
                  height: "100%",
                  borderRadius: "8px",
                  boxShadow: colors.shadow,
                  background: colors.cardBackground,
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                }}
              >
                <div 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "16px" 
                  }}
                >
                  <Avatar 
                    size={40} 
                    style={{ 
                      backgroundColor: skillGroup.color || colors.primary, 
                      marginRight: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {getIconForSkill(index, skillGroup.name)}
                  </Avatar>
                  <Title 
                    level={4} 
                    style={{ 
                      margin: 0, 
                      color: skillGroup.color || colors.primary,
                      fontSize: "18px"
                    }}
                  >
                    {skillGroup.name}
                  </Title>
                </div>
                <div>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Tag 
                      key={skillIndex}
                      style={{ 
                        margin: "0 8px 8px 0",
                        padding: "4px 12px",
                        fontSize: "14px",
                        borderRadius: "16px",
                        boxShadow: isDarkMode 
                          ? '0 2px 8px rgba(0,0,0,0.3)' 
                          : '0 2px 8px rgba(0,0,0,0.06)',
                        color: colors.tagColor,
                        background: colors.tagBackground
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default SkillsShowcase;