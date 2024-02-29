import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButtons from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  function handelSelect(selectedButton){
    setSelectedTopic(selectedButton);
        console.log (selectedTopic);
  }
    console.log ('APP COMPONENT IS EXECUTING');
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
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
                  title = {CORE_CONCEPTS[0].title} 
                  description = {CORE_CONCEPTS[0].description}
                  image = {CORE_CONCEPTS[0].image}
                  />
{/* In the above syntax and this is same but we will use it only the Key value is same name */}
            <CoreConcept {...CORE_CONCEPTS[1]} /> 
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected = {selectedTopic === 'components'} onSelect= {() => handelSelect('components')}>Components</TabButtons>
            <TabButtons isSelected = {selectedTopic === 'jsx'}onSelect= {() => handelSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected = {selectedTopic === 'props'}onSelect= {() => handelSelect('props')}>Props</TabButtons>
            <TabButtons isSelected = {selectedTopic === 'state'}onSelect= {() => handelSelect('state')}>State</TabButtons>
          </menu>
          {tabContent}
          
        </section>
      </main>
    </div>
  );
}

export default App;
