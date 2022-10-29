import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/henriqueritter.png" />
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
        <p> <a href=""> #projeto #ignite </a></p>
      </div>
    </article>
  )
}