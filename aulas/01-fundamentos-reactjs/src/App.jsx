import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

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
            author="Henrique"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae iusto, incidunt enim consequuntur dolorem eaque, quisquam totam, ad qui fugiat earum nam inventore est minus! Fugiat quasi in error."
          />
          <Post
            author="Henrique"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae iusto, incidunt enim consequuntur dolorem eaque, quisquam totam, ad qui fugiat earum nam inventore est minus! Fugiat quasi in error."
          />
        </main>
      </div>

    </div>
  )
}