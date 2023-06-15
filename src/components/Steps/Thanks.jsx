function Thanks({ data }) {
  return (
    <section className="thanks">
      <img
        className="thanks-icon"
        src="/assets/images/icon-thank-you.svg"
        alt="Thank you icon"
      />
      <h1 className="thanks-title">Thank you! {data.personalInfo.name}</h1>
      <p className="thanks-text">
        Thanks for confirming your subscription! we hope you have fun using our
        platform. If you ever need support. please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  )
}

export default Thanks
