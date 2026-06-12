import { useUser } from "./hooks/useUser";

const App = () => {
  const { data, loading, error } = useUser();

  if (loading) {
    return (
      <div style={styles.center}>
        <div style={styles.spinner}></div>
        <p style={{ color: "#a0aec0", marginTop: "1rem" }}>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.center}>
        <p style={{ color: "#fc8181", fontSize: "1.2rem" }}>
          ⚠️ Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>👥 Users from Backend</h1>
      <div style={styles.grid}>
        {data &&
          data.map((user) => (
            <div key={user.id} style={styles.card}>
              <div style={styles.avatar}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <h2 style={styles.name}>{user.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1rem",
    fontFamily: "'Segoe UI', sans-serif",
  },
  center: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    color: "#e2e8f0",
    fontSize: "2.2rem",
    marginBottom: "2.5rem",
    letterSpacing: "0.05em",
    textShadow: "0 0 20px rgba(159,122,234,0.6)",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    maxWidth: "900px",
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "2rem 1.8rem",
    width: "240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.6rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  avatar: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #9f7aea, #667eea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#fff",
    boxShadow: "0 4px 15px rgba(159,122,234,0.5)",
    marginBottom: "0.4rem",
  },
  name: {
    color: "#e2e8f0",
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: 0,
  },
  email: {
    color: "#a0aec0",
    fontSize: "0.85rem",
    margin: 0,
    wordBreak: "break-all",
    textAlign: "center",
  },
  badge: {
    marginTop: "0.4rem",
    padding: "0.25rem 0.75rem",
    borderRadius: "999px",
    background: "rgba(102,126,234,0.25)",
    color: "#9f7aea",
    fontSize: "0.75rem",
    fontWeight: "600",
    border: "1px solid rgba(159,122,234,0.3)",
  },
  spinner: {
    width: "48px",
    height: "48px",
    border: "4px solid rgba(255,255,255,0.1)",
    borderTop: "4px solid #9f7aea",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
};

export default App;