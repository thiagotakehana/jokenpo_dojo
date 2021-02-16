const jokenpo = require('../src/index');

describe('Testes da TESOURA ganhando', () => {
    it('deve retornar TESOURA quando TESOURA x PAPEL', () => {
        expect(jokenpo('TESOURA', 'PAPEL')).toEqual('TESOURA');
    })

    it('deve retornar TESOURA quando PAPEL x TESOURA', () => {
        expect(jokenpo('PAPEL', 'TESOURA')).toEqual('TESOURA');
    })
})

describe('Testes da PEDRA ganhando', () => {
    it('deve retornar PEDRA quando PEDRA x TESOURA', () => {
        expect(jokenpo('PEDRA', 'TESOURA')).toEqual('PEDRA');
    })

    it('deve retornar PEDRA quando TESOURA X PEDRA', () => {
        expect(jokenpo('TESOURA', 'PEDRA')).toEqual('PEDRA');
    })
})

describe('Testes da PAPEL ganhando', () => {
    it('deve retornar PAPEL quando PAPEL x PEDRA', () => {
        expect(jokenpo('PAPEL', 'PEDRA')).toEqual('PAPEL');
    })

    it('deve retornar PAPEL quando PEDRA x PAPEL', () => {
        expect(jokenpo('PEDRA', 'PAPEL')).toEqual('PAPEL');
    })
})

describe('Testes de EMPATE', () => {
    it('deve retornar EMPATE quando PAPEL x PAPEL', () => {
        expect(jokenpo('PAPEL','PAPEL')).toEqual('EMPATE');
    })

    it('deve retornar EMPATE quando TESOURA x TESOURA', () => {
        expect(jokenpo('TESOURA','TESOURA')).toEqual('EMPATE');
    })

    it('deve retornar EMPATE quando PEDRA x PEDRA', () => {
        expect(jokenpo('PEDRA','PEDRA')).toEqual('EMPATE');
    })
})