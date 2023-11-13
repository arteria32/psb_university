import React, { FC } from "react";
import "./ProgramsListPage.scss"
import ProgramsListPart from "../../parts/ProgramsListPart/ProgramsListPart";
const ProgramsListPage: FC = () => {

    return (
        <div className='programs-list-page-body'>
            <div className="toolbox">
            </div>
            <div className="programs-viewer">
                <ProgramsListPart />
            </div>
        </div >
    );
};

export default ProgramsListPage;
