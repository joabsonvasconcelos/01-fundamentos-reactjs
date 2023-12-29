import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Siderbar";

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
            <Post 
               author="Joabson Vasconcelos" 
               content ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad cupiditate doloremque quasi iure nam tenetur impedit iste. Fuga voluptatem repudiandae deleniti neque aut a saepe veniam nostrum tempore quibusdam!" 
             />
             <Post 
               author="Jobs Jbs" 
              content ="Conteudo muito legal s" 
             />
        </main>

      </div>


    </div>
  )
}
