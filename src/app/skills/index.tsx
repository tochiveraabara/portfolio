"use client";

import { useState, useEffect } from "react";
import "./skills.css"

const skillsData = {
    languages: [
        { name: "Python", level: 90, icon: "🐍", description: "Backend development, data analysis, AI/ML" },
        { name: "JavaScript", level: 85, icon: "⚡", description: "Modern ES6+, async programming, DOM manipulation" },
        { name: "TypeScript", level: 80, icon: "📘", description: "Type-safe development, large-scale applications" },
        { name: "Node.js", level: 85, icon: "🟢", description: "Server-side JavaScript, API development" }
    ],
    frameworks: [
        { name: "React.js", level: 88, icon: "⚛️", description: "Component-based UI, hooks, state management" },
        { name: "React Native", level: 75, icon: "📱", description: "Cross-platform mobile app development" },
        { name: "Next.js", level: 82, icon: "▲", description: "Full-stack React framework, SSR, API routes" },
        { name: "Flutter", level: 70, icon: "🦋", description: "Cross-platform mobile development with Dart" }
    ],
    tools: [
        { name: "Git", level: 85, icon: "📝", description: "Version control, collaboration, branching" },
        { name: "Docker", level: 75, icon: "🐳", description: "Containerisation, deployment, microservices" },
        { name: "AWS", level: 70, icon: "☁️", description: "Cloud services, deployment, scaling" },
        { name: "MongoDB", level: 80, icon: "🍃", description: "NoSQL database, document-based storage" }
    ]
};

const About = () => {
    const [activeCategory, setActiveCategory] = useState('languages');
    const [animatedLevels, setAnimatedLevels] = useState<{[key: string]: number}>({});

    useEffect(() => {
        const currentSkills = skillsData[activeCategory as keyof typeof skillsData];
        const newAnimatedLevels: {[key: string]: number} = {};
        
        currentSkills.forEach((skill, index) => {
            setTimeout(() => {
                setAnimatedLevels(prev => ({
                    ...prev,
                    [skill.name]: skill.level
                }));
            }, index * 150);
        });
    }, [activeCategory]);

    const categories = [
        { key: 'languages', label: 'Languages', icon: '💻' },
        { key: 'frameworks', label: 'Frameworks', icon: '🛠️' },
        { key: 'tools', label: 'Tools & Tech', icon: '⚙️' }
    ];

    return (
        <main className="skills-container">
            <div className="skills-header">
                <h2 className="skills-title">Technical Skills</h2>
                <p className="skills-subtitle">Technologies I usually work with...</p>
            </div>

            <div className="category-tabs">
                {categories.map((category) => (
                    <button
                        key={category.key}
                        className={`category-tab ${activeCategory === category.key ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.key)}
                    >
                        <span className="tab-icon">{category.icon}</span>
                        <span className="tab-label">{category.label}</span>
                    </button>
                ))}
            </div>

            <div className="skills-grid">
                {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                    <div 
                        key={skill.name} 
                        className="skill-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="skill-header">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-info">
                                <h4 className="skill-name">{skill.name}</h4>
                                <p className="skill-description">{skill.description}</p>
                            </div>
                        </div>
                        
                        <div className="skill-level">
                            <div className="level-label">
                                <span>Proficiency</span>
                                <span className="level-percentage">{skill.level}%</span>
                            </div>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill"
                                    style={{ 
                                        width: `${animatedLevels[skill.name] || 0}%`,
                                        backgroundColor: getSkillColor(skill.level)
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="skills-footer">
                <p>Always learning and exploring new technologies to stay current with industry trends</p>
            </div>
        </main>
    );
};

const getSkillColor = (level: number) => {
    if (level >= 85) return '#667eea'; 
    if (level >= 75) return '#764ba2';   
    if (level >= 65) return '#8b5cf6'; 
    return '#a78bfa'; 
};

export default About;