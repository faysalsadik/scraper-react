import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Scraper Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', color: '#dc2626', background: '#fef2f2', border: '1px solid #f87171', borderRadius: '8px', margin: '10px' }}>
                    <h3 style={{ marginTop: 0 }}>Something went wrong.</h3>
                    <p style={{ fontSize: '12px' }}>{this.state.error?.message || "Unknown error occurred"}</p>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.setState({ hasError: false, error: null })}
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
