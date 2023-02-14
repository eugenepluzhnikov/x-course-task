import { Image } from "react-bootstrap";

import avatar2 from "../../img/avatar2.svg";

import "./Signin.scss";

export const Signin = () => {
  return (
    <main class="signin">
      <Image src={avatar2} alt="avatar" className="avatar2" rounded />

      <p class="h4">Username</p>
      <form name="full-name" action="#">
        <input type="text" name="username" id="name" placeholder="type Username" />
        <input type="submit" id="button" value="Sign-in" />
      </form>
    </main>
  )
}