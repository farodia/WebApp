import React, {FC, useEffect} from "react";
import HeaderPartOfModal from "./CloseIcon";
import "../modal.css";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../state";
import {bindActionCreators} from "redux";
import {OperationButton} from "./OperationButton";

interface CardChangeToastProps {
    visible:boolean,
    onCancel: ()=>void
}

export const CardChangeToast :FC<CardChangeToastProps> = ({visible,onCancel}) => {
    const articleInfo = useSelector((state:State)=>state.articles);
    const dispatch = useDispatch();
    const {AddCard,DeleteCard} = bindActionCreators(actionCreators,dispatch);
    console.log("tap toast",articleInfo["cardId"]);

    const deleteCard = () => {
        DeleteCard({cardId:+articleInfo["cardId"],title:articleInfo["title"],summary:articleInfo["summary"]});
        console.log("delete card",articleInfo["cardId"]);
        onCancel();
    }
    const addCard = () => {
        AddCard({cardId:+articleInfo["cardId"],title:articleInfo["title"],summary:articleInfo["summary"]});
        console.log("add card",articleInfo["cardId"]);
        onCancel();
    }


    if (!visible) {
        return null;
    }


    return (
        <div>
            <div className="modal-mask"/>
            <div className="modal-container">
                <HeaderPartOfModal onClose={onCancel}/>
                <OperationButton cardId={articleInfo["cardId"]} onAdd={addCard} onDelete={deleteCard}/>
            </div>
        </div>
    );
}
