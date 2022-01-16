import React from "react";
import {SkillsDiv, SkillsH1} from "./Skills.styles";

function SkillsWithPercentage({ title, percentage }) {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div
                style={{
                    textAlign: "left",
                    fontSize: "20px",
                    marginRight: "15px",
                    minWidth: "120px"
                }}
            >
                {title}
            </div>
            <div
                style={{
                    height: "5px",
                    backgroundColor: "grey",
                    width: "100%",
                    borderRadius: "15px"
                }}
            >
                <div
                    style={{
                        backgroundColor: "lightblue",
                        width: percentage,
                        height: "5px"
                    }}
                ></div>
            </div>
            <b style={{ marginLeft: "10px" }}>{percentage}</b>
        </div>
    );
}


const Skills = () => (
    <SkillsDiv>
        <SkillsH1>
            Skills
        </SkillsH1>
        <SkillsWithPercentage title={"React"} percentage={"40%"} />
        <SkillsWithPercentage title={"Linux"} percentage={"70%"} />
        <SkillsWithPercentage title={"Java"} percentage={"60%"} />
        <SkillsWithPercentage title={"Python"} percentage={"70%"} />
    </SkillsDiv>
)

export default Skills;