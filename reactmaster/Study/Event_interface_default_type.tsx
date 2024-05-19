// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
// background-color: ${(props) => props.theme.bgColor};
// `;

// interface DummyProps{
//   text: string;
//   active?:boolean;

// }

// function Dummy({text, active=false}: DummyProps){
//   return <h1>{text}</h1>
// }

// function App() {
//   const [value, setValue] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const{
//       currentTarget: {value},
//     } = event;
//     setValue(value);
//   };
//   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("hello", value);
//   };
//   const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };
//   return (
//     <Container>
      
//       <form onSubmit={onSubmit}>
//         <input
//           value={value}
//           onChange={onChange}
//           type="text" 
//           placeholder="username"/>
//         <button>Log in</button>
//       </form>
//       <Dummy text="hello" active={true}></Dummy>
//       <button onClick={onClick}>Click me</button>
//     </Container>
//   );
// }

// export default App;
