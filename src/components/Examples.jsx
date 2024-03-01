import { EXAMPLES } from "../data.js";
import TabButtons from './TabButton.jsx';
import {useState} from 'react';
import Section from "./Sections.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples(){
    const [ selectedTopic, setSelectedTopic ] = useState();
    function handelSelect(selectedButton){
        setSelectedTopic(selectedButton);
            console.log (selectedTopic);
        }


let tabContent = <p>Please select the topic</p>;
if(selectedTopic){
tabContent = <div id = "tab-content">
<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
</pre>
    </div>
}

    return (
        <Section title="Examples" id = "examples" >
            <Tabs 
            buttons={<>
                <TabButtons isSelected = {selectedTopic === 'components'} onClick= {() => handelSelect('components')}>Components</TabButtons>
                <TabButtons isSelected = {selectedTopic === 'jsx'}onClick= {() => handelSelect('jsx')}>JSX</TabButtons>
                <TabButtons isSelected = {selectedTopic === 'props'}onClick= {() => handelSelect('props')}>Props</TabButtons>
                <TabButtons isSelected = {selectedTopic === 'state'}onClick = {() => handelSelect('state')}>State</TabButtons>
            </>}>{tabContent}</Tabs>                  
        </Section>
    );
}