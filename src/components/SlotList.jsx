function SlotList() {
  return (
    <div className="card">
      <h2>🅿️ Parking Slots</h2>

      <div className="slot-grid">
        <div className="slot-card available">
          <div className="slot-number">#1</div>
          <div className="slot-status">✅ Available</div>
          <div className="slot-features">
            <span className="feature">🏠 Covered</span>
            <span className="feature">⚡ EV</span>
          </div>
        </div>

        <div className="slot-card occupied">
          <div className="slot-number">#2</div>
          <div className="slot-status">🚗 Occupied</div>
          <div className="slot-features">
            <span className="feature">🏠 Covered</span>
          </div>
        </div>

        <div className="slot-card available">
          <div className="slot-number">#3</div>
          <div className="slot-status">✅ Available</div>
          <div className="slot-features">
            <span className="feature">⚡ EV</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlotList