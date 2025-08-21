
import Header from './components/Header'
import './App.css'
import Form from './components/Form'

function App() {

  // const handleSubmit = (formData) => {
// event.preventDefault();
// const formL = event.currentTarget;
// const formData = new FormData(formL);
// const Email = formData.get("email");
// const Password = formData.get("password");
// console.log(Email);
// console.log(Password);
// formL.reset();
  // };

  return (
  //   <>
  //     <h1>Signup Form</h1>
  //     <form action={handleSubmit} method='post'>
  //       <label htmlFor="email">Email:</label>
  //       <input
  //         id="email"
  //         type="email"
  //         name="email"
  //         placeholder="name@example.com"
  //         required
  //       />
  //       <br />
  //       <label htmlFor="password">password:</label>
  //       <input id="password" type="password" name="password" required />
  //       <br />
  //       <button>Submit</button>
  //     </form>
  //   </>

  <>
  <Header/>
  <Form/>
  </>  
  );
}

export default App
