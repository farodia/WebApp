import React, {useState} from "react";
import SummaryContent from "./SummaryContent";
import EditIcons from "./EditButton";
import {FormModal} from "./FormModal";
import {FormContent} from "./FormContent";
import {CardChangeToast} from "./CardChangeToast";
import TitleNavigator from "./TitleNavigator";

export const BookCard = () => {
    const [isFormModalVisible, setFormModalVisible] = useState(false);
    const [isCardChangeToastVisible, setCardChangeToastVisible] = useState(false);

    return (
        <div id="book-container">
            <SummaryContent/>
            <div>
                <div>
                    <EditIcons onEdit={() => setFormModalVisible(true)}
                               onChange={() => setCardChangeToastVisible(true)}/>
                    <FormModal visible={isFormModalVisible} onCancel={() => setFormModalVisible(false)}>
                        <FormContent onClose={() => setFormModalVisible(false)}/>
                    </FormModal>
                    <CardChangeToast visible={isCardChangeToastVisible}
                                     onCancel={() => setCardChangeToastVisible(false)}/>
                </div>
                <TitleNavigator/>
            </div>

        </div>
    );
}