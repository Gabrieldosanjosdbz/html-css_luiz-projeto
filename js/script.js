window.addEventListener('load', function() {
    const navigate_servico = document.querySelector('#navigate_servico')
    const navigate_portfolio = document.querySelector('#navigate_portfolio')
    const navigate_parceiros = document.querySelector('#navigate_parceiros')
    const navigate_sobre = document.querySelector('#navigate_sobre')
    const navigate_contatos = document.querySelector('#navigate_contatos')

    // home navigation
    navigate_servico.addEventListener('click', () => {
      window.location.href = "servicos.html";
    })
    
    navigate_portfolio.addEventListener('click', () => {
      window.location.href = "portfolio.html";
    })

    navigate_parceiros.addEventListener('click', () => {
      window.location.href = "parceiros.html";
    })

    navigate_sobre.addEventListener('click', () => {
      window.location.href = "sobre.html";
    })

    navigate_contatos.addEventListener('click', () => {
      window.location.href = "contatos.html";
    })

  });