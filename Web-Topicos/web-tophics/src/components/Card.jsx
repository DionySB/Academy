import qrCode from '../assets/teste.webp'

export function Card() {
    return (
      <section className='card'>
        <img src={qrCode} alt="Atividade 20/03" />
        <br></br>
        <strong>Fixed the activity from Tópicos avançados em Ciência da Computação</strong>
        <p>Click Here!</p>
      </section>
    )
}