import React from 'react';



function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-6">

                    <form>

                        <div class="mb-3">
                            <label htmlFor="InputName1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="InputName1" aria-describedby="nameHelp" />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="InputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="InputMessage1" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="InputMessage1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact;