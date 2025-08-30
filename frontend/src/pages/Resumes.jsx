import { useEffect, useState } from "react";
import { fetchResumes } from "../api";

export default function Resumes() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumes()
      .then(data => setResumes(data))
      .catch(err => alert(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container py-4">
      <h2>My Saved Resumes</h2>
      {resumes.length === 0 ? (
        <p>No resumes saved yet.</p>
      ) : (
        resumes.map(r => (
          <div key={r._id} className="card my-2 p-2">
            <h4>{r.name}</h4>
            <p>Email: {r.email}</p>
            <p>Phone: {r.phone}</p>
          </div>
        ))
      )}
    </div>
  );
}
