import { MovieCards } from './MovieCards'

export function Gallery(props) {
  return (
    <div className="flex flex-col">
      <h1>{props.title}</h1>
      <MovieCards />
    </div>
  )
}