import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='max-w-full bg-neutral-900 p-4 mt-4 h-full rounded-md'>
        <ul className='max-w-lg m-auto'>
          <li className='p-4 bg-neutral-950 mt-5 mb-4 rounded-md'>
            <p>Note Title</p>
            <h5>Note Content will go here, this is just dummy text for now but eventually will be the main text we see on the screen</h5>
            <button className='mr-3 text-lime-700 mt-2 p2'><i class="fa-solid fa-pen-to-square"></i></button>
            <button className='mr-3 text-rose-600 p2'><i class="fa-solid fa-trash"></i></button>
          </li>
         </ul>
      </section>

    </>
  )
}
