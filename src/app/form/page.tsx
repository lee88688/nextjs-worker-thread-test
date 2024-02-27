import React from "react";

async function submit(formData: FormData) {
  "use server";
  console.log(formData);
  return <div>hello</div>
}

export default function Form() {
  console.log(submit.toString());
  return (
    <form action={submit}>
      <input type="text" name="key"></input>
      <input type="text" name="value"></input>
      <button type="submit">click</button>
    </form>
  );
}
