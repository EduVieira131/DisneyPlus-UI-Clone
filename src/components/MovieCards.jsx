import image from '../assets/image.png'

export function MovieCards() {
  return (
    <div className="mr-4 lg:mr-10 p-1 flex items-center gap-7 overflow-x-auto">
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
      <img src={image} className='snap-start' />
    </div>
  )
}