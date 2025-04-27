import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [improvedCode, setImprovedCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImprovedCode('');

    try {
      const response = await fetch('http://localhost:3001/api/improve-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to improve code');
      }

      setImprovedCode(data.improvedCode);
    } catch (err: any) {
      setError(err.message || 'Failed to improve code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Iterator AI Tool</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="code">Your Code:</label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="prompt">Improvement Request:</label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe how you want to improve the code..."
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Improving...' : 'Improve Code'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {improvedCode && (
          <div className="result">
            <h2>Improved Code:</h2>
            <pre>{improvedCode}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 