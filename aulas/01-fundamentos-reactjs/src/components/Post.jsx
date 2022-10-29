import styles from './Post.module.css';

export function Post(props) {
  return (
    <div>
      <span>{props.author}</span>
      <p>
        {props.content}
      </p>
    </div>
  )
}