import Link from 'next/link';
import GradientText from './components/gradientText/GradientText';

export default function Home() {
  return (
    <main className='flex items-center justify-center min-h-screen'>
      
      <div className='text-center'>
        <GradientText
          colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
          animationSpeed={3}
          showBorder={false}
          className='custom-class'
        >
          Welcome to Todo App!
        </GradientText>
        <p className='mb-6'>Start managing your tasks now.</p>
        <Link href='/todos'>
          <button
            className='px-6 py-3 rounded text-white font-semibold cursor-pointer'
            style={{
              background:
                'linear-gradient(270deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa)',
              backgroundSize: '400% 400%',
            }}
          >
            Go to tasks
          </button>
        </Link>
      </div>
    </main>
  );
}
