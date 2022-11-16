// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';
import { IUser } from '@glory-to-ukraine/interfaces';
const user = {
  id: 'test',
  address1: 'test',
  address2: 'test',
  birthday: 'test',
  city: 'test',
  country: 'test',
  createdAt: new Date(),
  email: 'test',
  firstName: 'test',
  postalCode: 'test',
  region: 'test',
  state: null
} as IUser;

export function App() {
  return (
    <>
      <NxWelcome title="client" />
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">{user.id}</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
