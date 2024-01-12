import React from "react";

const SkillContainer = ({ children, text }) => {
    
    return (
        <div
            className={`w-[4rem] h-[6rem] text-center text-gray-600`}
        >
            {children}
            <p className="pSkills">
                {text}
            </p>

        </div>
    );
};

export default SkillContainer;
