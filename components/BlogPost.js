export default function BlogPost({ title, link }) {
  return (
    <a href={link} className=''>
      <h1 className='text-3xl font-bold text-gray-700 hover:text-gray-600 cursor-pointer transition transform duration-150 ease-in-out'>
        {title}
      </h1>
    </a>
  );
}
