import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useValue } from "../context/expressionContext";
import InputField from "./InputField";
import styles from './group.module.css';
import { Draggable, Droppable } from "react-beautiful-dnd";

function Group({ exp }) {
  //Consuming the values of custom expression context
  const { handleAddExpression, deleteObjectById, initId, handleOnChange } = useValue();

  return (
    <Droppable droppableId={exp.id} type="GROUP" direction="vertical">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <Container>
            <Form className={styles.container}>
              <Form.Group>
                <div className={styles.groupContent}>
                  <Form.Select value={exp.combinator} onChange={(e) => handleOnChange(exp.id, 'combinator', e.target.value)}>
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                  </Form.Select>

                  <Button
                    className="ml-2 mr-2"
                    onClick={() => handleAddExpression(exp.id, "field")}
                  >
                    + Field
                  </Button>

                  <Button
                    className="ml-2 mr-2"
                    onClick={() => handleAddExpression(exp.id, "group")}
                  >
                    + Group
                  </Button>

                  {!(initId === exp.id) ? <Button onClick={() => deleteObjectById(exp.id)}> X </Button> : ''}
                </div>
              </Form.Group>

              {exp.rules.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Row className="d-flex flex-row align-items-center">
                        {item?.rules ? (
                          <React.Fragment>
                            <Group exp={item} />
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <div className={styles.inputFieldRow}>
                              <InputField rule={item} />
                              <Button onClick={() => deleteObjectById(item.id)}> X </Button>
                            </div>
                          </React.Fragment>
                        )}
                      </Row>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Form>
          </Container>
        </div>
      )}
    </Droppable>
  );
}

export default Group;
