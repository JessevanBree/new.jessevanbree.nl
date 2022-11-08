import React, { Component } from "react";
import { ExperienceSegment, ExperienceListItem, ExperienceList, Title } from './experience_styles'

type Props = {};

type State = {
  experienceItems: string[];
};

class Experience extends Component<Props, State> {
  state = {
    experienceItems: [
      "React",
      "React Native",
      "Next.js",
      "JavaScript",
      "CSS",
      "Responsive webdesign",
      "Angular 8",
      "Ruby on Rails",
      "SQL",
      "MySQL",
      "Microsoft Word",
      "Microsoft Excel",
      "Java",
      "C#",
      "AngularJS",
      "HTML",
      "Webdesign"
    ]
  };

  render() {
    const { experienceItems } = this.state
    return (
      <ExperienceSegment id="Experience" colorId="white">
        <Title>Experience</Title>
        <ExperienceList>
          { 
            experienceItems.map((experience, i) => <ExperienceListItem key={`Experience_${i}`}>{experience}</ExperienceListItem>)
          }
        </ExperienceList>
      </ExperienceSegment>
    );
  }
}

export default Experience;
