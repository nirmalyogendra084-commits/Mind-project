import { useState } from "react";

export default function App() {
  const [history, setHistory] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");

  const moods = ["😊","😐","😔","😡","😴"];

  const saveMood = () => {
    if (!selectedMood) return;

    const entry = {
      mood: selectedMood,
      time: new Date().toLocaleString()
    };

    setHistory([entry, ...history]);
    setSelectedMood("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#dbeafe,#f8fafc)",
      fontFamily: "Arial"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        width: "420px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
      }}>

        <h1 style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "10px"
        }}>
          MindCare+
        </h1>

        <p style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "20px"
        }}>
          How are you feeling today?
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px"
        }}>
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              style={{
                fontSize: "26px",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background:
                  selectedMood === mood
                    ? "#2563eb"
                    : "#f1f5f9",
                color:
                  selectedMood === mood
                    ? "white"
                    : "black"
              }}
            >
              {mood}
            </button>
          ))}
        </div>

        <button
          onClick={saveMood}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Save Mood
        </button>

        <h2 style={{marginTop:"25px"}}>Mood History</h2>

        {history.length === 0 && (
          <p style={{color:"#64748b"}}>No moods recorded yet</p>
        )}

        {history.map((item,index)=>(
          <div key={index} style={{
            display:"flex",
            justifyContent:"space-between",
            marginTop:"10px",
            padding:"10px",
            background:"#f8fafc",
            borderRadius:"8px"
          }}>
            <span style={{fontSize:"22px"}}>{item.mood}</span>
            <span style={{fontSize:"12px",color:"#64748b"}}>
              {item.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}