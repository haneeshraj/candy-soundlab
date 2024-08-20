import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/discography">Discography</Link>
      <Link to="/snippet">Snippet</Link>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/manage-artists">Manage Artists</Link>
      <Link to="/release-list">Release List</Link>
      <Link to="/manage-release">Manage Release</Link>
      <Link to="/upload-release">Upload Release</Link>

      <Link to="/not-found">Not Found</Link>

      <h1>Another test</h1>
    </>
  )
}

export default LandingPage
