import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

// author: {avatar_url:"", name:"", role:""}
// publishedAt: Date, 
// content: ""


export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText(''); //limpa o textArea
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === "paragraph") {
            return (
              <p key={item.content}
              >{item.content}</p>
            )
          } else if (item.type === "link") {
            return (
              <p key={item.content} > <a href="#">{content.content} </a></p>
            )
          }
        })}
      </div>

      <form onSubmit={() => handleCreateNewComment()} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment key={comment} content={comment} />)
        })}
      </div>
    </article>
  )
}