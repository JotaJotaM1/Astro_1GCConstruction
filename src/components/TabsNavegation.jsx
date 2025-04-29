import { useState } from "react";
import '../style/components/TabsNavegation.css';
import cocina1 from "../assets/cocina.jpg";
import cocinaClasica from "../assets/cocinaClasica.jpg";
import banoMinimalista from "../assets/bañoMinimalista.jpg";
import banoLujo from "../assets/bañoLujo.jpg";
import habitaRustica from "../assets/habitaRustica.jpg";
import habitaModerna from "../assets/habitacionModerna.jpg";
import tiendaModa from "../assets/tiendaModa.jpg";
import oficinaEjecutiva from "../assets/oficinaEjecutiva.jpg";

export default function ProjectsFilter() {
    const categories = ["All", "Kitchens", "Bathrooms", "Rooms", "Commercials"];

    // Lista de proyectos con imagen, título y descripción
    const projects = [
        { id: 1, name: "Cocina Moderna", category: "Kitchens", image: cocina1, description: "Una cocina moderna con acabados en mármol y diseño minimalista." },
        { id: 2, name: "Cocina Clásica", category: "Kitchens", image: cocinaClasica, description: "Un diseño clásico con madera y toques vintage." },
        { id: 3, name: "Baño Minimalista", category: "Bathrooms", image: banoMinimalista, description: "Baño con estilo minimalista, ducha de vidrio y tonos neutros." },
        { id: 4, name: "Baño de Lujo", category: "Bathrooms", image: banoLujo, description: "Baño con jacuzzi, iluminación LED y mármol italiano." },
        { id: 5, name: "Habitación Rústica", category: "Rooms", image: habitaRustica, description: "Habitación con madera natural y decoración acogedora." },
        { id: 6, name: "Habitación Moderna", category: "Rooms", image: habitaModerna, description: "Diseño con luces LED y muebles contemporáneos." },
        { id: 7, name: "Tienda de Moda", category: "Commercials", image: tiendaModa, description: "Tienda comercial con exhibidores de lujo y diseño elegante." },
        { id: 8, name: "Oficina Ejecutiva", category: "Commercials", image: oficinaEjecutiva, description: "Oficina moderna con espacios abiertos y luz natural." },
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="projects-container">
            {/* Pestañas de filtrado */}
            <div className="tabs">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeCategory === category ? "active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Lista de proyectos filtrados */}
            <div className="projects-list">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-projects">No hay proyectos en esta categoría.</p>
                )}
            </div>
        </div>
    );
}