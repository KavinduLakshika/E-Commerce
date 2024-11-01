import React from 'react';



function Footer() {
    return (
        <div className="rounded text-center" style={{ backgroundColor: '#6C757D' }}>
            <div className="container p-4 pb-0" >
                <section className="mb-4" >
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#55acee' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                   
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    
                </section>
            </div>
            <div className="rounded-bottom text-center p-3" style={{ backgroundColor: '#343A40' }}>

                <p class="text-white"> © 2020 Copyright:</p>

                <a className="text-light " href="https://e-commerce-mkb.surge.sh/"> E Commerce</a>
            </div>
        </div>
    );
}

export default Footer;
