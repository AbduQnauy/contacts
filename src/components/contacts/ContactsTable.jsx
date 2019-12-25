import React from "react";
import { Table, Input } from "reactstrap";
import ContactRecord from "./ContactRecord";

const ContactsTable = ({ contacts, flag, checkAll, onUpdate, onDelete }) => {
  // //////////////////////////////////
  const sortedContacts = [];

  contacts.map(contact => {
    sortedContacts[contact.id] = contact;
  });

  return (
    <>
      <Table striped responsive>
        <thead>
          <tr>
            <th>
              <Input
                addon
                type="checkbox"
                style={{
                  transform: "scale(1.5)"
                }}
                onClick={checkAll}
                disabled={!contacts.length ? !flag : false}
              />
            </th>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Phone</th>
            <th>Birth Date(Y-M-D)</th>
            <th style={{ textAlign: "center" }}>Controls</th>
          </tr>
        </thead>
        <tbody>
          {/*  */}
          {contacts.length
            ? sortedContacts.map(contact => (
                <ContactRecord
                  key={contact.id}
                  {...contact}
                  flag={flag}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))
            : null}
          {/*  */}
        </tbody>
      </Table>

      {contacts.length ? null : (
        <div
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "3rem",
            color: "#ccc"
          }}
        >
          No Contacts
        </div>
      )}
    </>
  );
};

export default ContactsTable;
