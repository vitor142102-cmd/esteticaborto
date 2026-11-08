# Street Detail: Landing Page

Site em **React + Tailwind + Framer Motion + Lenis** (scroll suave), tudo via CDN. Não precisa instalar nada: basta abrir o `index.html` no navegador, com internet ligada.

A versão anterior, sem React, ficou guardada em `versao-estatica.html` (usa `style.css` e `script.js`).

## O que o site tem

- **Hero interativo:** o visitante "pole" o carro com o mouse (ou com o dedo no celular). Uma boina de polimento revela a pintura brilhando, um medidor de brilho em forma de conta-giros sobe até 100% e uma faixa de luz atravessa a tela. Ao abrir a página, uma demonstração automática pole metade do carro.
- **Faixa de serviços:** acelera conforme a velocidade do scroll.
- **Cards de serviço:** com foto, inclinação 3D e reflexo amarelo que segue o mouse.
- **Coating cerâmico:** painel interativo com gotas de água que fogem do cursor e escorrem, como numa pintura hidrofóbica.
- **Processo:** um carrinho desce a estrada conforme o scroll, acendendo cada etapa.
- **Galeria:** rola na horizontal enquanto você desce a página (no celular, desliza com o dedo).
- **Restante:** ficha técnica, dúvidas em acordeão, chamada final com parallax e botão do WhatsApp flutuante.

## O que trocar antes de publicar

Tudo fica no começo do `<script>` do `index.html` (procure por `Configuração — TROQUE AQUI`):

| O quê | Constante |
|---|---|
| Número do WhatsApp | `WHATSAPP`: 55 + DDD + número, só dígitos |
| Endereço | `ENDERECO` |
| Horário | `HORARIO` |

## Fotos, vídeo e logo

O site usa somente material da própria Street Detail, que fica na pasta `img/`:

| Arquivo | Onde aparece |
|---|---|
| `logo.png` | Logo oficial sem o fundo preto (cabeçalho, intro, rodapé). `logo-s.png` é o ícone da aba. |
| `gli-polido.jpg` | Hero interativo (o visitante "pole" o Jetta GLI) e galeria |
| `video-street.mp4` | Fundo desfocado do hero, card de Polimento, galeria e chamada final |
| `roda-antes.jpg` / `roda-depois.jpg` | Antes & Depois e card de Lavagem |
| `moto-antes.jpg` / `moto-depois.jpg` | Antes & Depois e card de Motos |
| `gts-carpro.jpg` | Card de Coating e galeria |
| `chevette-chassi.jpg` | Card de Lavagem de chassi, galeria e fundo da chamada final (cortado, sem o adesivo do story) |
| `interior-bancos.jpg` / `interior-painel.jpg` | Card de Interior e galeria |

Para trocar ou acrescentar fotos, coloque o arquivo em `img/` e ajuste o caminho no objeto `IMG` (começo do script). Na galeria, ajuste também o `ar` (largura ÷ altura da foto).

O hero funciona com qualquer foto em que a pintura apareça bem iluminada. Fotos verticais ficam melhores.

## Ver localmente com servidor (opcional)

O arquivo `.claude/serve.ps1` sobe um servidor simples na porta 5511. É usado pelo Claude para o preview, mas abrir o `index.html` direto também funciona.

## Parâmetros de teste

- `index.html?y=1500`: pula a intro e abre a página deslocada 1500px (só para tirar prints).
- `index.html?polido`: abre com o carro já 100% polido.
