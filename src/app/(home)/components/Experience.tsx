import React, { useContext } from "react";
import Image from 'next/image'
import {
  Timeline,
  Card,
  Typography,
  List,
  Tag,
  Space,
  Divider,
  Row,
  Col,
  Carousel,
  Modal,
  Button,
  Avatar,
} from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  LeftOutlined,
  RightOutlined,
  LinkOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";
import myExperience from "@/@core/data/myExperience.json";

const { Title, Text, Paragraph } = Typography;

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  images?: string[];
  link?: string;
  companyLogo?: string;
}

type ExperienceItemProps = Experience;

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  duration,
  location,
  responsibilities,
  technologies,
  images = [],
  link,
  companyLogo
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = React.useRef<any>(null);

  // Dynamic color palette based on theme
  const colors = {
    primary: isDarkMode ? '#177ddc' : '#1890ff',
    secondary: isDarkMode ? '#49aa19' : '#52c41a',
    accent: isDarkMode ? '#9254de' : '#722ed1',
    background: isDarkMode 
      ? 'linear-gradient(to bottom, #1f1f1f, #141414)' 
      : 'linear-gradient(to bottom, #ffffff, #f9fafb)',
    text: isDarkMode ? '#ffffff' : '#000000',
    border: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
    cardShadow: isDarkMode 
      ? '0 4px 12px rgba(0,0,0,0.5)' 
      : '0 4px 12px rgba(0,0,0,0.08)',
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <Card 
      className="mb-4 hover-lift" 
      style={{ 
        boxShadow: colors.cardShadow, 
        borderRadius: "12px",
        background: colors.background,
        border: `1px solid ${colors.border}`,
        color: colors.text
      }}
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} md={images.length > 0 ? 16 : 24}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
            {companyLogo ? (
              <Avatar 
                size={48} 
                src={companyLogo}
                style={{ 
                  marginRight: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${colors.primary}`
                }}
              />
            ) : (
              <Avatar 
                size={48} 
                style={{ 
                  backgroundColor: colors.primary, 
                  marginRight: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {company.charAt(0)}
              </Avatar>
            )}
            <div>
              <Title 
                level={4} 
                style={{ 
                  margin: 0, 
                  color: colors.primary 
                }}
              >
                {company}
              </Title>
              <Title 
                level={5} 
                style={{ 
                  margin: 0, 
                  fontWeight: 500, 
                  color: colors.text 
                }}
              >
                {position}
              </Title>
            </div>
          </div>
          
          <Space 
            className="mb-3" 
            style={{ color: isDarkMode ? 'rgba(255,255,255,0.7)' : '#666' }}
          >
            <CalendarOutlined style={{ color: colors.secondary }} />
            <Text 
              strong 
              style={{ color: colors.text }}
            >
              {duration}
            </Text>
            <EnvironmentOutlined style={{ color: colors.accent }} />
            <Text 
              strong 
              style={{ color: colors.text }}
            >
              {location}
            </Text>
            {link && (
              <>
                <LinkOutlined 
                  style={{ 
                    marginRight: 4, 
                    color: colors.primary 
                  }} 
                />
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: colors.primary, 
                    textDecoration: 'none', 
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                  className="hover-effect"
                >
                  Visit Website
                </a>
              </>
            )}
          </Space>
          
          <Title 
            level={5} 
            style={{ 
              borderBottom: `2px solid ${colors.primary}`, 
              paddingBottom: "8px",
              color: colors.primary,
              marginTop: "16px" 
            }}
          >
            Responsibilities
          </Title>
          
          <List
            dataSource={responsibilities}
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
                      color: colors.primary, 
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
          
          <Title 
            level={5} 
            style={{ 
              borderBottom: `2px solid ${colors.secondary}`, 
              paddingBottom: "8px",
              color: colors.secondary,
              marginTop: "16px" 
            }}
          >
            Technologies
          </Title>
          
          <div className="mt-3">
            {technologies.map((tech: string, index: number) => (
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
            ))}
          </div>
        </Col>
        {images.length > 0 && (
          <Col xs={24} md={8}>
            <div 
              style={{ 
                position: "relative", 
                borderRadius: "12px", 
                overflow: "hidden", 
                boxShadow: colors.cardShadow 
              }}
            >
              <Carousel 
                autoplay 
                dots={true} 
                ref={carouselRef}
                effect="fade"
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`${company} project ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "transform 0.3s ease",
                      }}
                      className="hover-zoom"
                      onClick={() => {
                        Modal.info({
                          icon: null,
                          maskClosable: true,
                          okText: "Close",
                          width: "80%",
                          content: (
                            <div style={{ textAlign: "center" }}>
                              <Image
                                src={image}
                                alt={`${company} project ${index + 1}`}
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "80vh",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          ),
                        });
                      }}
                    />
                  </div>
                ))}
              </Carousel>
              {images.length > 1 && (
                <>
                  <Button
                    icon={<LeftOutlined />}
                    onClick={prevSlide}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "5px",
                      transform: "translateY(-50%)",
                      zIndex: 2,
                      opacity: 0.8,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                    shape="circle"
                    type="primary"
                  />
                  <Button
                    icon={<RightOutlined />}
                    onClick={nextSlide}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "5px",
                      transform: "translateY(-50%)",
                      zIndex: 2,
                      opacity: 0.8,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                    shape="circle"
                    type="primary"
                  />
                </>
              )}
            </div>
          </Col>
        )}
      </Row>
    </Card>
  );
};

const ProfessionalExperience: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const experiences: Experience[] = myExperience;

  // Dynamic color for theme
  const colors = {
    primary: isDarkMode ? '#177ddc' : '#1890ff',
    text: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <div 
      className="p-4 pb-0 pt-0"
      style={{ 
        backgroundColor: isDarkMode ? '#141414' : 'transparent',
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
            Professional Experience
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
        items={experiences.map((exp: Experience, index: number) => ({
          color: colors.primary,
          dot: index === 0 ? (
            <CalendarOutlined
              style={{
                fontSize: '16px',
                color: colors.primary
              }}
            />
          ) : undefined,
          children: <ExperienceItem {...exp} />
        }))}
      />
    </div>
  );
};

export default ProfessionalExperience;