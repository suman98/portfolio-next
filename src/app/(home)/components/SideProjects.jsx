import React, { useContext } from "react";
import { 
  Divider, 
  Space, 
  Card, 
  Button, 
  Row, 
  Col, 
  Typography, 
  Tag,
  theme,
  Image
} from "antd";
import { 
  ProjectOutlined, 
  CalendarOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined
} from "@ant-design/icons";
import { ThemeContext } from "@/context/ThemeContext";

const { Title, Paragraph, Link } = Typography;

const sideProjects = [
  {
    title: "Dharkaa",
    description: "Created a lightweight stock market portal integrated with TradingView, built using Laravel, React, and Material UI.",
    image: "/images/side-tasks/dharkaa.png",
    githubLink: "#",
    websiteLink: "https://dharkaa.com/",
    visitWebsite: "https://dharkaa.com/",
    tags: ["React", "Laravel", "Python", "PostGres", "Socket.io"],
    status: "Completed",
    year: "2024"
  },
  {
    title: "best paani", 
    description: "Created a web application for organizations to post and share their blogs, along with their company details and more.",
    image: "/images/side-tasks/best-paani.png",
    githubLink: "#",
    websiteLink: "https://www.bestpaaninepal.com",
    visitWebsite: "https://www.bestpaaninepal.com",
    tags: ["Laravel", "MySql"],
    status: "Completed",
    year: "2025"
  },
];

const SideProjects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { token } = theme.useToken();

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "processing";
      case "Beta":
        return "warning";
      case "Planning":
        return "default";
      default:
        return "default";
    }
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#001529" : "#f5f5f5", // Dark navy blue for dark mode, light gray for light mode
        padding: "24px",
      }}
    >
      <Divider orientation="center" style={{ marginBottom: "32px" }}>
        <Space align="center">
          <ProjectOutlined 
            style={{ 
              fontSize: "28px",
              color: token.colorPrimary
            }} 
          />
          <Title 
            level={2} 
            style={{ 
              margin: 0,
              background: `linear-gradient(45deg, ${token.colorPrimary}, ${token.colorPrimaryActive})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Side Projects
          </Title>
        </Space>
      </Divider>

      <Row gutter={[24, 24]} justify="center">
        {sideProjects.map((project, index) => (
          <Col 
            key={project.title} 
            xs={24} 
            sm={24} 
            md={12} 
            lg={12} 
            xl={12}
          >
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: "12px",
                backgroundColor: isDarkMode ? "#1f1f1f" : "#ffffff", // Dark gray for dark mode, white for light mode
                boxShadow: isDarkMode 
                  ? "0 4px 12px rgba(0, 0, 0, 0.5)" 
                  : "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: `1px solid ${isDarkMode ? "#434343" : "#d9d9d9"}`,
                transition: "all 0.3s ease",
                overflow: "hidden"
              }}
              bodyStyle={{ 
                padding: "0",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: isDarkMode ? "#1f1f1f" : "#ffffff"
              }}
              cover={
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    alt={project.title}
                    src={project.image}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    preview={{
                      mask: (
                        <div style={{ 
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          color: "white",
                          padding: "8px",
                          borderRadius: "4px"
                        }}>
                          Click to preview
                        </div>
                      )
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      zIndex: 1
                    }}
                  >
                    <Tag 
                      color={getStatusColor(project.status)}
                      style={{ 
                        borderRadius: "12px",
                        fontWeight: "500",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                      }}
                    >
                      {project.status}
                    </Tag>
                  </div>
                </div>
              }
            >
              <div style={{ 
                padding: "24px", 
                flex: 1, 
                display: "flex", 
                flexDirection: "column",
                backgroundColor: isDarkMode ? "#1f1f1f" : "#ffffff"
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "16px" }}>
                    <Title 
                      level={4} 
                      style={{ 
                        margin: "0 0 8px 0",
                        color: isDarkMode ? "#ffffff" : "#000000"
                      }}
                    >
                      {project.title}
                    </Title>
                    
                    <Space align="center" style={{ marginBottom: "12px" }}>
                      <CalendarOutlined style={{ color: isDarkMode ? "#8c8c8c" : "#595959" }} />
                      <span style={{ 
                        fontSize: "14px",
                        color: isDarkMode ? "#8c8c8c" : "#595959"
                      }}>
                        {project.year}
                      </span>
                    </Space>
                  </div>

                  <Paragraph 
                    style={{ 
                      color: isDarkMode ? "#bfbfbf" : "#595959",
                      lineHeight: "1.6",
                      marginBottom: "16px"
                    }}
                  >
                    {project.description}
                  </Paragraph>

                  <div style={{ marginBottom: "16px" }}>
                    <Space size={[8, 8]} wrap>
                      {project.tags.map((tag) => (
                        <Tag 
                          key={tag}
                          style={{
                            borderRadius: "16px",
                            padding: "4px 12px",
                            fontSize: "12px",
                            border: "none",
                            backgroundColor: isDarkMode 
                              ? "rgba(24, 144, 255, 0.2)" 
                              : "rgba(24, 144, 255, 0.1)",
                            color: isDarkMode ? "#87d068" : "#1890ff"
                          }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </div>

                  {/* Visit Website Link */}
                  <div style={{ marginBottom: "20px" }}>
                    <Link
                      href={project.visitWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: token.colorPrimary,
                        fontSize: "14px",
                        fontWeight: "500",
                        textDecoration: "none",
                        padding: "6px 12px",
                        backgroundColor: isDarkMode 
                          ? "rgba(24, 144, 255, 0.15)" 
                          : "rgba(24, 144, 255, 0.05)",
                        borderRadius: "8px",
                        border: `1px solid ${isDarkMode 
                          ? "rgba(24, 144, 255, 0.4)" 
                          : "rgba(24, 144, 255, 0.2)"}`,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDarkMode 
                          ? "rgba(24, 144, 255, 0.25)" 
                          : "rgba(24, 144, 255, 0.1)";
                        e.currentTarget.style.borderColor = isDarkMode 
                          ? "rgba(24, 144, 255, 0.6)" 
                          : "rgba(24, 144, 255, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isDarkMode 
                          ? "rgba(24, 144, 255, 0.15)" 
                          : "rgba(24, 144, 255, 0.05)";
                        e.currentTarget.style.borderColor = isDarkMode 
                          ? "rgba(24, 144, 255, 0.4)" 
                          : "rgba(24, 144, 255, 0.2)";
                      }}
                    >
                      <LinkOutlined />
                      Visit Website
                    </Link>
                  </div>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <Space size="middle" style={{ width: "100%" }}>
                    <Button
                      type="primary"
                      icon={<GlobalOutlined />}
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        borderRadius: "8px",
                        fontWeight: "500",
                        flex: 1,
                        backgroundColor: token.colorPrimary,
                        borderColor: token.colorPrimary,
                        color: "#ffffff"
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      icon={<GithubOutlined />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        borderRadius: "8px",
                        fontWeight: "500",
                        flex: 1,
                        backgroundColor: isDarkMode ? "#2f2f2f" : "#ffffff",
                        borderColor: isDarkMode ? "#595959" : "#d9d9d9",
                        color: isDarkMode ? "#ffffff" : "#000000"
                      }}
                    >
                      Source Code
                    </Button>
                  </Space>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SideProjects;
