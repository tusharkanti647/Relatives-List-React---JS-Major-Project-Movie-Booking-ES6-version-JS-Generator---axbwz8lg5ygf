import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */
                 <ol key="relativeList">
                    <li key="relativeListItem1">ram</li>
                    <li key="relativeListItem2">sam</li>
                    <li key="relativeListItem3">gita</li>
                    <li key="relativeListItem4">amin</li>
                    <li key="relativeListItem5">rina</li>
                    <li key="relativeListItem6">rima</li>
                 </ol>
               }
            </div>
        )
    }
}


export default App;
