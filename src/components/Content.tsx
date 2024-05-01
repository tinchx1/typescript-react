import { CoursePart } from "../types"
import { Part } from "./Part"
interface propsContent {
  parts: CoursePart[],
  totalExercises: number,
  courseName: string
}
export const Content = ({ parts, totalExercises, courseName }: propsContent) => {
  return (
    <div>
      <h1>{courseName}</h1>
      <Part parts={parts} />
      <p><strong>total of {totalExercises} exercises</strong></p>
    </div>
  )
}