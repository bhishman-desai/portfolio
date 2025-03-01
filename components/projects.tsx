"use client";

import React, {useState} from "react";
import SectionHeading from "./section-heading";
import {projectsData} from "@/lib/data";
import Project from "./project";
import {useSectionInView} from "@/lib/hooks";

export default function Projects() {
    const {ref} = useSectionInView("Projects", 0.5);
    const [visibleProjects, setVisibleProjects] = useState(3);

    /* Function to load more projects in increments of 3 */
    const handleExpand = () => {
        setVisibleProjects((prev) => prev + 3);
    };

    return (<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.slice(0, visibleProjects).map((project, index) => (<React.Fragment key={index}>
                <Project {...project} />
            </React.Fragment>))}
        </div>
        {/* Show the button only if there are more projects to display */}
        {visibleProjects < projectsData.length && (<div className="text-center mt-4">
            <button
                onClick={handleExpand}
                className="px-4 py-2 hover:bg-gray-200 dark:text-white rounded-md  dark:hover:bg-white/20"
            >
                &#9660; {/* Down arrow HTML entity */}
            </button>
        </div>)}
    </section>);
}