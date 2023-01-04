// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { socket } from './socket';

export function App() {
  const greet = () => {
    socket.emit( 'message', "Hello from the client", ( data: any ) => console.log( data ) );
  }
  return (
    <>
      {/* <NxWelcome title="chatapp" /> */}
      <div />
      <h1 onClick={greet}>Hello world</h1>
    </>
  );
}

export default App;
