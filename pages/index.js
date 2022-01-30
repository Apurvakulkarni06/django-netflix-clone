import Link from 'next/link';
import { Toolbar } from '../component/Toolbar';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div class="container mx-auto">
      <Toolbar />
      <div class="flex flex-col items-center justify-center">
      
        <h1>Home</h1>
        <h3>Your one stop solution for latest movies</h3>

      </div>
      
    </div>
        
   
   
  )
}
