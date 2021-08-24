import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Derek");

  // const [count, setCount] = useState(0);
  // [name of state variable, function to update variable value]
  // = useState(default value)
  const changeName = () => {
    setName(name == "Derek" ? "Michael" : "Derek");
  };
  return (
    <div className="App">
      <button onClick={changeName}>Change Name</button>
      <Counter name={name} />
    </div>
  );
}

// function App() {
//   return (
//     <NewsFeed />
//   )
// }

// function NewsFeed() {
//   return (
//     <Header />
//     <Posts />
//     <AddPostForm />
//     <Footer />
//   )
// }
// function Posts() {
//   [{name: 'nuce', likes: 45}]
//   return (
//     {posts.map(post=> {
//       return <Post post={post} />
//     })}
//   )
// }
// function Post(props) {
//   return (
//     <div>
//       <p>{props.post.title}</p>
//       <p>{props.post.author}</p>
//       <p>{props.post.datePosted}</p>
//       <p>{props.post.likes}</p>
//       </div>
//   )
// }

function Counter(props) {
  // props -> {}
  console.log(props);
  const [count, setCount] = useState(0);

  const add = () => {
    // add 1 to count
    const nextCount = count + 1;
    // update state
    setCount(nextCount);
  };

  // let loggedIn = true;
  // if (loggedIn) {
  //   console.log('hey')
  // } else {
  //   console.log('bye')
  // }
  // loggedIn ? console.log('hey') : console.log('bye')
  // {/* {isLoggedIn && <SignOut />} */}
  // {isLoggedIn ? <HomePage /> : <LoginPage />}
  return (
    <div>
      <h1>{count}</h1>
      {count === 10 && <p>you clicked ten times!</p>}
      <button onClick={add}>Add 1</button>
      <h5>{props.name}</h5>
    </div>
  );
}
