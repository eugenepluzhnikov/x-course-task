import { Image, Button } from "react-bootstrap";

import "./Specific-book.scss";

import book from "../../img/book.jpg";
import arrowUp from "../../img/arrowUp.svg";
import arrowDown from "../../img/arrowDown.svg";

export const SpecificBook = () => {
  return (
    <main class="specificBook">
      <section class="img">
        <Image src={book} alt="'Енеїда' Іван Котляревський" className="book" />
      </section>

      <section class="bookName">
        <div className="title">
          Book name:<span className="name">Енеїда</span>
        </div>
        <div className="title">
          Book author:<span className="name">Іван Котляревський</span>
        </div>
        <div className="title">
          Book level:<span className="name">Beginner</span>
        </div>
        <div className="title">
          Book name:<span className="name">core</span>
        </div>
      </section>

      <section className="prise">
        <div className="priceTitle">
          Price, $
          <div>0</div>
        </div>
        <div className="priceTitle">
          Count
          <div className="countButton">
            <Button variant="outline-dark">Card</Button>
            <div className="countButtonArrow">
              <Button variant="outline-dark" className="buttonArrow">
                <img src={arrowUp} alt="arrowUp" className="imgArrow" />
              </Button>
              <Button variant="outline-dark" className="buttonArrow ">
                <img src={arrowDown} alt="arrowDown" className="imgArrow" />
              </Button>
            </div>
          </div>
        </div>
        <div className="priceTitle">
          Total price, $
          <div>0</div>
        </div>
        <Button variant="outline-dark" className="addCard">Add to card</Button>
      </section>

    </main>
  )}