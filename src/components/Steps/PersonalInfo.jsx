import { TextField } from "../Tools";

function PersonalInfo() {
  return (
    <section>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <TextField label="Name" placeholder="e.g. Stephen King" />
      <TextField
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />
      <TextField label="Name" placeholder="e.g. Phone Number" />
    </section>
  );
}

export default PersonalInfo;
