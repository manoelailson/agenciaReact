import img1 from '../img/paisagem1.png'
import img2 from '../img/paisagem2.jpg'
import img3 from '../img/paisagem3.jpg'
import img4 from '../img/paisagem4.jpg'

function Promocoes(){
    return(
        <div class="container body-content">
            <h1 style={{ padding: '50px' }}>VOOS COM DESCONTO</h1>
        <div style={{ padding: '100px' }}>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={img1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Brasil</h5>
                                        <p class="card-text">De <strike>$780</strike> por apenas $320</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Nova zelandia</h5>
                                        <p class="card-text">De<strike> $780</strike> por aepnas $320</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={img3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Guatemala</h5>
                                        <p class="card-text">De <strike>$780</strike> por apenas $320</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={img4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">China</h5>
                                        <p class="card-text">De <strike>$780</strike> por apenas $320</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={img1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Finalandia</h5>
                                        <p class="card-text">De <strike>$780</strike> por apenas $320</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Brasil</h5>
                                        <p class="card-text">De <strike>$780</strike> por apenas $320</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4" >
                <div class="col">
                    <div class="card text-center">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Chile</h5>
                            <p class="card-text">Pacotes de <strike>R$27,800</strike> por apenas  R$20,000</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">França</h5>
                            <p class="card-text">Pacotes de <strike>R$27,800</strike> por apenas  R$18,000</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Noruega</h5>
                            <p class="card-text">Pacotes de <strike>R$27,800</strike> por apenas  R$16,000</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Japão</h5>
                            <p class="card-text">Pacotes de <strike>R$27,800</strike> por apenas  R$20,000</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>


    )
}

export default Promocoes