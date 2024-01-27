import { createContext, useContext, useState } from "react";
import nextId from "react-id-generator";
const expressionContext = createContext();

/**
 * Returns the value of context to be consumed by the children
 */
function useValue() {
  return useContext(expressionContext);
}

/**
 * Custom Expression Context
 */
const CustomExpressionContext = ({ children }) => {
  //Setting the id of initial/outer combinator
  const [initId, setInitId] = useState(nextId());

  //State for expression and setting the initial expression
  const [expression, setExpression] = useState({
    rules: [
      {
        rules: [],
        id: nextId(),
        combinator: "AND",
        not: "false",
        score: +20,
        scoring_rule: "group",
        reason: "",
      },
    ],
    id: initId,
    combinator: "AND",
    not: "false",
    score: +20,
    scoring_rule: "group",
    reason: "",
  });

  /**
   * Recursively function to delete expression by id for nested expression
   */
  const deleteObjectById = (id, exp = expression) => {
    const deleteRecursive = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item.id === id) {
          arr.splice(i, 1);
          setExpression({ ...expression });
          return;
        } else if (item.rules) {
          deleteRecursive(item.rules);
        }
      }
    };

    deleteRecursive(exp.rules);
  };

  /**
   * Recurisvely funtion to add field or group respectively in nested expression
   */
  const handleAddExpression = (id, scoring_rule, exp = expression) => {
    if (exp.id === id) {
      if (scoring_rule === "field") {
        exp.rules.unshift({
          id: nextId(),
          key: "applicant.age",
          type: "number",
          label: "Age",
          filters: [],
          output: { value: '', operator: "=", value_suffix: '' },
        });
      } else {
        exp.rules.push({
          rules: [],
          id: nextId(),
          combinator: "AND",
          not: "false",
          score: +20,
          scoring_rule: "group",
          reason: "",
        });
      }
      setExpression({ ...expression });
    } else {
      exp.rules.forEach((item) => {
        if (item?.rules) {
          handleAddExpression(id, scoring_rule, item);
        }
      });
    }
  };


/**
 * Recursive function to find the id and make changes to relevant fields of expression
 */
  const handleOnChangeFields = (id, field, value, exp = expression) => {
    exp.rules.forEach((item) => {
      if (item.id === id) {
        if (field === "value" || field === "operator" || field === 'period_type' || field === 'field_name' || field === "value_suffix") {
          item.output[field] = value;
        } else if (field === "key" || field === "label" || field === "type") {
          item[field] = value;
        }
        setExpression({ ...expression });
        return;
      } else if (item?.rules) {
        handleOnChangeFields(id, field, value, item);
      }
    });
  };

  /**
   * Recursive function to add object to respective destination rules
   */
  const moveObject = (obj, destinationId, exp = expression) => {
    exp.rules.forEach((item) => {
      if (destinationId === item.id) {
        if (obj?.rules) {
          item.rules.push(obj) 
        } else {
          item.rules.unshift(obj);
        }
        setExpression({ ...expression });
        return;
      } else if (item?.rules) {
        moveObject(obj, destinationId, item);
      }
    });
  };

  /**
   * Recursive function to handle Drag and drop, extracting the source objext and appending respective destination
   */
  const handleDragNDrop = (sourceId, destinationId, exp = expression) => {
    exp.rules.forEach((item, key) => {
      if (sourceId === item.id) {
        const obj = item;
        exp.rules.splice(key, 1);
        setExpression({ ...expression });
        moveObject(obj, destinationId);
        return;
      } else if (item?.rules) {
        handleDragNDrop(sourceId, destinationId, item);
      }
    });
  };
  
  /**
   * Handle changes to combinator on different nested levels
   */
  const handleOnChange = (id, field, value, exp = expression) => {
    if (exp.id === id) {
      if (field === "combinator") {
        exp.combinator = value;
      }
      setExpression({ ...expression });
    } else {
      if (!exp.rules) {
        return;
      }

      exp.rules.forEach((item) => {
        if (item?.rules) {
          handleOnChange(id, field, value, item);
        }
      });
    }
  };

  return (
    <expressionContext.Provider
      value={{
        expression,
        setExpression,
        initId,
        handleAddExpression,
        deleteObjectById,
        handleOnChange,
        handleOnChangeFields,
        handleDragNDrop,
      }}
    >
      {children}
    </expressionContext.Provider>
  );
};

export { useValue };
export default CustomExpressionContext;
