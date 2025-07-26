import React, { useContext } from "react";
import {
  Card,
  Typography,
  Divider,
  Tag,
  Timeline,
  Space,
  Row,
  Col,
  List,
  Avatar,
} from "antd";
import {
  ProjectOutlined,
  BookOutlined,
  BranchesOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";
import commonJson from "@/@core/data/common.json";

const { Title, Text, Paragraph } = Typography;

interface Project {
  name: string;
  description: string;
  scope: string;
  tools: string[];
  responsibilities?: string[];
  duration?: string;
  location?: string;
  position?: string;
}

interface Education {
  degree: string;
  institution: string;
  score: string;
  duration?: string;
  location?: string;
}

const ProjectAndEducation: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Dynamic color palette based on theme
  const colors = {
    primary: isDarkMode ? '#177ddc' : '#1890ff',
    secondary: isDarkMode ? '#49aa19' : '#52c41a',
    accent: isDarkMode ? '#9254de' : '#722ed1',
    background: isDarkMode ? '#141414' : 'transparent',
    text: isDarkMode ? '#ffffff' : '#000000',
    border: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
  };

  const project: Project = commonJson.myProjects;
  const educations: Education[] = commonJson.myEducation;

  const renderProjectOrEducationItem = (
    item: Project | Education,
    type: 'project' | 'education',
    index: number
  ) => {
    const isProject = type === 'project';
    const itemColors = {
      primary: isProject ? colors.primary : colors.accent,
      secondary: isProject ? colors.secondary : colors.accent,
    };

    return (
      <Card 
        className="mb-4 hover-lift" 
        style={{ 
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          borderRadius: "12px",
          background: isDarkMode 
            ? 'linear-gradient(to bottom, #1f1f1f, #141414)' 
            : 'linear-gradient(to bottom, #ffffff, #f9fafb)',
          border: `1px solid ${colors.border}`,
          color: colors.text
        }}
      >
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
              <Avatar 
                size={48} 
                style={{ 
                  backgroundColor: itemColors.primary, 
                  marginRight: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {isProject ? <ProjectOutlined /> : <BookOutlined />}
              </Avatar>
              <div>
                <Title 
                  level={4} 
                  style={{ 
                    margin: 0, 
                    color: itemColors.primary 
                  }}
                >
                  {isProject ? project.name : (item as Education).institution}
                </Title>
                <Title 
                  level={5} 
                  style={{ 
                    margin: 0, 
                    fontWeight: 500, 
                    color: colors.text 
                  }}
                >
                  {isProject ? project.position : (item as Education).degree}
                </Title>
              </div>
            </div>
            
            {((item as Project).duration || (item as Education).duration) && (
              <Space 
                className="mb-3" 
                style={{ color: isDarkMode ? 'rgba(255,255,255,0.7)' : '#666' }}
              >
                <EnvironmentOutlined style={{ color: itemColors.secondary }} />
                <Text 
                  strong 
                  style={{ color: colors.text }}
                >
                  {(item as Project).duration || (item as Education).duration}
                </Text>
                {(item as Project).location && (
                  <>
                    <EnvironmentOutlined style={{ color: itemColors.primary }} />
                    <Text 
                      strong 
                      style={{ color: colors.text }}
                    >
                      {(item as Project).location}
                    </Text>
                  </>
                )}
              </Space>
            )}
            
            <Title 
              level={5} 
              style={{ 
                borderBottom: `2px solid ${itemColors.primary}`, 
                paddingBottom: "8px",
                color: itemColors.primary,
                marginTop: "16px" 
              }}
            >
              {isProject ? 'Project Details' : 'Education Details'}
            </Title>
            
            <Paragraph 
              style={{ 
                fontSize: "15px", 
                lineHeight: "1.6", 
                marginBottom: 16,
                color: colors.text 
              }}
            >
              {isProject ? project.description : (item as Education).degree}
            </Paragraph>

            {isProject && project.responsibilities && (
              <>
                <Title 
                  level={5} 
                  style={{ 
                    borderBottom: `2px solid ${itemColors.secondary}`, 
                    paddingBottom: "8px",
                    color: itemColors.secondary,
                    marginTop: "16px" 
                  }}
                >
                  Project Scope
                </Title>
                <List
                  dataSource={project.responsibilities}
                  renderItem={(item: string) => (
                    <List.Item 
                      style={{ 
                        padding: "8px 0",
                        borderBottom: `1px solid ${colors.border}`,
                        color: colors.text
                      }}
                    >
                      <Space align="start">
                        <BranchesOutlined 
                          style={{ 
                            color: itemColors.primary, 
                            marginTop: "4px" 
                          }} 
                        />
                        <Paragraph 
                          style={{ 
                            margin: 0, 
                            color: colors.text 
                          }}
                        >
                          {item}
                        </Paragraph>
                      </Space>
                    </List.Item>
                  )}
                />
              </>
            )}
            
            <Title 
              level={5} 
              style={{ 
                borderBottom: `2px solid ${itemColors.secondary}`, 
                paddingBottom: "8px",
                color: itemColors.secondary,
                marginTop: "16px" 
              }}
            >
              {isProject ? 'Technologies' : 'Score'}
            </Title>
            
            <div className="mt-3">
              {isProject 
                ? project.tools.map((tech: string, index: number) => (
                    <Tag 
                      key={index} 
                      color={isDarkMode ? "blue" : "blue"}
                      className="mr-2 mb-2"
                      style={{ 
                        padding: "4px 12px",
                        fontSize: "14px",
                        borderRadius: "16px",
                        boxShadow: isDarkMode 
                          ? '0 2px 6px rgba(23,125,220,0.3)' 
                          : '0 2px 6px rgba(24,144,255,0.2)',
                        background: isDarkMode 
                          ? 'rgba(23,125,220,0.2)' 
                          : 'rgba(24,144,255,0.1)',
                        color: isDarkMode ? '#ffffff' : '#1890ff'
                      }}
                    >
                      {tech}
                    </Tag>
                  ))
                : (
                    <Tag 
                      color={isDarkMode ? "purple" : "purple"}
                      style={{ 
                        padding: "4px 12px",
                        fontSize: "14px",
                        borderRadius: "16px",
                        boxShadow: isDarkMode 
                          ? '0 2px 6px rgba(156,39,176,0.3)' 
                          : '0 2px 6px rgba(156,39,176,0.2)',
                        background: isDarkMode 
                          ? 'rgba(156,39,176,0.2)' 
                          : 'rgba(156,39,176,0.1)',
                        color: isDarkMode ? '#ffffff' : '#9c27b0'
                      }}
                    >
                      {(item as Education).score}
                    </Tag>
                  )
              }
            </div>
          </Col>
        </Row>
      </Card>
    );
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
            Education & Projects
          </span>
        </Space>
      </Divider>
      
      <Timeline
        mode="left"
        style={{
          marginTop: "24px",
          marginBottom: "24px",
          color: colors.text
        }}
        items={[
          ...educations.map((edu: Education, index: number) => ({
            color: colors.accent,
            children: renderProjectOrEducationItem(edu, 'education', index),
          })),
          {
            color: colors.primary,
            dot: <ProjectOutlined style={{ fontSize: '16px', color: colors.primary }} />,
            children: renderProjectOrEducationItem(project, 'project', educations.length),
          }
        ]}
      />
    </div>
  );
};

export default ProjectAndEducation;