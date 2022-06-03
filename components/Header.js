export default function Header() {
  return (
    <div className='px-8 py-6 shadow-md'>
      <div className='flex justify-between'>
        <img src='/logo.svg' className='h-8' />
        <a href='https://github.com/alabhyajindal/slice'>
          <img src='/github-logo.svg' />
        </a>
      </div>
    </div>
  );
}
