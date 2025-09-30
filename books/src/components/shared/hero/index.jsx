export default function Hero(){
    return(
        <>
        <section className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://picsum.photos/700/500"
              className="d-block mx-lg-auto img-fluid shadow-lg rounded-3"
              alt="Hero"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-dark">
              BERANI KAYA BERANI TAKWA
            </h1>
            <p className="lead text-muted">
              CARA MEMPERKAYA DIRI SENDIRI DENGAN BERTAKWA
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                BUY NOW
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                DETAIL
              </button>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}