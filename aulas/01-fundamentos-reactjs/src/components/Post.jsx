import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

// author: {avatar_url:"", name:"", role:""}
// publishedAt: Date, 
// content: ""


export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/henriqueritter.png" />
          <div className={styles.authorInfo}>
            <strong>Henrique Ritter</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="29 de outubro às 13:34h" dateTime="2022-10-29 13:34:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p> Acabei de postar um projeto</p>
        <p> <a href="">https://www.google.com </a></p>
        <p>
          <a href=""> #ignite </a>{' '}
          <a href=""> #projeto  </a>{' '}
          <a href=""> #rocketseat  </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}