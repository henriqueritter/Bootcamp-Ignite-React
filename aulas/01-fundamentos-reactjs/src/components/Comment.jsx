import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/henriqueritter.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Ritter</strong>
              <time title="31 de outuburo às 18:49" dateTime="2022-10-31 18:49:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário"><Trash size={24} /></button>
          </header>
          <p>Muito bom parábens!</p>
        </div>
        <footer>
          <button><ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}