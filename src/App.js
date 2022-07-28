import Layout from "./components/Layout";
import './App.css';
import MainCard from "./components/MainCard";
import FormContainer from "./components/MainForm/FormContainer";

function App(){
    return (
      <div  className="layout">
        <Layout/>
        <MainCard/>
        <FormContainer/>
      </div>
    ) 
}

export default App;