import { Form, useLoaderData } from "react-router-dom";

export default function Edit() {
   const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="name"
          aria-label="name"
          type="text"
          name="name"
          defaultValue={contact.name}
        />
        <input
          placeholder="userName"
          aria-label="userName"
          type="text"
          name="userName"
          defaultValue={contact.userName}
        />
      </p>
      <label>
        <span>Phone</span>
        <input
          type="phone"
          name="phone"
          placeholder="phone"
          defaultValue={contact.phone}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}