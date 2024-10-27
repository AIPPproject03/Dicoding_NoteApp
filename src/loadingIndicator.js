import anime from "animejs";

class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.animateIndicator();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <div class="loading-text">Loading...</div>
      </div>
      <style>
        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(5px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
        }
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #007bff;
          border-top: 5px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .loading-text {
          margin-top: 10px;
          font-size: 1.2rem;
          color: #333;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  animateIndicator() {
    anime({
      targets: this.shadowRoot.querySelector(".loading-spinner"),
      rotate: "1turn",
      duration: 1000,
      easing: "linear",
      loop: true,
    });
  }
}

customElements.define("loading-indicator", LoadingIndicator);
