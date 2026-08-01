import { useEffect, useState } from "react";

function Week5Api() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetches from your live XAMPP server
    fetch("http://localhost/week_5_api/index.php")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error connecting components:", error));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginTop: "20px",
        background: "#f9f9f9",
      }}
    >
      <h3>Backend API Connection Status (Week 5)</h3>
      {apiData ? (
        <div>
          <p>
            <strong>Module:</strong> {apiData.module}
          </p>
          <ul>
            {apiData.tasks_completed.map((t) => (
              <li key={t.id}>
                {t.task} - <strong>{t.status}</strong>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Connecting to backend server...</p>
      )}
    </div>
  );
}

export default Week5Api;
