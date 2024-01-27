import React from "react";
import fields from "../model/inputModel";
import { useValue } from "../context/expressionContext";

function InputField({ rule }) {
  const { handleOnChangeFields } = useValue();
  const handleKeyLabelChange = (id, keyValue) => {
    handleOnChangeFields(id, "key", keyValue);
    fields.forEach((item) => {
      if (item.key === keyValue) {
        handleOnChangeFields(id, "label", item.label);
        handleOnChangeFields(id, "value", "");
        handleOnChangeFields(id, "type", item.type);
        handleOnChangeFields(id, "filters", []);
        handleOnChangeFields(id, "value_suffix", '');
      }
    });
  };
  const handleCheckBoxChange = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedValues = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
    handleOnChangeFields(rule.id, "value", selectedValues);
  };
  return (
    <div>
      <form>
        <select
          value={rule.key}
          onChange={(e) => handleKeyLabelChange(rule.id, e.target.value)}
        >
          {fields.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>
        <select value={rule.output.operator}>
          {fields.map((item) => {
            if (rule.key === item.key) {
              return item.operators.map((ope) => (
                <option key={ope} value={ope}>
                  {ope}
                </option>
              ));
            }
            return null;
          })}
        </select>
        {fields.map((item) => {
          if (rule.key === item.key) {
            if (item.type === "number") {
              return (
                <>
                  <input
                    type="number"
                    placeholder={item.label}
                    defaultValue={rule.output.value}
                    onChange={(e) =>
                      handleOnChangeFields(
                        rule.id,
                        "value",
                        Number.parseInt(e.target.value)
                      )
                    }
                    required={item.required ? item.required : false}
                  />
                  {item.value_suffix ? (
                    <input
                      type="text"
                      disabled
                      defaultValue={item.value_suffix}
                    />
                  ) : (
                    ""
                  )}
                </>
              );
            }
          }
        })}
        {fields.map((item) => {
          if (rule.key === item.key) {
            if (item.type === "select") {
              return item.options.map((ite) => {
                return (
                  <>
                    <label>
                      <input
                        type="radio"
                        value={ite}
                        defaultValue={rule.output.value}
                        onChange={(e) =>
                          handleOnChangeFields(rule.id, "value", e.target.value)
                        }
                        required={item.required ? item.required : false}
                      />
                      {ite}
                    </label>

                    {item.value_suffix ? (
                      <input
                        type="text"
                        disabled
                        defaultValue={item.value_suffix}
                      />
                    ) : (
                      ""
                    )}
                  </>
                );
              });
            }
          }
        })}

        {fields.map((item) => {
          if (rule.key === item.key) {
            if (item.type === "multi_select") {
              return (
                <>
                  {item.options.map((ite) => (
                    <>
                      <input
                        type="checkbox"
                        id={ite}
                        name={ite}
                        value={ite}
                        onChange={(e) =>
                          handleCheckBoxChange(rule.id, "value", e.target.value)
                        }
                      />
                      <label htmlFor={ite}>{ite}</label>
                    </>
                  ))}
                  {item.value_suffix ? (
                    <input
                      type="text"
                      disabled
                      defaultValue={item.value_suffix}
                    />
                  ) : (
                    ""
                  )}
                </>
              );
            }
          }
        })}

{fields.map((item) => {
          if (rule.key === item.key) {
            if (item.type === "boolean") {
              return item.options.map((ite) => {
                return (
                  <>
                    <label>
                      <input
                        type="radio"
                        value={ite}
                        defaultValue={rule.output.value}
                        onChange={(e) =>
                          handleOnChangeFields(rule.id, "value", e.target.value)
                        }
                        required={item.required ? item.required : false}
                      />
                      {ite}
                    </label>

                    {item.value_suffix ? (
                      <input
                        type="text"
                        disabled
                        defaultValue={item.value_suffix}
                      />
                    ) : (
                      ""
                    )}
                  </>
                );
              });
            }
          }
        })}


      </form>
    </div>
  );
}

export default InputField;
