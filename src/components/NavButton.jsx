import '../Global.css'

export function NavButton(props) {
  return (
    <a href="#" className='flex gap-1 uppercase font-normal'>
      {props.children} <span className='hidden lg:block'>{props.title}</span>
    </a>
  )
}
