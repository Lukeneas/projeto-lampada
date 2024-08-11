class Lamp {
    constructor() {
        this.turn = document.querySelector('#turn');
        this.lamp = document.querySelector('#lamp');
        //já ativa ao chamar constructor
        this.init();
    }

    // Verifica se a lâmpada está quebrada
    isLampBroken() {
        return this.lamp.src.indexOf('quebrada') > -1;
    }
    toggleLamp() {
        if (this.lamp.src.indexOf('desligada') > -1) {
            this.lampOn();
        } else {
            this.lampOff();
        }
    }

    // Liga a lâmpada se ela não estiver quebrada
    lampOn() {
        if (!this.isLampBroken()) {
            this.lamp.src = '../assets/imgs/ligada.jpg';
        }
    }

    // Desliga a lâmpada se ela não estiver quebrada
    lampOff() {
        if (!this.isLampBroken()) {
            this.lamp.src = '../assets/imgs/desligada.jpg';
        }
    }

    // Quebra a lâmpada
    lampBroken() {
        this.lamp.src = '../assets/imgs/quebrada.jpg';
    }

    // Inicializa os eventos
    init() {
        this.turn.addEventListener('click', ()=> this.toggleLamp());

        this.lamp.addEventListener('mouseover', ()=> this.lampOn());
        this.lamp.addEventListener('mouseleave', ()=> this.lampOff());
        this.lamp.addEventListener('dblclick', () => this.lampBroken());
    }
}

// Instancia a classe Lamp
const lamp = new Lamp();