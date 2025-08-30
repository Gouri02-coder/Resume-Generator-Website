// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveResume } from "../api";
import ResumeForm from "../components/ResumeForm.jsx";
import ResumePreview from "../components/ResumePreview.jsx";
import html2pdf from "html2pdf.js";

const initial = {
  name: "", email: "", phone: "", address: "",
  education: [], experience: [], skills: [], projects: []
};

export default function Home() {
  const [data, setData] = useState(() => {
    const cached = localStorage.getItem("resume_data");
    return cached ? JSON.parse(cached) : initial;
  });
  const [saving, setSaving] = useState(false);
  const printRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("resume_data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleDownloadPDF = () => {
    const element = printRef.current;
    const opt = {
      margin: 0.5,
      filename: `${data.name || "resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const saved = await saveResume(data);
      alert("Saved! ID: " + saved._id);
    } catch (e) {
      alert("Save failed: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)", // same as login
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg w-100"
        style={{
          maxWidth: "1200px",
          borderRadius: "15px",
          background: "white",
        }}
      >
        <div className="card-body">
          <h2 className="mb-4 text-center text-primary fw-bold">
            🎯 Resume Generator
          </h2>
          <div className="row g-4">
            {/* Left Side Form */}
            <div className="col-12 col-lg-6">
              <ResumeForm value={data} onChange={setData} />
              <div className="d-flex gap-2 mt-3">
                <button
                  className="btn w-50"
                  style={{
                    background: "linear-gradient(90deg, #667eea, #764ba2)",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  className="btn w-50 btn-outline-dark fw-bold"
                  onClick={handleDownloadPDF}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* Right Side Preview */}
            <div className="col-12 col-lg-6">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: "12px" }}
              >
                <div className="card-header bg-light d-flex justify-content-between align-items-center">
                  <strong>Live Preview</strong>
                  <small className="text-muted">Printable area</small>
                </div>
                <div className="card-body">
                  <div
                    className="border rounded p-2"
                    style={{ minHeight: "400px" }}
                  >
                    <div ref={printRef}>
                      <ResumePreview data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted mt-3 text-center">
            💡 Tip: Your data auto-saves in your browser (localStorage).
          </p>
        </div>
      </div>
    </div>
  );
}
