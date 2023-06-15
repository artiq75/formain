import Invoice from '../Tools/Invoice'
import { Button } from '../Tools/Tools'

function Summary({ data, isYearly, onBack, onConfirm }) {
  return (
    <section className="summary">
      <div className="summary-header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      {data.plan && data.addons.length && (
        <Invoice data={data} isYearly={isYearly} />
      )}
      <div role="footer" className="footer">
        <div className="footer-inner">
          <Button className="outlined" onClick={onBack}>
            Go Back
          </Button>
          <Button className="secondary" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Summary
