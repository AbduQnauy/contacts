import React from "react";
import { Input, Button } from "reactstrap";

const ContactRecord = ({
  id,
  firstname,
  familyname,
  category,
  phone,
  date,
  flag,
  onUpdate,
  onDelete
}) => {
  return (
    <tr>
      <th>
        {flag ? (
          <Input
            addon
            type="checkbox"
            checked={flag}
            style={{
              transform: "scale(1.5)"
            }}
          />
        ) : null}
      </th>
      <th scope="row">{id + 1}</th>
      <td>{firstname + " " + familyname}</td>
      <td>{category}</td>
      <td>{phone}</td>
      <td>{date}</td>
      <td style={{ textAlign: "center" }}>
        <Button
          color="primary"
          onClick={() =>
            onUpdate(id, firstname, familyname, category, phone, date)
          }
          size="sm"
          style={{ margin: ".1rem" }}
        >
          Update
        </Button>{" "}
        <Button
          color="danger"
          onClick={() => onDelete(id)}
          size="sm"
          style={{ margin: ".1rem" }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ContactRecord;
