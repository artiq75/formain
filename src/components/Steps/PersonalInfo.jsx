import { TextField } from "../Tools";

function PersonalInfo() {
  return (
    <section className="personal-info">
      <div className="personal-info-header">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="personal-info-form">
        <TextField label="Name" placeholder="e.g. Stephen King" />
        <TextField
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <TextField label="Name" placeholder="e.g. Phone Number" />
      </div>
    </section>
  );
}

export default PersonalInfo;
