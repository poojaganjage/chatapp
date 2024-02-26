import {ChatEngine} from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";
import './App.css';

function App() {
  // if(!localStorage.getItem('username')) {
  //   return <LoginForm />
  // }
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="cf101f82-eedb-4109-be2c-620ef45a6eab"
        userName="Deepika"
        userSecret="Deepika@26"
        renderChatFeed={(chatAppProps) => { return <ChatFeed {...chatAppProps} />}}
        onNewMessage={() => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}
      />
    </div>
  );
}
export default App;
