function AddSlotForm() {
  return (
    <div className="card">
      <h2>➕ Add Parking Slot</h2>

      <form>
        <div className="form-group">
          <label htmlFor="slotNo">Slot Number *</label>
          <input
            type="number"
            id="slotNo"
            placeholder="Enter slot number"
            min="1"
          />
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>🏠 Covered Parking</span>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" />
            <span>⚡ EV Charging</span>
          </label>
        </div>

        <button type="button" className="btn btn-primary">
          Add Slot
        </button>
      </form>
    </div>
  )
}

export default AddSlotForm