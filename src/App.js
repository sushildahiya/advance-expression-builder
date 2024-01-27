import styles from './app.module.css';
import CustomExpressionContext, { useValue } from './context/expressionContext';
import { Container } from 'react-bootstrap';

import Group from './components/Group';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; 
import Output from './components/Output';

function App() {
  const {expression,handleDragNDrop} = useValue()

  /**
   *  Function to handle change of nesting level of field or group.
   */
  const onDragEnd = (result) => {
   setTimeout(()=>{
      if (result.destination){
        handleDragNDrop(result.draggableId,result.destination.droppableId)
      }
    },1000)
  };
  
 
  return (
      <div className="App">
        <div className={styles.header}>
        <h1 >Expression Builder</h1>
        </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Container fluid>
          <div className={styles.builderContainer}>
          <div className={styles.expressionContent}>
           <Group exp={expression} /></div>
           <div className={styles.outputContent}>
           <Output/>
           </div>
           </div>
        </Container>
        </DragDropContext>
      </div>
  );
}

export default App;
