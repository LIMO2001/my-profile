import { useState, useEffect } from 'react';

// Custom hook for scroll animations
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
            <img
            src="/limo.jpeg"
            alt="Limo Kiplagat Duke"
            className="w-10 h-10 rounded-xl object-cover border-2 border-emerald-500/50 transition-transform group-hover:scale-110"
          />
          <span className="font-semibold text-zinc-100 hidden sm:block">Lewis Githinji</span>
        </a>

          <span className="font-semibold text-zinc-100 hidden sm:block">Limo Kiplagat Duke</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Limo_Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400 font-medium rounded-lg transition-all flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-zinc-300 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-zinc-300 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-zinc-300 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-emerald-400 transition-colors text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Limo_Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors text-lg font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-emerald-500 text-zinc-900 font-semibold rounded-lg text-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">Available for Remote Projects Worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-zinc-100">Hi, I'm </span>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Limo Kiplagat Duke
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-zinc-400 mb-4 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Full-Stack Developer & AI Solutions Architect
          </p>

          {/* Description */}
          <p className={`text-lg text-zinc-500 max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            With <span className="text-zinc-300 font-semibold">3+ years</span> of experience building solutions,
            I transform complex  challenges into reality, scalable applications.
            <span className="text-emerald-400"> </span> Founder of <span className="text-emerald-400">DKL Empire</span>.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a
              href="https://calendly.com/limo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-900 font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Call
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-semibold rounded-xl transition-all hover:bg-zinc-800/50"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className={`flex flex-wrap gap-8 sm:gap-12 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '500+', label: 'Organizations Served' },
              { value: '50+', label: 'Projects Delivered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-zinc-100">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-zinc-500 tracking-widest">SCROLL</span>
        <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// About Section with International Work Info
const About = () => (
  <section id="about" className="py-24 sm:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image/Visual */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 overflow-hidden">
              {/* Profile Photo */}
              <img
                src="/limo.jpeg"
                alt="Limo Kiplagat Duke - Full-Stack Developer & AI Solutions Architect"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay elements */}
              <div className="absolute top-6 right-6 w-20 h-20 border border-emerald-500/30 rounded-full" />
              <div className="absolute bottom-6 left-6 w-32 h-32 border border-cyan-500/20 rounded-full" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl">
              <div className="text-emerald-400 font-bold text-lg">Since 2022</div>
              <div className="text-zinc-500 text-sm">Building Digital Solutions</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6">
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Powerful Solutions
            </span>
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I am a self motivated and accountable Software Engineer with a passion for delivering my skills to the community with passion in web Development and Design. Android development. Graphic designing. AI and any other software related activities you can reach. Am well dedicated to learn new skills each and every time.
              I'm a seasoned software developer and entrepreneur with a passion for leveraging technology
              to solve real-world business problems. With a Bachelor's degree in  Information Technology
              from Kabarak University, I bridge the gap between technical excellence and business value.
            </p>
            <p>
              As the founder of <span className="text-emerald-400 font-medium">DKL EMPIRE</span>
              <span className="text-emerald-400 font-medium"> </span>, I've had the privilege of working
              with 2 organizations across diverse sectors — from Banking and Insurance to Healthcare and Government —
              delivering solutions that drive efficiency and growth.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              { icon: '🎓', label: 'B.Sc.IT', sub: 'Kabarak University' },
              { icon: '🏢', label: 'Developer', sub: 'DKL EMPIRE' },
              { icon: '🌍', label: 'Remote Work', sub: 'All Timezones (UTC-8 to UTC+12)' },
              { icon: '💬', label: 'Languages', sub: 'English (Fluent), Swahili' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 bg-zinc-800/30 border border-zinc-700/30 rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-zinc-300 font-medium">{item.label}</div>
                  <div className="text-zinc-500 text-sm">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools for Remote Work */}
          <div className="mt-8 p-4 bg-zinc-800/20 border border-zinc-700/30 rounded-xl">
            <p className="text-zinc-500 text-sm mb-3">COLLABORATION TOOLS I USE DAILY</p>
            <div className="flex flex-wrap gap-3">
              {['Slack', 'Zoom', 'GitHub', 'Jira', 'Notion', 'Figma', 'VS Code', 'Linear'].map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-zinc-700/30 text-zinc-300 text-sm rounded-lg">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3'],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'FastAPI', 'Express.js', '.NET', 'PHP'],
    },
    {
      title: 'AI & Data',
      icon: '🤖',
      skills: ['LangChain', 'OpenAI API', 'AI Agents', 'Data Analysis', 'Automation', 'n8n'],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Linux', 'Nginx'],
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
    },
    {
      title: 'Security',
      icon: '🔒',
      skills: ['Cybersecurity', 'IAM', 'Network Security', 'Endpoint Protection', 'SIEM'],
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-zinc-900/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            Technical Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 12+ years of solving complex technical challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 bg-zinc-800/30 border border-zinc-700/30 rounded-2xl hover:border-emerald-500/30 transition-all hover:bg-zinc-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-zinc-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-700/30 text-zinc-300 text-sm rounded-lg border border-zinc-600/30 group-hover:border-emerald-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-center text-zinc-500 text-sm mb-8">CERTIFICATIONS & PARTNERSHIPS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Microsoft Partner', badge: '🏆' },
              { name: 'AWS Certified', badge: '☁️' },
              { name: 'Google Cloud', badge: '🌐' },
              { name: 'Cisco Partner', badge: '🔗' },
            ].map((cert) => (
              <div key={cert.name} className="flex items-center justify-center gap-2 p-4 bg-zinc-800/30 border border-zinc-700/30 rounded-xl">
                <span className="text-2xl">{cert.badge}</span>
                <span className="text-zinc-400 font-medium text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section - Updated with GitHub repos
const Projects = () => {
  const projects = [
    {
      title: 'Yield Prediction',
      description: "AI digital transformation with intelligent IT solutions, AI-powered WEB.",
      tags: ['Python', 'html', 'flask'],
      category: 'Prediction Platform',
      color: 'emerald',
      github: 'https://github.com/LIMO2001',
      live: 'https://dkl.com',
    },
    
    
    
    {
      title: ' Law Advocates',
      description: 'Modern, responsive website for FNM Law Advocates LLP featuring practice area showcases, attorney profiles, and client portal.',
      tags: ['TypeScript', 'React', 'Tailwind', 'Node.js'],
      category: 'Legal Tech',
      color: 'rose',
      github: 'https://github',
      live: 'https:///',
    },
    {
      title: 'L',
      description: 'E-Commerce WEB',
      tags: ['C#', 'React', 'Analytics'],
      category: 'CleanTech',
      color: 'amber',
      github: 'https://github.com',
      live: 'https://',
    },
    {
      title: 'DIACARE',
      description: 'AI prediction.',
      tags: ['python', 'React', 'prediction', 'Maps'],
      category: 'Hospital',
      color: 'emerald',
      github: 'https://github.com/LIMO2001',
      live: 'http://',
    },
  ];

  const colorMap: Record<string, string> = {
    emerald: 'from-emerald-500/20 to-emerald-500/0 border-emerald-500/30 hover:border-emerald-500/50',
    cyan: 'from-cyan-500/20 to-cyan-500/0 border-cyan-500/30 hover:border-cyan-500/50',
    violet: 'from-violet-500/20 to-violet-500/0 border-violet-500/30 hover:border-violet-500/50',
    amber: 'from-amber-500/20 to-amber-500/0 border-amber-500/30 hover:border-amber-500/50',
    rose: 'from-rose-500/20 to-rose-500/0 border-rose-500/30 hover:border-rose-500/50',
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building scalable, impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-full p-6 bg-gradient-to-b ${colorMap[project.color]} border rounded-2xl transition-all duration-300 flex flex-col`}>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-zinc-700/30">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <a
            href="https://github.com/LIMO2001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400 font-medium rounded-xl transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// How I Work Section
const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We start with a free 30-minute call to understand your project requirements, goals, and timeline.',
      icon: '📞',
    },
    {
      number: '02',
      title: 'Proposal & Planning',
      description: 'I provide a detailed proposal with scope, timeline, and pricing. Once approved, we create a project roadmap.',
      icon: '📋',
    },
    {
      number: '03',
      title: 'Agile Development',
      description: 'Development happens in sprints with regular updates. You get access to a staging environment for real-time feedback.',
      icon: '🚀',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'After thorough testing, we launch your project. I provide post-launch support and maintenance as needed.',
      icon: '✅',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            My Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            How I Work
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A transparent, collaborative approach designed for remote teams and international clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 bg-zinc-800/20 border border-zinc-700/30 rounded-2xl hover:border-emerald-500/30 transition-all relative">
                <div className="text-6xl font-bold text-zinc-800 absolute top-4 right-4">{step.number}</div>
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Remote Work Commitment */}
        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">24hr</div>
              <div className="text-zinc-400">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">Weekly</div>
              <div className="text-zinc-400">Progress Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">Async-First</div>
              <div className="text-zinc-400">Communication Style</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Limo delivered system on time and exceeded our expectations. His understanding of business processes combined with technical expertise is remarkable.",
      author: "DKL",
      role: "CEO, DKL Company",
      company: "Nairobi, Kenya",
    },
    {
      quote: "Working with limo was a game-changer for our hospital. The management system he built has improved our efficiency by 40% and patient satisfaction significantly.",
      author: "DKL",
      role: "Director",
      company: "IT FIRM ",
    },
    {
      quote: "LIMO AI automation solutions transformed how we handle customer inquiries. Response times dropped from hours to seconds. Highly recommend his services.",
      author: "DKL",
      role: "Operations Manager",
      company: "Financial Services",
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            Client Feedback
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            What Clients Say
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what some of my clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 bg-zinc-800/20 border border-zinc-700/30 rounded-2xl hover:border-emerald-500/30 transition-all flex flex-col">
                <svg className="w-10 h-10 text-emerald-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-zinc-300 leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-zinc-700/30 pt-4">
                  <div className="font-semibold text-zinc-100">{testimonial.author}</div>
                  <div className="text-zinc-500 text-sm">{testimonial.role}</div>
                  <div className="text-emerald-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web & Mobile Development',
      description: 'Custom applications built with modern frameworks. From MVPs to enterprise solutions.',
      features: ['React/Next.js', 'Mobile Apps', 'API Development', 'Database Design'],
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'AI-powered solutions that automate workflows and enhance business decision-making.',
      features: ['Custom AI Agents', 'Process Automation', 'LLM Integration', 'Data Pipelines'],
    },
    {
      icon: '☁️',
      title: 'Microsoft 365 & Google Workspace',
      description: 'Complete setup, migration, and training for cloud productivity platforms.',
      features: ['M365 Setup & Migration', 'Google Workspace', 'Email Configuration', 'User Training'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & IT Support',
      description: 'Protect your business with comprehensive security solutions and reliable IT support.',
      features: ['Security Audits', 'Network Security', 'Managed IT Services', 'Endpoint Protection'],
    },
    {
      icon: '📧',
      title: 'Email & Communication',
      description: 'Professional email hosting, setup, and collaboration tools for seamless communication.',
      features: ['Business Email Setup', 'Domain Configuration', 'Teams/Meet Integration', 'Email Security'],
    },
    {
      icon: '💡',
      title: 'Digital Transformation',
      description: 'Modernize your business operations with cloud infrastructure and smart solutions.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'System Integration', 'IT Consulting'],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            What I Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Services
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-4">
            Specialized services tailored to help your business leverage technology for growth
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full">
            <span className="text-emerald-400 font-semibold">$75 - $150/hr</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 text-sm">Project-based pricing available</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 bg-zinc-800/20 border border-zinc-700/30 rounded-2xl hover:border-emerald-500/30 transition-all">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-zinc-500 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="py-24 sm:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
        <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
          Get In Touch
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6">
          Let's Build Something
          <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Amazing Together
          </span>
        </h2>
        <p className="text-zinc-400 text-lg mb-10">
          Have a project in mind? Looking for a skilled developer to join your team?
          I'm always open to discussing new opportunities and challenges.
        </p>

        {/* Calendly CTA */}
        <div className="mb-12">
          <a
            href="https://calendly.com/dukelimo2001/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-900 font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Free 30-Min Discovery Call
          </a>
          <p className="text-zinc-500 text-sm mt-3">No commitment required. Let's just talk about your project.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="dukelimo2001@gmail.com"
            className="group px-8 py-4 border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400 font-semibold rounded-xl transition-all hover:bg-zinc-800/50 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            dukelimo2001@gmail.com
          </a>
          <a
            href="https://wa.me/254799406453"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-zinc-700 hover:border-green-500 text-zinc-300 hover:text-green-400 font-semibold rounded-xl transition-all hover:bg-zinc-800/50 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {[
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/limo-duke-272b9b280', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name: 'GitHub', href: 'https://github.com/LIMO2001', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
            { name: 'Twitter', href: 'https://x.com/limoduke', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { name: 'Facebook', href: 'https://www.facebook.com/LIMO DUKE/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            { name: 'Instagram', href: 'https://www.instagram.com/limo duke/', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all group"
              aria-label={social.name}
            >
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/limo.jpeg"
            alt="Limo"
            className="w-8 h-8 rounded-lg object-cover border border-emerald-500/50"
          />
          <span className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} DKLEMPIRE. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <a href="https://dkl.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            DKL EMPIRE
          </a>
          <span>•</span>
          <span>Nairobi, Kenya</span>
          <span>•</span>
          <span>EAT (UTC+3)</span>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />

      {/* Global Styles */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(2rem);
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
