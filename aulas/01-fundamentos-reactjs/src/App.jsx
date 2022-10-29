import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Henrique"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae iusto, incidunt enim consequuntur dolorem eaque, quisquam totam, ad qui fugiat earum nam inventore est minus! Fugiat quasi in error."
      />
    </div>
  )
}