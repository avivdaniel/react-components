import React from 'react';
import './Content.css';
import Collapsible from './Collapsible/Collapsible'

export class Content extends React.Component {
    render() {
        return (
            <div className="Content col-12 col-md-10 d-md-flex flex-md-cloumn">
                < Collapsible header="This is the header" >
                    This is the content < br />
                    This is the content
                </Collapsible>
                < Collapsible header="This is the header2" >
                    This is the content2 < br />
                This is the content2
                </Collapsible>
            </div>
        )
    }
}