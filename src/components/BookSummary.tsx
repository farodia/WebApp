import React from "react";
import "../App.css";
import {BookCard} from "./BookCard";
import {State} from "../state";
import {useSelector} from "react-redux";
import {CardInfo} from "../state/reducers/articleReducer";

const BookSummary = () => {
    const bookCards = useSelector((state: State) => state.articles["bookCards"]);
    return (
        <div className="book-box" >
            {bookCards ? bookCards.map((card: CardInfo, index: number) => {
                return (
                    <BookCard key={index} cardId={card.cardId} cardOrder={index}/>
                );
            }) : "Loading...."}
        </div>
    );
}
export default BookSummary;