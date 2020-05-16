import React from 'react';
import './Content.css';
import Collapsible from './Collapsible/Collapsible'
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';

export class Content extends React.Component {
    render() {
        return (
            <div className="Content col-12 col-md-10">
                <div className="row flex-column flex-md-row justify-content-around">

                    < Collapsible header="This is the header" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Collapsible>

                    < Collapsible header="This is the header2" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum interdum nibh eros, tristique pretium lorem consequat a.
                        Mauris ultrices accumsan turpis sed ultricies. Praesent dapibus
                        placerat felis. Integer ut venenatis tellus, at volutpat urna.
                        Pellentesque neque metus, dignissim vitae faucibus sit amet,
                        feugiat ut felis. Cras at nunc et ligula.
                </Collapsible>

                </div>
                < RandomColorSquare />
            </div>
        )
    }
}