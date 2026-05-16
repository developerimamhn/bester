import React from 'react';
import './AdvancedCrash.css';
import Icon1 from './assets/icon1.svg';
import Icon2 from './assets/icon2.svg';
import Icon3 from './assets/icon3.svg';
import Icon4 from './assets/icon4.svg';
import Icon5 from './assets/icon5.svg';
import Icon6 from './assets/icon6.svg';

const AdvancedCrashEngine = () => {
  const features = [
    {
      title: "Data Ingestion",
      desc: "Captures live round data, patterns, and timing sequences in real-time."
    },
    {
      title: "Multi-Model analysis",
      desc: "Parallel processing through regression, pattern, and statistical models."
    },
    {
      title: "Consensus engine",
      desc: "Aggregates signals and filters for high-confidence predictions only."
    },
    {
      title: "Time window output",
      desc: "Delivers precise crash probability window with confidence rating."
    }
  ];

  return (
    <div className="adv-crash-container flex flex-col items-center">
      <div className="flex flex-col items-center z-10 w-full">
        <span className="badge">Technical Deep-Dive</span>

        <h1 className="section-title">
          Advanced Crash Forecasting Engine
        </h1>

        <p className="section-subtitle">
          Everything you need for informed crash game analysis
          <br className="hidden sm:block" />
          in one streamlined extension.
        </p>
      </div>
      <div className="main-feature-card">
        <div className="feature-list">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="visual-side">
          <div className="visual-container">
            <div className="blue-glow"></div>
            <div className="beam-line"></div>
            <div className="bg-card">
              <div className="inner-mockup">
                <h4 className="mockup-title">
                  How to use AI to take better notes
                </h4>
                <div className="mockup-bullet-row">
                  <div className="mockup-bullet"></div>
                  <p className="mockup-bullet-text">
                    What can LLMs like GPT do, specifically for note-taking?
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="features-grid">
        <div className="feature-grid-card">
          <div className="grid-line-v" />
          <div className="grid-line-h" />
          <div className="icon-badge-outer">
            <div className="icon-badge-inner">
            <img src={Icon1} alt="" />
            </div>
          </div>
          <h3 className="feature-grid-title">Time range probability modeling</h3>
          <p className="feature-grid-desc">Predicts optimal crash windows using multi-variable temporal analysis, not just single-point predictions.</p>
        </div>
        <div className="feature-grid-card">
          <div className="grid-line-v" />
          <div className="grid-line-h" />
          <div className="icon-badge-outer">
            <div className="icon-badge-inner">
            <img src={Icon2} alt="" />
            </div>
          </div>
          <h3 className="feature-grid-title">Selective trigger logic</h3>
          <p className="feature-grid-desc">Smart filtering ensures signals fire only when statistical confidence exceeds dynamic thresholds.</p>
        </div>
        <div className="feature-grid-card">
          <div className="grid-line-v" />
          <div className="grid-line-h" />
          <div className="icon-badge-outer">
            <div className="icon-badge-inner">
            <img src={Icon3} alt="" />
            </div>
          </div>
          <h3 className="feature-grid-title">Model stack architecture</h3>
          <p className="feature-grid-desc">Ensemble of pattern recognition, regression, and statistical models working in parallel for consensus.</p>
        </div>
        <div className="feature-grid-card">
          <div className="grid-line-v" />
          <div className="grid-line-h" />
          <div className="icon-badge-outer">
            <div className="icon-badge-inner">
            <img src={Icon4} alt="" />
            </div>
          </div>
          <h3 className="feature-grid-title">Risk control system</h3>
          <p className="feature-grid-desc">Built-in volatility detection and streak-aware logic to minimize exposure during unstable periods.</p>
        </div>
        <div className="feature-grid-card">
          <div className="grid-line-v" />
          <div className="grid-line-h" />
          <div className="icon-badge-outer">
            <div className="icon-badge-inner">
            <img src={Icon5} alt="" />
            </div>
          </div>
          <h3 className="feature-grid-title">Auto calibration</h3>
          <p className="feature-grid-desc">Self-adjusting parameters based on real-time performance feedback and market conditions.</p>
        </div>
        <div className="feature-grid-card">
          <div className="grid-line-v" />
          <div className="grid-line-h" />
          <div className="icon-badge-outer">
            <div className="icon-badge-inner">
              <img src={Icon6} alt="" />
            </div>
          </div>
          <h3 className="feature-grid-title">Continuous monitoring</h3>
          <p className="feature-grid-desc">24/7 round analysis with adaptive learning and historical pattern recognition.</p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCrashEngine;