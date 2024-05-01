import { CoursePart } from "../types";

interface PartProps {
  parts: CoursePart[];
}

export const Part = ({ parts }: PartProps) => {
  return (
    parts.map(part => {
      switch (part.kind) {
        case "basic":
          return (
            <div key={part.name}>
              <p><strong>{part.name} {part.exerciseCount}</strong></p>
              <p>{part.description}</p>
            </div>
          )
        case "group":
          return (
            <div key={part.name}>
              <p><strong>{part.name} {part.exerciseCount}</strong></p>
              <p>Project exercises {part.groupProjectCount}</p>
            </div>
          )
        case "background":
          return (
            <div key={part.name}>
              <p><strong>{part.name} {part.exerciseCount}</strong></p>
              <p>{part.description}</p>
              <p>{part.backgroundMaterial}</p>
            </div>
          )
        case "special":
          return (
            <div key={part.name}>
              <p><strong>{part.name} {part.exerciseCount}</strong></p>
              <p>{part.description}</p>
              <p>required skills: {part.requirements.join(", ")}</p>
            </div>
          )
      }
    })
  )
}