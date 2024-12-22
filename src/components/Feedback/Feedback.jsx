const Feedback = ({ options, stats }) => {
  return (
    <ul style={{ margin: 0, padding: 0, paddingTop: 20 }}>
      {Object.entries(options).map(([key, value]) => (
        <li
          key={key}
          style={{
            listStyle: "none",
            textTransform: "capitalize",
          }}
        >
          {key}: {value}
        </li>
      ))}
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
