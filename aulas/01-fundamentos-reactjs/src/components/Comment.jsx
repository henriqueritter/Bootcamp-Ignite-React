import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/henriqueritter.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Ritter</strong>
              <time title="31 de outuburo às 18:49" dateTime="2022-10-31 18:49:30">Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
            //onClick={() => setLikeCount(likeCount + 1)}
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}