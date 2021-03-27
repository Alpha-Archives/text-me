import React, { FormEvent, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");
  const [tel, setTel] = useState("");
  const [schedule, setSchedule] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`ok ${message} ${tel} ${schedule}`)
  };

  return (
    <form className="container">
      <h2>Send SMS Message</h2>
      <input
        type="tel"
        name="number"
        id="number"
        placeholder="Enter Phone Number..."
        onChange={(e) => {
          setTel(e.target.value);
        }}
      />
      <input
        type="text"
        name="msg"
        id="msg"
        placeholder="Enter Text Message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <select
        name="schedule"
        id="schedule"
        onChange={(e) => {
          setSchedule(e.target.value);
        }}
      >
        <option value={0}>Schedule time to send a message</option>
        <option value={1}>After 1 minutes</option>
        <option value={3}>After 3 minutes</option>
        <option value={5}>After 5 minutes</option>
      </select>
      <input
        type="submit"
        id="button"
        defaultValue="Send Text"
        className="button button-primary"
      />
      <p className="response" />
    </form>
  );
};
export default Home;
