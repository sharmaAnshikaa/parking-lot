function ParkRemove() {
  return (
    <div className="card">
      <h2>🚗 Park / Remove Vehicle</h2>

      {/* Park Vehicle Section */}
      <div className="section">
        <h3>Park Vehicle</h3>

        <form>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>⚡ Needs EV Charging</span>
            </label>

            <label className="checkbox-label">
              <input type="checkbox" />
              <span>🏠 Needs Cover</span>
            </label>
          </div>

          <button type="button" className="btn btn-success">
            Park Vehicle
          </button>
        </form>
      </div>

      <div className="divider"></div>

      {/* Remove Vehicle Section */}
      <div className="section">
        <h3>Remove Vehicle</h3>

        <form>
          <div className="form-group">
            <label htmlFor="removeSlotNo">Slot Number *</label>
            <input
              type="number"
              id="removeSlotNo"
              placeholder="Enter slot number"
              min="1"
            />
          </div>

          <button type="button" className="btn btn-danger">
            Remove Vehicle
          </button>
        </form>
      </div>
    </div>
  )
}

export default ParkRemove