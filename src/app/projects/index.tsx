"use client";

import "./projects.css";

const Projects = () => {
    return (
        <main className="projects-container">
            <div className="projects-header">
                <h2 className="projects-title">My Projects</h2>
                <p className="projects-subtitle">A showcase of my recent work and contributions</p>
            </div>

            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-image">🚀</div>
                    </div>
                    <div className="project-info">
                        <h3>Project Coming Soon</h3>
                        <p>Exciting projects will be showcased here soon!</p>
                        <div className="project-tech">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-image">📱</div>
                    </div>
                    <div className="project-info">
                        <h3>Mobile App Project</h3>
                        <p>Innovative mobile solutions coming soon!</p>
                        <div className="project-tech">
                            <span className="tech-tag">React Native</span>
                            <span className="tech-tag">Flutter</span>
                            <span className="tech-tag">Firebase</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-image">🎯</div>
                    </div>
                    <div className="project-info">
                        <h3>Full Stack Project</h3>
                        <p>Comprehensive web applications in development!</p>
                        <div className="project-tech">
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;