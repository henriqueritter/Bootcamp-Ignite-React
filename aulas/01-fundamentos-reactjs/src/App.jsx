import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/henriqueritter.png",
      name: "Henrique Ritter",
      role: "FullStack Developer"
    },
    content: [
      {
        type: "paragraph", content: "Eae Galera"
      },
      {
        type: "paragraph", content: "Acabei de subir mais um projeto no meu portifolio",
      },
      {
        type: "link", content: "github.com/henrique/Bootcamp-Ignite-React",
      }
    ],
    publishedAt: new Date('2022-10-31 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/henriqueritter.png",
      name: "Henrique Ritter2",
      role: "Backend Developer"
    },
    content: [
      {
        type: "paragraph", content: "Eae Galera"
      },
      {
        type: "paragraph", content: "Acabei de subir mais um projeto no meu portifolio",
      },
      {
        type: "link", content: "github.com/henrique/Bootcamp-Ignite-React",
      }
    ],
    publishedAt: new Date('2022-10-31 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}