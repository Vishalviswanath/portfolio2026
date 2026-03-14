import { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const projects = [

  {
    id: "1",

    title: "AI-Based Dynamic Dashboard",

    client: "Ministry of Defence",

    live: "https://gsm.garudalytics.com",

    github: "#",

    stack: [
      "React.js",
      "PrimeReact",
      "CanvasJS",
      "Chart.js",
      "GIS APIs",
      "Django APIs"
    ],

    desc:
      "AI-powered business intelligence dashboard designed for real-time analysis of complex multi-source datasets including geospatial, audio, and intelligence inputs.",

    overview:
      "This system was built to visualize complex intelligence datasets and provide decision-making insights using interactive dashboards and GIS-based visualization. The platform processes multiple types of data including spatial data, audio inputs and intelligence reports to provide real-time situational awareness.",

    features: [
      "Real-time multi-source data visualization",
      "GIS-based spatial mapping and layered intelligence views",
      "Interactive BI dashboards and charts",
      "AI-based analytics integration",
      "High performance rendering for large datasets",
      "Modular dashboard widgets"
    ],

    contributions: [
      "Migrated legacy JavaScript frontend to scalable React architecture",
      "Reduced initial data loading time by over 99%",
      "Built interactive charts using PrimeReact, CanvasJS and Chart.js",
      "Integrated AI analytics modules for intelligent insights",
      "Implemented GIS features for map visualization and spatial analysis",
      "Collaborated with backend teams to integrate Django APIs"
    ],

    architecture: [
      "Component-based React architecture",
      "API-driven data integration",
      "GIS layered map rendering",
      "Optimized state management for large datasets"
    ],

    deployment:
      "Deployed in secure internal infrastructure with optimized data pipelines and high-performance backend services."
  },



  {
    id: "2",

    title: "Zemran & Spatial Trade (E-Commerce)",

    client: "Retail & Enterprise Commerce",

    live: "https://www.vynxgroup.com/",

    github: "#",

    stack: [
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Nginx",
      "PM2"
    ],

    desc:
      "Full-featured scalable e-commerce platforms with secure payments, product management, and admin dashboards.",

    overview:
      "Two enterprise-grade e-commerce platforms were developed for different business domains including fashion retail and specialized electronic products. The systems provide secure payments, optimized backend APIs, scalable database architecture and intuitive admin management panels.",

    features: [
      "Full product catalog management",
      "Admin dashboard for orders and customers",
      "Secure payment gateway integration",
      "Role-based admin authentication",
      "Real-time order tracking",
      "Email notifications for transactions"
    ],

    contributions: [
      "Developed scalable backend APIs using Node.js and Express",
      "Designed PostgreSQL schemas optimized for high performance queries",
      "Implemented JWT authentication and role-based authorization",
      "Built responsive frontend using React and Material UI",
      "Integrated payment gateways and transactional emails",
      "Deployed applications using Nginx and PM2"
    ],

    architecture: [
      "React frontend with modular components",
      "REST API backend using Express",
      "PostgreSQL relational database",
      "Nginx reverse proxy for production"
    ],

    deployment:
      "Hosted on virtual machines with Nginx and PM2 for high availability and production performance."
  },



  {
    id: "3",

    title: "VG Connect – Real-Time Chat",

    live: "#",

    github: "#",

    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Firebase",
      "Twilio"
    ],

    desc:
      "Real-time secure messaging platform supporting direct and group communication with scalable architecture.",

    overview:
      "A scalable real-time messaging system supporting one-to-one and group communication. The application was designed with an event-driven architecture enabling low-latency messaging and high concurrency.",

    features: [
      "One-to-one messaging",
      "Group chat functionality",
      "Real-time message broadcasting",
      "Message history persistence",
      "Secure JWT authentication",
      "Cross-platform support with mobile app integration"
    ],

    contributions: [
      "Designed backend architecture using Socket.IO",
      "Implemented real-time event driven messaging",
      "Built secure authentication using JWT",
      "Created message persistence using MongoDB",
      "Developed reconnection logic and error handling",
      "Integrated with Flutter mobile application"
    ],

    architecture: [
      "Event-driven messaging architecture",
      "WebSocket communication via Socket.IO",
      "MongoDB document storage for messages",
      "Node.js scalable backend services"
    ],

    deployment:
      "Hosted on OVH infrastructure using PM2 and Nginx to ensure uptime and stable real-time connections."
  },



  {
    id: "4",

    title: "Document Management System (DMS)",

    live: "https://dms.garudalytics.com",

    github: "#",

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT"
    ],

    desc:
      "Enterprise document management system for secure document storage, access control, and workflow management.",

    overview:
      "An internal enterprise system designed to manage organizational documents securely. The system provides role-based access, document categorization, structured storage and controlled sharing across teams.",

    features: [
      "Secure document upload and storage",
      "Role-based access permissions",
      "Document categorization and indexing",
      "Search and filtering capabilities",
      "Audit tracking for document activity",
      "Workflow-based document management"
    ],

    contributions: [
      "Built responsive React frontend",
      "Developed REST APIs using Node.js and Express",
      "Designed relational schema for document storage",
      "Implemented authentication using JWT",
      "Optimized document search queries"
    ],

    architecture: [
      "React frontend",
      "Node.js backend APIs",
      "PostgreSQL document metadata storage",
      "Secure authentication layer"
    ],

    deployment:
      "Deployed on production infrastructure using Nginx and process management via PM2."
  },



  {
    id: "5",

    title: "Tenant Management System (TMS)",

    live: "https://gsm.garudalytics.com/tms/",

    github: "#",

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],

    desc:
      "Tenant and property management platform for tracking tenants, rental records, payments and property data.",

    overview:
      "A management platform designed to help property administrators maintain tenant information, rental contracts, payment tracking and property details in a centralized dashboard.",

    features: [
      "Tenant profile management",
      "Property listing and management",
      "Rental payment tracking",
      "Lease contract management",
      "Administrative dashboard"
    ],

    contributions: [
      "Developed full-stack architecture using MERN stack",
      "Implemented tenant data management features",
      "Designed scalable MongoDB schemas",
      "Built responsive admin dashboard"
    ],

    architecture: [
      "React frontend",
      "Node.js API layer",
      "MongoDB document database"
    ],

    deployment:
      "Hosted on Garudalytics infrastructure with secure API endpoints and role-based access control."
  }

]
export default function Projects() {
  const ref = useRef(null);

  useReveal(ref);



  return (
    <section id='projects' ref={ref} className='py-28 px-6 max-w-6xl mx-auto'>
      {/* HEADER */}

      <div className='mb-16'>
        <p
          className='text-sm tracking-widest mb-3'
          style={{ color: 'var(--color3)' }}
        >
          PROJECTS
        </p>

        <h2 className='text-4xl font-bold'>Featured Work</h2>

        <p className='text-gray-400 mt-4 max-w-xl'>
          Some of the key projects I have developed including enterprise
          dashboards, e-commerce platforms and real-time communication systems.
        </p>
      </div>

      {/* PROJECT GRID */}

      <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, id,desc, stack, github, live }) {
  return (
    <div className='glass p-8 rounded-xl border border-white/10 hover-gradient flex flex-col justify-between'>
      {/* TITLE + ICONS */}

      <div className='flex justify-between items-start mb-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>

        {/* <div className='flex gap-3'>
          <a
            href={github}
            className='text-gray-400 hover:text-white transition'
          >
            <Github size={18} />
          </a>

          <a href={live} className='text-gray-400 hover:text-white transition'>
            <ExternalLink size={18} />
          </a>
        </div> */}
      </div>

      {/* DESCRIPTION */}

      <p className='text-gray-400 text-sm mb-6'>{desc}</p>

      {/* STACK */}

      <div className='flex flex-wrap gap-2 mb-6'>
        {stack.map((tech, i) => (
          <span
            key={i}
            className='text-xs border border-white/10 px-3 py-1 rounded-full text-gray-300'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* VIEW BUTTON */}
      <Link
        to={`/project/${id}`}
        className="flex items-center gap-2 text-sm font-medium transition"
        style={{ color: "var(--color3)" }}
      >

        View Details →

      </Link>

    </div>
  );
}
