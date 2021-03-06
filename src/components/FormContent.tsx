import React, {FC, useState} from "react";
import '../modal.css'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";
import {useBooks} from "../hooks/useBooks";

interface FormContentProps {
    onClose: () => void,
    cardId: string,
    cardOrder: number
}

export const FormContent: FC<FormContentProps> = ({onClose, cardId, cardOrder}) => {
    const dispatch = useDispatch();
    const {editContent} = bindActionCreators(actionCreators, dispatch);
    const {bookSummary, bookTitle} = useBooks(cardOrder);
    const [title, setTitle] = useState(bookTitle);
    const [summary, setSummary] = useState(bookSummary);
    const handleSubmit = () => {
        editContent({cardOrder: cardOrder, cardInfo: {cardId: cardId, title: title, summary: summary}});
        onClose();
    }

    const handleReset = () => {
        setTitle("");
        setSummary("");
    }

    return (
        <form id="form-content" onSubmit={() => {
            handleSubmit()
        }}>
            <div className="modal-body">
                <div>
                    <label>📚书籍名称：
                        <input className="title-content" required type="text" placeholder="请输入您将记录的书籍名称" name="title"
                               onChange={e => setTitle(e.target.value)} value={title}/>
                    </label>

                </div>
                <div className="form-textarea">
                    📃书籍总结：
                        <textarea required placeholder="请在此记录您对于本书的总结"  name="summary"
                                  onChange={e => setSummary(e.target.value)} value={summary} />
                </div>
            </div>
            <button className="modal-confirm-btn">提交</button>
            <button type="button" className="modal-cancel-btn" onClick={handleReset}>重置</button>
        </form>
    );
}